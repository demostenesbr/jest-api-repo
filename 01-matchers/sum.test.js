const sum = require("./sum");

describe("Exemplos de testes", () => {
  it("Precisa somar 1 + 2 para igualar a 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("Exibição do resulatdo", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("Verdadeiro ou falso", () => {
  it("Verdadeiro", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

describe("Números", () => {
  it("Dois mais dois", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(4);
  });

  it("Adicionando acréscimos", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.299999999);
  });
});

describe("Strings - Cordas", () => {
  it("Esta corda não é minha", () => {
    expect("tempo").not.toMatch(/Eu/);
  });
});

describe("Arrays - Matrizes", () => {
  const shoppingLights = [];
});
