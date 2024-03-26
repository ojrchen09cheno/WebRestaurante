import { LoginApp } from '../src/application/serviceApplication/user/loginApp'
import bcrypt from 'bcryptjs'

describe("Test de login", () => {
  it("Deberia hacer login si el usuario existe y dar token JSON", async () => {
    const usuarioExistente = {
      user: "test",
      contrasena: "test",
    }

    const result = await loginTest.login(usuarioExistente);

    expect(result.success).toEqual(true);
    expect(result.data).toHaveProperty('token');
  })

  it("Deberia de dar error si el usuario no existe", async () => {
    const usuarioInexistente = {
      user: "noexiste",
      contrasena: "falsa"
    }

    const result = await loginTest.login(usuarioInexistente);
    const hasPass = "contrasena" in result.data;

    expect(result.success).toEqual(false);
    expect(hasPass).toEqual(false);
  })

  it("Deberia de dar error si la contrasena es incorrecta no existe", async () => {
    const contrasenaEquivocada = {
      user: "test",
      contrasena: "equivocada"
    }

    const result = await loginTest.login(contrasenaEquivocada);
    const hasPass = "contrasena" in result.data;

    expect(result.success).toEqual(false);
    expect(hasPass).toEqual(false);
  })
})

const data = {
  id: 0,
  nombre: "test",
  user: "test",
  contrasena: bcrypt.hashSync('test', 10),
}

const buscarUserNameRepo = {
  findByUser: jest.fn().mockResolvedValue(data)
}

const loginTest = new LoginApp(buscarUserNameRepo);

jest.mock('../src/config/config', () => ({
  config: {
    SECRET: 'test',
    TOKEN_EXPIRE: '48h'
  }
}))