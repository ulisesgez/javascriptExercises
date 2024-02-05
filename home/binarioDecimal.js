/*
Programa una función para convertir números de base binaria a decimal
y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

const convertir = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el número a convertir");
    if(base === undefined) return console.warn("No ingresaste la base a convertir");
	if(typeof numero !== "number") return console.warn("El valor ingresado no es de tipo number");
	if(typeof base !== "number") return console.warn("El valor ingresado no es de tipo number");
    if(base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    } else {
        return console.error("tipo de base no valido");
    }
}

convertir(100, 2);
convertir(4, 10);