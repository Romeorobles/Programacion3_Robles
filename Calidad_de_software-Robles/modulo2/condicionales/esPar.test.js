const { esPar } = require('./esPar');

describe('esPar', () => {
    test('2 es par', () => {
        expect(esPar(2)).toBe(true);
    });

    test('3 no es par', () => {
        expect(esPar(3)).toBe(false);
    });

    test('0 es par', () => {
        expect(esPar(0)).toBe(true);
    });

    test('número negativo par (-4)', () => {
        expect(esPar(-4)).toBe(true);
    });

    test('número negativo impar (-3)', () => {
        expect(esPar(-3)).toBe(false);
    });
});
