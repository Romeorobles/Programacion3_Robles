const { validarEmail } = require('./validarEmail');

 describe('toContain Matcher', () => {
    test('Happy path: que devuelva false', () => {
        const response = validarEmail('fran.n.d');
        expect(response).toBe(false);
    });
    test('Happy path: que devuelva true', () => {
        const response = validarEmail('fran@gmail.com');
        expect(response).toBe(true);
    });
    test('Sad path: elementos invalidos',
        () => {
            expect(() => validarEmail(3455))
                .toThrow('email debe ser string');
        });
});
