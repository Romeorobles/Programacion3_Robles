function temperatura(celsius) {
    if (typeof celsius !== 'number' || isNaN(celsius) || celsius < -50 || celsius > 60) {
        throw new TypeError('temperatura invalida');
    }
    if (celsius >= 30) return 'Calor';
    if (celsius >= 15) return 'Templado';
    return 'Frio';
}

module.exports = { temperatura };
