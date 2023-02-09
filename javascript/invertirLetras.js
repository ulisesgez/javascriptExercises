/*
Programa una función que invierta las palabras de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

function invertirCadena(cad) {
    // Paso 1. Usa el método split() para devolver un nuevo arreglo
    var separarCadena = cad.split(""); // var separarCadena = "hola".split("");
    // ["h", "o", "l", "a"]
 
    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]
 
    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"
    
    //Paso 4. Devolver la cadena invertida
    console.log(unirArreglo); // "aloh""
}

invertirCadena("Hola Mundo");

/*
Solución:

const invertirCadena = (cadena = "") =>
(!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Hola Mundo");
*/

