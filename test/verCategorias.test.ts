import { VerCategoriasService } from '../src/application/services/verCategoriasService';

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

const categoriaRepositoryMock = {
  guardar: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn().mockResolvedValue(data),
};

it("deberia retornar todas las categorias", async () => {
  // Arrange
  const categoriaApplicationService = new VerCategoriasService(
    categoriaRepositoryMock
  );

  // Act
  const result = await categoriaApplicationService.verCategorias();

  // Assert
  expect(result).toEqual(data);
  expect(categoriaRepositoryMock.findAll).toHaveBeenCalled();
});
