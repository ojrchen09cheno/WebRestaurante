import { CrearCategoriaApp } from "../src/application/serviceApplication/categoria/crearCategoriaApp";

describe("Test para crear categorias", () => {
  it("Deberia crear una categoria si es valida", async () => {
    const dataValida = {
      nombre: "arroz chino"
    }
    const guardarCategoriaRepo = {
      guardar: jest.fn().mockResolvedValue(dataValida)
    };
    const crearCategoriaApp = new CrearCategoriaApp(guardarCategoriaRepo);

    const result = await crearCategoriaApp.crear(dataValida);

    expect(result.success).toEqual(true);
    expect(guardarCategoriaRepo.guardar).toHaveBeenCalledWith(dataValida);
  })

  it("Deberia de dar un error si la categoria no tiene nombre", async () => {
    const dataInvalida = {
      nombre: ""
    }
    const guardarCategoriaRepo = {
      guardar: jest.fn().mockResolvedValue(dataInvalida)
    };
    const crearCategoriaApp = new CrearCategoriaApp(guardarCategoriaRepo);

    const result = await crearCategoriaApp.crear(dataInvalida);

    expect(result.success).toEqual(false);
  })
})