/*
Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10.
*/

function miFuncion() {
    let cadena = ""
    cadena = prompt("Número de caracteres de una cadena");
    console.log(cadena.length);
    console.log(typeof cadena);
}

miFuncion();

/*
Forma de resolverse en el video:
Se agrega a una variable para buenas practicas(funcion expresada), ademas de que
se hace en una arrow function y se usa el oprador terneario:

const contarCaracteres = (cadena = "") =>
(!cadena)
    ?console.warn("No ingresaste ninguna cadena")
    :console.info(`la cadena ${cadena} tiene ${cadena.lenght} caracteres`);

contarCaracteres();//No ingresaste ninguna cadena
contarCaracteres("Hola Mundo")//la cadena Hola Mundo tiene 10 caracteres
*/