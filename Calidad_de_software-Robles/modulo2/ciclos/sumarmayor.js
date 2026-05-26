function sumarmayor(numeros){
    if (!Array.isArray(numeros)||numeros.length==0)
        throw new TypeError('Arreglo no válido');
    let contador=0;
    for(let i=0;i<numeros.length;i++) {
        if (numeros[i]>100){
            contador++;
        }
    }
    return contador;
}
module.exports={ sumarmayor };
