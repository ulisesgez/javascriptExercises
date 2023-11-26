/*
Programa una función que valide si una palabra o frase dada, es un
palíndromo (que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true.
*/
function palindromo(texto) {
    const separarCadena = texto.split("");
    const invertirArreglo = separarCadena.reverse();
    const unirArreglo = invertirArreglo.join("");
    if(unirArreglo.toLowerCase() === texto.toLowerCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindromo("Salas");//true
palindromo("hola");//false
palindromo("diaid");//true
palindromo("salaS");//true

/*
Solución:

const palindromo = (palabra = "")=> {
    if(!palabra) return console.warn("No ingresaste una palabra o frase");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return(palabra === alReves)
        ?console.info(true)
        :console.info(false);
};

palindromo();
palindromo("Salas");
palindromo("hola");
palindromo("diaid");
palindromo("salaS");
*/
