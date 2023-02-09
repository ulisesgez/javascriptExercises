/*
Programa una función para contar el número de veces que se repite una palabra en un
texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

/*
Solución:
const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste el texto largo")
    if (!texto) return console.warn("No ingresaste la palabra a evaluar")
    let i = 0,
    contador = 0;
    //Cuando el index of no detecta el texto que quieres buscar en otro,
    //no lo encuentra en ninguna parte, entonces va a devolver un -1
    while(i !== -1) {
        i = cadena.indexOf(texto, i);
        if(i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
};

textoEnCadena("hola mundo adios mundo", "mundo");
*/
