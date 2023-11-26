/*
Programa una función que determine si un número es par o impar,
pe. miFuncion(29) devolverá Impar.
*/
const parImpar = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
	if(typeof numero !== "number") return console.warn("E valor ingresado no es de tipo number");
	if(numero === 0) return console.error("El número no puede ser 0");
    return ((numero % 2) === 0)
    ? console.log("par")
    : console.log("impar");
}

parImpar();
parImpar(-1);
parImpar(0);
parImpar(10);
parImpar("hola");
parImpar(15);