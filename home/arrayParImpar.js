/*
Programa una función que dado un array de números devuelva un
objeto con 2 arreglos en el primero almacena los números pares y
en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0])
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const parImpar = (arreglo = undefined) => {
    let pares = [];
    let impares = [];
  
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        } else {
            impares.push(arreglo[i]);
        }
    }
  
    return console.log(pares, impares);
}

parImpar([1,2,3,4,5,6,7,8,9,0]);
/*
Solucion:

const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr === 0) return console.error("El arreglo esta vacio");
    for(let num of arr) {
        if(typeof num !== "number") return console.error("El valor ingresado no es numero");
    }
    return console.info({
        pares: arr.filter(num => num%2 === 0),
        pares: arr.filter(num => num%2 === 1),
    });
}
separarParesImpares();
separarParesImpares("hola");
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);
*/