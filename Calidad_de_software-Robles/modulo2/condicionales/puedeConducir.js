function puedeConducir(edad) {
    if (typeof edad !== 'number' || !Number.isInteger(edad) || edad < 0) {
        throw new Error('n debe ser entero');
    }
    return edad >= 18 ? 'Si' : 'No';
}

module.exports = { puedeConducir };
