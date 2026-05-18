const { calificacion } = require('./calificacion');

describe('calificacion', () => {
    test('Happy path: 9 => aprobado', () => {
        expect(calificacion(9)).toBe('aprobado');
    });

    test('Happy path: 5 => supletorio', () => {
        expect(calificacion(5)).toBe('supletorio');
    });

    test('Happy path: 2 => reprobado', () => {
        expect(calificacion(2)).toBe('reprobado');
    });

    test('Sad path: nota inválida', () => {
        expect(() => calificacion(-1)).toThrow('n debe ser entero');
        expect(() => calificacion('8')).toThrow('n debe ser entero');
    });
});
