/*
Programa una función para convertir grados Celsius a Fahrenheit
y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertir = (grados = undefined, tipo = "") => {
    return (tipo === "C")
    ? console.log((grados * 9/5) + 32)
    : (tipo === "F")
    ? console.log((grados - 32) * 5/9)
    : console.log("No corresponde a Celsius o Fahrenheit");
}

convertir(2,"A");//No corresponde a Celsius o Fahrenheit
convertir(2,"C");//35.6
convertir(10,"F");//-12.222222222222221