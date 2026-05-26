function sumarArreglo(arr) {
  if (!Array.isArray(arr) || arr.length !== 3)
    throw new TypeError('arr debe ser un arreglo de 3 elementos');
  if (!arr.every(Number.isFinite))
    throw new TypeError('arr debe contener solo números');
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}
module.exports = { sumarArreglo };
