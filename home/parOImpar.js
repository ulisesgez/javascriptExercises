/*
Programa una función que determine si un número es par o impar,
pe. miFuncion(29) devolverá Impar.
*/
const parImpar = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
	if(typeof numero !== "number") return console.warn("El valor ingresado no es de tipo number");
	if(numero === 0) return console.error("El número no puede ser 0");
    return ((numero % 2) === 0)
    ? console.log("par")
    : console.log("impar");
}

parImpar();//No ingresaste un número
parImpar(-1);//impar
parImpar(0);//El número no puede ser 0
parImpar(10);//par
parImpar("hola");//El valor ingresado no es de tipo number
parImpar(15);//impar