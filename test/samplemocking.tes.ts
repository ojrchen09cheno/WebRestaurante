//Do not run
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