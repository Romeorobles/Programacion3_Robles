


const prompt = require("prompt-sync")();
const productostexto = promt("ingresa el numero de productos: ");
const productos = parseInt(productostexto, 10);

if (productos > 10) {
    console.log("Descuento aplicado");
} else {
    console.log("No aplica descuento");

}


