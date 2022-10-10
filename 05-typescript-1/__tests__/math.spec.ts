import math from "../example/math";

describe("Math", () => {
  describe("Basic function test", () => {
    it("add is called", () => {
      // Arrange
      const mockedAdd = jest.spyOn(math, "add");

      // Act
      const added = math.add(1, 2);

      // Assertion
      expect(mockedAdd).toHaveBeenCalledTimes(1);
      expect(mockedAdd).toHaveBeenCalledWith(1, 2);
      expect(added).toBe(3);
      expect(mockedAdd.mock.calls[0][0]).toBe(1);
      expect(mockedAdd.mock.calls[0][1]).toBe(2);
      expect(mockedAdd.mock.results[0].value).toBe(3);
    });
  });
});