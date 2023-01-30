/*
14) Programa una función para convertir grados Celsius a Fahrenheit
y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertir = (grados = undefined, tipo = "") => {
    return (tipo === "C")
    ? console.log((grados * 9/5) + 32)
    : (tipo === "F")
    ? console.log((grados - 32) * 5/9)
    : console.log("No corresponde a Celsius o Fahrenheit");
}

convertir(2,"A");
convertir(2,"C");
convertir(10,"F");