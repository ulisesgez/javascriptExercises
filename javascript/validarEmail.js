/*
Programa una función que valide que un texto sea un email válido,
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
const validarEmail = (email = "") => {
    if (!email) return console.warn("No ingresaste una cadena de texto")
	if(typeof email !== "string") return console.warn("El valor ingresado no es de tipo string");
    let expReg = /[a-z0-9]+(\.[_a-z0-9+])*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return(expReg)
    ?console.info("valido")
    :console.info("no valido");
}