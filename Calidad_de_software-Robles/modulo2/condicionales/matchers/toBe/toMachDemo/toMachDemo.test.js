    const { validarEmail, encontrarPalabra, limpiarTexto } = require('../../src/contenido/toMatchDemo');



    describe('toMatch matcher', () => {
    test('Happy path: validar correos electrónicos', () => {
    expect('usuario@mail.com').toMatch(/^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i);
    expect(validarEmail('alguien@dominio.ec')).toBe(true);
    });



    test('Happy path: encontrar palabra con regex', () => {
    expect(encontrarPalabra('Hola Jest', 'jest')).toBe(true);
    });



    test('Sad path: email o patrón inválido', () => {
    expect(() => validarEmail(123)).toThrow('email debe ser string');
    expect(() => encontrarPalabra('Texto', 123)).toThrow('texto y patrón deben ser strings');
    });



    test('Happy/Sad path: limpiar texto', () => {
    expect(limpiarTexto(' Hola mundo ')).toMatch(/^Hola mundo$/);
    expect(() => limpiarTexto(null)).toThrow('texto debe ser string');
    });
    });






    {
    "to": "prof.francisco.higuera@gmail.com",
    "subject": "Testing correo desde NestJS",
    "message": "<div style='background:#f4f7fb;padding:40px;font-family:Arial,sans-serif'><div style='max-width:650px;margin:auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.1)'><div style='background:linear-gradient(135deg,#0f172a,#2563eb);padding:45px;text-align:center;color:white'><h1 style='margin:0;font-size:32px'>Mensaje de Prueba Exitoso</h1><p style='margin-top:10px;font-size:16px'>Sistema de correo funcionando correctamente</p></div><div style='padding:40px;color:#334155;line-height:1.8;font-size:16px'><p>Este correo electrónico ha sido generado como una prueba de funcionamiento del sistema desarrollado por estudiantes de la Carrera de Desarrollo de Software de la Escuela de Tecnologías - Universidad UTE.</p><div style='margin-top:30px;padding:15px;background:#eff6ff;border-radius:10px;color:#25
