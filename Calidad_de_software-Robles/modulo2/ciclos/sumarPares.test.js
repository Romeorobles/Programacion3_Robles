    const { sumarPares } = require('./sumarPares');

    describe('sumarPares', ()=>{
    test('Happy path: n=[5,5,5]=>5', ()=>{
        expect(sumarPares([5,5,5])).toBe(0);
    })
    test('Happy path: n=[6,6,6]=>6', ()=>{
        expect(sumarPares([6,6,6])).toBe(3);
    })
    test('Sad path: n inválido', ()=>{
        expect(()=>sumarPares(0)).toThrow('Arreglo no válido')
        expect(()=>sumarPares([])).toThrow('Arreglo no válido')
    })
})