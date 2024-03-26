import { CrearPlatoApp } from "../src/application/serviceApplication/plato/crearPlatoApp";

describe("Tests para crear platos", () => {
  it("Deberia crear el plato si es valido", async () => {
    const platoValido = {
      nombre: "aloz chino",
      categoria: 0,
      precio: 1,
    };
    const { crearPlatoTest, crearPlatoRepo, buscarCategoriaIdRepo } = testSetup(
      platoValido,
      0
    );

    const result = await crearPlatoTest.crearPlato(platoValido);

    expect(result.success).toEqual(true);
    expect(buscarCategoriaIdRepo.findById).toHaveBeenCalledWith(
      platoValido.categoria
    );
    expect(crearPlatoRepo.Crear).toHaveBeenCalledWith(platoValido);
  });

  it("Deberia de dar error si la categoria no existe", async () => {
    const categoriaInexistente = {
      nombre: "aloz chino",
      categoria: 1,
      precio: 1,
    };
    const { crearPlatoTest, crearPlatoRepo, buscarCategoriaIdRepo } = testSetup(
      categoriaInexistente,
      null
    );

    const result = await crearPlatoTest.crearPlato(categoriaInexistente);

    expect(result.message).toEqual("Categoria no encontrada");
    expect(buscarCategoriaIdRepo.findById).toHaveBeenCalledWith(
      categoriaInexistente.categoria
    );
  });

  it("Deberia de dar error si el precio es menor a 1", async () => {
    const precioInvalido = {
      nombre: "aloz chino",
      categoria: 0,
      precio: 0,
    };
    const { crearPlatoTest, crearPlatoRepo, buscarCategoriaIdRepo } = testSetup(
      precioInvalido,
      0
    );

    const result = await crearPlatoTest.crearPlato(precioInvalido);

    expect(result.message).toEqual("El precio del plato debe ser mayor a 0");
  });

  it("Deberia de dar error si el nombre es invalido", async () => {
    const nombreInvalido = {
      nombre: "",
      categoria: 0,
      precio: 1,
    };
    const { crearPlatoTest, crearPlatoRepo, buscarCategoriaIdRepo } = testSetup(
      nombreInvalido,
      0
    );

    const result = await crearPlatoTest.crearPlato(nombreInvalido);

    expect(result.message).toEqual("El plato no tiene nombre");
  });
});

function testSetup(data: any, id: any) {
  const crearPlatoRepo = {
    Crear: jest.fn().mockResolvedValue(data),
  };
  let buscarCategoriaIdRepo;
  if (id!=null) {
    buscarCategoriaIdRepo = {
      findById: jest.fn().mockResolvedValue({ id: id }),
    };
  } else {
    buscarCategoriaIdRepo = {
      findById: jest.fn().mockResolvedValue(null),
    };
  }

  const crearPlatoTest = new CrearPlatoApp(
    crearPlatoRepo,
    buscarCategoriaIdRepo
  );
  return { crearPlatoTest, crearPlatoRepo, buscarCategoriaIdRepo };
}
