let animals = ["elefante", "zebra", "urso", "tigre"];

describe("array de animais", () => {
  it("Deve adicionar ao final da matriz (array)", () => {
    animals.push("jacaré");
    expect(animals[animals.length - 1]).toBe("jacaré");
  });
  it("Deve adicionar no início da matriz (array)", () => {
    animals.unshift("macaco");
    expect(animals[0].toBe("macaco"));
  });
});
