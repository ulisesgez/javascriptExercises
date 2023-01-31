/*
25) Programa una función que dado un arreglo de elementos,
elimine los duplicados,
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
devolverá ["x", 10, 2, "10", true].
*/

const quitarDuplicados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length === 0) return console.error("El arreglo esta vacio");
    if(arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");
    for(let num of arr) {
        if(typeof num !== "number") return console.error("El valor ingresado no es numero");
    }
    return console.info({
        orginal: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    })
}

quitarDuplicados([7, 5,7,8,6]);