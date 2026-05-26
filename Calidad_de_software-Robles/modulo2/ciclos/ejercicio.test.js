const { sumarArreglo } = require('./ejercicio');

describe('Sumar Arreglo', () => {
  test('Happy path: [1,2,3] => 6', () => {
    expect(sumarArreglo([1, 2, 3])).toBe(6);
  });
  test('Happy path: [10,20,30] => 60', () => {
    expect(sumarArreglo([10, 20, 30])).toBe(60);
  });
  test('Sad path: no es arreglo', () => {
    expect(() => sumarArreglo('123')).toThrow('arr debe ser un arreglo de 3 elementos');
  });
  test('Sad path: arreglo con distinto tamaño', () => {
    expect(() => sumarArreglo([1, 2])).toThrow('arr debe ser un arreglo de 3 elementos');
  });
  test('Sad path: contiene no números', () => {
    expect(() => sumarArreglo([1, '2', 3])).toThrow('arr debe contener solo números');
  });
});
