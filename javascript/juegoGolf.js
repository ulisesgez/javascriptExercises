/*
En el juego de golf cada hoyo tiene un par que representa el numero promedio de golpes que se
espear que haga un golfista para introducir la pelota en el hoyo.
Hay un hombre diferente dependiendo que tan por encima o por debajo del par esten tus golpes.
Tu funcion tomara los argumentos par y golpes.
Retorna la cadena corecta segun esta tabla que muestra los golpes es orden de mayor a menor prioridad:
golpes --------> hole in one
<= par - 2 ----> eagle
par - 1 --------> birdie
par -----------> par
par + 1 -------> bogey
par + 2 -------> double bogey
>= par + 3 ----> go home
Par y golpes siempre seran numericos y positivos.
*/

function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
        return "hole in one";
    } else if (golpes <= par - 2) {
        return "eagle";
    } else if (golpes == par - 1) {
        return "birdie"
    } else if (golpes == par) {
        return "par";
    } else if (golpes == par + 1) {
        return "bogey";
    } else if (golpes == par + 2) {
        return "double bogey"
    } else if (golpes >= par + 3) {
        return "go home";
    }
}

puntajeDeGolf(4, 1);