/*
Sin if, ni switch, ni arrays, ni bucles, solamente objetos o
arrays indicar que día de la semana es hoy:
*/
fecha = new Date();
dia = fecha.getDay();

diasSemanaObj = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado"
}

console.log(diasSemanaObj[dia] || "No es un dia de la semana");

//El anterior es el ejercicio que se pide, pero se puede hacer de otra forma con arrays.

diasSemanaArr = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

console.log(diasSemanaArr[dia] || "No es un dia de la semana");