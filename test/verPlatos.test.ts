import { VerPlatosApp } from "../src/application/serviceApplication/plato/verPlatosApp";

describe("Test para ver todos los platos", () => {
  it("Deberia mostrar todos los platos", async () => {

    const platos = await VerPlatos.verPlatos();

    expect(platos.data).toEqual(repoData);
    expect(VerPlatosRepo.findAll).toHaveBeenCalled();
  })
})

const repoData = [
  {
    id: 0, 
    nombre: "arroz", 
    descripcion: "con pollo, cerdo y jamon", 
    precio: 1, 
    categoria: 0
  },
  {
    id: 1,
    nombre: "chop suey",
    descripcion: "ensalada salteada",
    precio: 2,
    categoria: 1
  }
]

const VerPlatosRepo = {
  findAll: jest.fn().mockResolvedValue(repoData)
}

const VerPlatos = new VerPlatosApp(VerPlatosRepo);