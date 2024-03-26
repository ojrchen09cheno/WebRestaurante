import { VerCategoriasApp } from "../src/application/serviceApplication/categoria/verCategoriasApp";

describe("Test para ver todas las categorias", () => {
  it("deberia retornar todas las categorias", async () => {

    const result = await verCategoriasApp.ver();
  
    expect(result.data).toEqual(data);
    expect(verCategoriasRepo.findAll).toHaveBeenCalled();
  });
})

const data = [
  {
    nombre: "arroz",
    id: "1",
  },
  {
    nombre: "chop",
    id: "2",
  },
  {
    nombre: "lumpia",
    id: "3"
  },
];

const verCategoriasRepo = {
  findAll: jest.fn().mockResolvedValue(data),
};

const verCategoriasApp = new VerCategoriasApp(
  verCategoriasRepo
);