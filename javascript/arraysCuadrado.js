/*
21) Programa una función que dado un array numérico devuelve otro array
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá
[1, 16, 25].
*/
const elevarCuadrado = (numeros = undefined) => {
    if (numeros === undefined)
      return console.log("Debes Ingresar un array de numeros");
  
    if (numeros.length === 0) return console.log("El array ingresado está Vacio");
  
    if (!(numeros instanceof Array))
      return console.log(`El valor ${numeros} no es un Array de Numeros`);
  
    numeros = numeros.filter((numero) => typeof numero === "number");
  
    let cuadrados = [];
  
    for (let i = 0; i < numeros.length; i++) {
      cuadrados.push(Math.pow(numeros[i], 2));
    }
    return console.log(cuadrados);
};
elevarCuadrado();
elevarCuadrado("hola");
elevarCuadrado(345);
elevarCuadrado([1, 2, 3]);
elevarCuadrado([1, 4, 5]);
elevarCuadrado([1, 4, 5, "", "h", 7, 9]);
/*
//Solucion:
const devolverCuadrados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr === 0) return console.error("El arreglo esta vacio");
    for(let num of arr) {
        if(typeof num !== "number") return console.error("El valor ingresado no es numero");
    }
    const newArr = arr.map(el => el * el);
    return console.info(`Arreglo original ${arr},\n Arregloelevado al cuadrado: ${newArr}`);
}

devolverCuadrados([1, 4, 5]);
*/