import { VerPlatoIdApp } from "../src/application/serviceApplication/plato/verPlatoIdApp";

describe("Test para buscar platos por Id", () =>{
  it("Deberia retornar si el id se encuentra en la BD", async () => {

    const dataValida = {
      id: 0,
      nombre: "arroz",
      descripcion: "",
      precio: 1,
      categoria: 0,
    } 
    const VerPlatoRepo = {
      findById: jest.fn().mockResolvedValue(dataValida)
    }
    const VerPlatoIdTest = new VerPlatoIdApp(VerPlatoRepo);

    const result = await VerPlatoIdTest.verPlato(0)

    expect(result.data).toEqual(dataValida);
    expect(VerPlatoRepo.findById).toHaveBeenCalledWith(0);
  })

  it("Deberia retornar error si el id no se encuentra en la DB", async () => {

    const dataInvalida = null;
    const VerPlatoRepo = {
      findById: jest.fn().mockResolvedValue(dataInvalida)
    }
    const VerPlatoIdTest = new VerPlatoIdApp(VerPlatoRepo);

    const result = await VerPlatoIdTest.verPlato(1);

    expect(result.success).toEqual(false);
    expect(VerPlatoRepo.findById).toHaveBeenCalledWith(1);
  })
})