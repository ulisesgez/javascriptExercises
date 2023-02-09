/*
Programa una función que te devuelva el texto recortado según el número de
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const textoRecortado = (texto, recorte) => {
    for(i = 0; i<recorte; i++) {
        const resultado = texto.split('');
        console.log(resultado[i]);
    }
};

textoRecortado("Hola Mundo", 4);

/*
Solución:
const recortarTexto = (cadena = "", longitud = undefined) =>
    (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(longitud === undefined)
        ?console.warn("No ingresaste la longitud para recortar texto")
        :console.info(cadena.slice(0, longitud));//Inicio - fin

recortarTexto("Hola Mundo", 4);//Hola
*/