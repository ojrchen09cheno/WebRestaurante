import { RegisterApp } from "../src/application/serviceApplication/user/registerApp";

describe("Test para registro de usuario", () => {
  it("Deberia crear un usuario si no existe", async () => {
    const data = null;
    const BuscarUserNameRepo = {
      findByUser: jest.fn().mockResolvedValue(data),
    };
    const nuevoUsuario = {
      user: "nuevo",
      nombre: "nuevo",
      contrasena: "nuevo",
    };
    const CrearUserRepo = {
      crear: jest.fn().mockResolvedValue(nuevoUsuario),
    };
    const RegisterTest = new RegisterApp(CrearUserRepo, BuscarUserNameRepo);

    const result = await RegisterTest.registrarse(nuevoUsuario);

    expect(result.statusCode).toEqual(201);
    expect(BuscarUserNameRepo.findByUser).toHaveBeenCalledWith(
      nuevoUsuario.user
    );
    expect(CrearUserRepo.crear).toHaveBeenCalledWith(nuevoUsuario);
  });

  it("Deberia de dar un error si el usuario ya existe", async () => {
    const data = {
      id: 0,
      user: "usertest",
      nombre: "nombretest",
      role: 1,
      contrasena: "passtest",
    };
    const BuscarUserNameRepo = {
      findByUser: jest.fn().mockResolvedValue(data),
    };
    const usuarioExistente = {
      user: "usertest",
      nombre: "existente",
      contrasena: "existente",
    };
    const CrearUserRepo = {
      crear: jest.fn().mockResolvedValue(usuarioExistente),
    };
    const RegisterTest = new RegisterApp(CrearUserRepo, BuscarUserNameRepo);

    const result = await RegisterTest.registrarse(usuarioExistente);
    const hasPass = "contrasena" in result.data;

    expect(result.success).toEqual(false);
    expect(BuscarUserNameRepo.findByUser).toHaveBeenCalledWith(
      usuarioExistente.user
    );
    expect(hasPass).toEqual(false);
    expect(data.user).toEqual((<any>result.data).user)
  });
  
});
