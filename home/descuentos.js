/*
Programa una función que devuelva el monto final después de aplicar
un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const aplicarDescuento = (monto = undefined, descuento = undefined) => {
    return console.info(`${monto} - ${descuento}% = ${monto - ((monto*descuento)/100)}`);
}

aplicarDescuento(1000, 20);