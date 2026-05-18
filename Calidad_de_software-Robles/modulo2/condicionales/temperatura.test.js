const { temperatura } = require('./temperatura');

describe('temperatura', () => {

    test('40 => Calor', () => {
        expect(temperatura(40)).toBe('Calor');
    });

    test('30 => Calor (límite inferior)', () => {
        expect(temperatura(30)).toBe('Calor');
    });

    test('20 => Templado', () => {
        expect(temperatura(20)).toBe('Templado');
    });

    test('15 => Templado (limite inferior)', () => {
        expect(temperatura(15)).toBe('Templado');
    });

    test('29.9 => Templado (limite superior)', () => {
        expect(temperatura(29.9)).toBe('Templado');
    });

    test('0 => Frio', () => {
        expect(temperatura(0)).toBe('Frio');
    });

    test('14.9 => Frio (limite superior)', () => {
        expect(temperatura(14.9)).toBe('Frio');
    });

    test('-50 => Frio (limite mínimo valido)', () => {
        expect(temperatura(-50)).toBe('Frio');
    });

    test('60 => Calor (limite máximo valido)', () => {
        expect(temperatura(60)).toBe('Calor');
    });

    // Sad path
    test('string lanza TypeError', () => {
        expect(() => temperatura('30')).toThrow(TypeError);
        expect(() => temperatura('30')).toThrow('temperatura invalida');
    });

    test('NaN lanza TypeError', () => {
        expect(() => temperatura(NaN)).toThrow(TypeError);
        expect(() => temperatura(NaN)).toThrow('temperatura invalida');
    });

    test('menor que -50 lanza TypeError', () => {
        expect(() => temperatura(-51)).toThrow(TypeError);
        expect(() => temperatura(-51)).toThrow('temperatura invalida');
    });

    test('mayor que 60 lanza TypeError', () => {
        expect(() => temperatura(61)).toThrow(TypeError);
        expect(() => temperatura(61)).toThrow('temperatura invalida');
    });

    test('undefined lanza TypeError', () => {
        expect(() => temperatura(undefined)).toThrow(TypeError);
        expect(() => temperatura(undefined)).toThrow('temperatura invalida');
    });
});
