const { sumarmayor } = require('./sumarmayor');

describe('sumarmayor', () => {
    test('Happy path: ninguno mayor a 100 => 0', () => {
        expect(sumarmayor([5, 5, 5])).toBe(0);
    })
    test('Happy path: todos mayores a 100 => 3', () => {
        expect(sumarmayor([101, 102, 103])).toBe(3);
    })
    test('Happy path: solo uno mayor a 100 => 1', () => {
        expect(sumarmayor([90, 50, 101])).toBe(1);
    })
    test('Sad path: n inválido', () => {
        expect(() => sumarmayor(0)).toThrow('Arreglo no válido')
        expect(() => sumarmayor([])).toThrow('Arreglo no válido')
    })
})
