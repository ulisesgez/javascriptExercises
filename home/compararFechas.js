/*
Programa una función que dada una fecha válida determine cuantos
años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))
devolverá 35 años (en 2020).
*/
const calcularAnios = (fecha = undefined,) => {
    //En lugar de usat typeof, ya que date es tipo objeto
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fechavalida");
    //Resta de fecha actual menos fecha que se ha pasado por parametros, get time convierte la fecha en milisegundos:
    let hoyMenosFEcha = new Date().getTime() - fecha.getTime(),
    //1000 = 1 segundo
        aniosEnMs = 1000 * 60 * 60 * 24 * 365
        //decadasEnMs = 1000 * 60 * 60 * 24 * 365 * 10
        //lustrosEnMs = 1000 * 60 * 60 * 24 * 365 * 5
        //semanasEnMs = 1000 * 60 * 60 * 24 * 52
        //diasEnMs = 1000 * 60 * 60 * 24
        aniosHumanos = Math.floor(hoyMenosFEcha / aniosEnMs);
    return (Math.sign(aniosHumanos) === -1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos) === 1)
        ?console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
        :console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios();//No se ha pasado ningun parametro
calcularAnios(0);//No se ha pasado ningun parametro
calcularAnios(false);//No se ha pasado ningun parametro
calcularAnios([]);//No se ha pasado ningun parametro
calcularAnios({});//No se ha pasado ningun parametro
calcularAnios(new Date(1984, 4, 23));//Han pasado 39 años desde 1984
calcularAnios(new Date(1984, 4, 23));//Han pasado 39 años desde 1984
calcularAnios(new Date());//Estamos en el año actual 2023
calcularAnios(new Date(1984, 4, 23));//Han pasado 39 años desde 1984
calcularAnios(new Date(1998, 8, 8));//Han pasado 25 años desde 1998
calcularAnios(new Date(2303, 8, 8));//Faltan 280 años para el 2303