/*
1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de textos separados
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo.
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