/*
22) Programa una función que dado un array devuelva el número mas alto
y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60])
devolverá [99, -60].
*/
const altoBajo = (numeros = []) => {
    let resultado = []
    let max = resultado.push(Math.max(...numeros));
    let min = resultado.push(Math.min(...numeros));
    console.log(resultado);

    //return console.log(Math.max(...numeros), Math.min(...numeros));
};

altoBajo([1, 4, 5, 99, -60]);
/*
//solucion:

const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr === 0) return console.error("El arreglo esta vacio");
    for(let num of arr) {
        if(typeof num !== "number") return console.error("El valor ingresado no es numero");
    }
    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`)
}
*/