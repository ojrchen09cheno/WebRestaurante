import { CategoriaApplicationService } from "../src/application/services/CategoriaApplicationService";

const categoriaRepositoryMock = {
    guardar: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
};

it("deberia guardar una nueva categoria si es valida", async () => {
  // Arrange

  const categoriaApplicationService = new CategoriaApplicationService(
    categoriaRepositoryMock
  );

  const agregarData = {
    nombre: "agregar",
  };

  // Act
  const result = await categoriaApplicationService.crearCategoria(agregarData);

  // Assert
  expect(result).toEqual(agregarData);
  expect(categoriaRepositoryMock.guardar).toHaveBeenCalledWith(agregarData);
});

it("deberia no guardar una categoria si es invalida", async () => {
  // Arrange

  const categoriaApplicationService = new CategoriaApplicationService(
    categoriaRepositoryMock
  );

  const invalidData = {
    nombre: ""
  };

  // Assert
  expect(async () => {
    await categoriaApplicationService.crearCategoria(invalidData);
  }).rejects.toThrow();
});