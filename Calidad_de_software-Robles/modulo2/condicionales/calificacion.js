function calificacion(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        throw new Error('n debe ser entero');
    }
    if (nota > 7) return 'aprobado';
    if (nota >= 4) return 'supletorio';
    return 'reprobado';
}

module.exports = { calificacion };
