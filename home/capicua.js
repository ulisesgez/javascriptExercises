/*
Programa una función que reciba un número y evalúe si es capicúa o no
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
const capicua = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un número")
    if(typeof numero !== "number") return console.error("El valor ingresado no es un número")
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return (numero === alReves)
        ?console.info(true)
        :console.info(false);
}

capicua();//No ingresaste un número
capicua(2002);//true
capicua(3030);//false