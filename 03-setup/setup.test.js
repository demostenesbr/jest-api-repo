let animals = ['elefante', 'zebra', 'urso', 'tigre'];

beforeAll(() => {
  console.log('Antes de todos');
  animals = ['elefante', 'zebra', 'urso', 'tigre'];
});

beforeEach(() => {
  console.log('Antes de cada');
  animals = ['elefante', 'zebra', 'urso', 'tigre'];
});

afterEach(() => {
  console.log('Após de cada');
  animals = ['elefante', 'zebra', 'urso', 'tigre'];
});

afterAll(() => {
  console.log('Após de todos');
  animals = ['elefante', 'zebra', 'urso', 'tigre'];
});

describe('array de animais', () => {
  it('Deve adicionar ao final da matriz (array)', () => {
    animals.push('jacaré');
    expect(animals[animals.length - 1]).toBe('jacaré');
  });

  it('Deve adicionar no início da matriz (array)', () => {
    animals.unshift('papagaio');
    expect(animals[0].toBe('papagaio'));
  });

  it('Deve ter a inicial a partir de 4', () => {
    animals = ['elefante', 'zebra', 'urso', 'tigre'];
    expect(animals.length).toBe(4);
  })
});

describe('Testando qualquer coisa', () => {
  it('verdade sobre a veracidade', () => {
    expect(true).toBeTruthy();
  });
});
