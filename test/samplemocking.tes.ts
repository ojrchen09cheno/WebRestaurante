// Do not run
const user = require("./user");
const database = require("./database");

jest.mock("./database");

describe("getUser", () => {
  test("should return the user with the given userId", () => {
    const userId = "123";
    const userObj = { id: userId, name: "John" };
    database.getUser.mockReturnValue(userObj);
    const result = user.getUser(userId);
    expect(result).toBe(userObj);
  });
});

// Mock without database files
function ProductrepositoryMock(product: Product): ProductRepository {
  return {
      save: jest.fn().mockReturnValue(Promise.resolve(product))
  }
}

describe('ProductDomainService', () => {

  let service: ProductService = null

  it('should call ProductRepository.save()"', async () => {
      const repositoryMock =  ProductrepositoryMock(({ productId: 1} as Product))
      service = new ProductDomainService(repositoryMock)
      await service.save({ productId: 1, unitPrice: 100} as Product)
      expect(repositoryMock.save).toBeCalled()
  });

  it('should return true productService.validateProductPrice() when unitPrice is greater than 0 "', async () => {
      const repositoryMock =  ProductrepositoryMock(({ productId: 1} as Product))
      service = new ProductDomainService(repositoryMock)
      const result = service.validateProductPrice({ productId: 1, unitPrice: 100} as Product)
      expect(result).toBe(true)
  });

  it('should throw ProductServiceError when unitPrice is negative or zero"', async () => {
      const repositoryMock =  ProductrepositoryMock(({ productId: 1} as Product))
      service = new ProductDomainService(repositoryMock)
      await expect(service.save({ productId: 1, unitPrice: 0 } as Product)).rejects.toThrow(ProductServiceError)
      await expect(service.save({ productId: 1, unitPrice: -10 } as Product)).rejects.toThrow(ProductServiceError)
  });

})