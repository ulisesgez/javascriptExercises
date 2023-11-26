/*
Programa una función que valide que un texto sea un nombre válido,
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste una cadena de texto")
	if(typeof nombre !== "string") return console.warn("El valor ingresado no es de tipo string");
    let expReg = /^[A-Za-zÑñÁáÉéIíOóUú\s]+$/g.test(nombre);
    return(expReg)
    ?console.info("valido")
    :console.info("no valido");
}