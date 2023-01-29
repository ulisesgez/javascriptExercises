/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (texto = "", repeticion) => {
    for(i = 0; i<repeticion; i++) {
        document.write(`${texto} `);
    }
};

repetirTexto('Hola Mundo', 3);

/*
const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste un texto");
    if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
    if (veces === 0) return console.error("El numero de veces no puede ser 0");
    if (Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");
    for(i = 0; i<veces; i++) console.info(`${texto} ${i}`);
}

repetirTexto('Hola Mundo', 3);
*/