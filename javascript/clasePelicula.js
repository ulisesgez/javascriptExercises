/*
Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes
datos: id de la película en IMDB, titulo, director, año de estreno,
país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras
  y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime
    la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  //atributo estatico:
  static get listaGeneros () {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
  }
  //metodo estatico:
  static generosAceptados() {
    return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  validarCadena(propiedad, valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`);
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if(valor.length > longitud) return console.error(`${propiedad} "${valor} exede el numero de caracteres permitidos(${longitud})`);
  }
  validarNumero(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado no es un numero`);
    return true;
  }
  validarArreglo(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado no es un arreglo`);
    if(valor === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if(typeof cadena !== "string") return console.error(`El valor ${cadena} "${valor}" no es una cadena de texto`);
    }
    return true;
  }
  validarMDB (id) {
    if(this.validarCadena("IMDB id", id))
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
        return console.error(`IMDBid ${id} no es valido, debe tener 9 caracteres, 2 letras minusculas y 7 numeros`);
  }
  validarTitulo (titulo) {
    if(this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }
  validarDirector (director) {
    if(this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }
  validarEstreno (estreno) {
    if(this.validarNumero("Año de estreno", estreno))
      if(!(/^([0-9]){4}$/.test(estreno)))
        return console.error(`Año de estreno ${estreno} no es valido, debe tener 4 digitos`);
  }
  validarPais(pais) {
    this.validarArreglo("Pais", pais)
  }
  validarGeneros(generos) {
    if(this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        console.log(genero, Pelicula.listaGeneros.includes(genero));
        if(!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos icorrectos ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
  validarCalificacion (calificacion) {
    if(this.validarNumero("Calificacion", calificacion))
    return (calificacion < 0 || calificacion > 10)
    ?console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
    :this.calificacion = calificacion.toFixed(1);//cortar decimales
  }
  fichaTecnica() {
    console.info(`Ficha tecnica:\nTitulo: ${this.titulo}\nDirector: ${this.director}\nEstreno: ${this.estreno}\nPais: ${this.pais}\nGeneros: ${this.generos}\nCalificación: ${this.calificacion}`)
  }
}
/*
Pelicula.generosAceptados();

const peli = new Pelicula ({
  id: "tt1234567",
  titulo: "Back to the Future Part II",
  director: "Robert Zemeckis",
  estreno: 1989,
  pais: ["Estados Unidos"],
  generos: ["Comedy", "Sport"],
  calificacion: 7.59
});

peli.fichaTecnica();
*/

const misPelis = [
  {
    id: "tt1234567",
    titulo: "Back to the Future Part I",
    director: "Robert Zemeckis",
    estreno: 1989,
    pais: ["Estados Unidos"],
    generos: ["Comedy", "Sport"],
    calificacion: 7.59
  },
  {
    id: "tt7654321",
    titulo: "Back to the Future Part II",
    director: "Robert Zemeckis",
    estreno: 1989,
    pais: ["Estados Unidos"],
    generos: ["Comedy", "Sport"],
    calificacion: 7.59
  },
  {
    id: "tt1726354",
    titulo: "Back to the Future Part III",
    director: "Robert Zemeckis",
    estreno: 1989,
    pais: ["Estados Unidos"],
    generos: ["Comedy", "Sport"],
    calificacion: 7.59
  }
];
misPelis.forEach(el => new Pelicula(el).fichaTecnica());