'use strict'
console.log('Empieza el programa');

// Se crea la clase Comida y el objeto.
class Comida {
  constructor(nombreComida){
    this.nombreComida = nombreComida;
  }
}

// Array para añadir las comidas.
var comidas = new Array();

//  Añade los valores y crea los objetos necesarios.
function aniadirComidasInicialesArray () {
  let arrayComidas = new Array();
  arrayComidas.push("Comida 1");
  arrayComidas.push("Comida 2");
  arrayComidas.push("Comida 3");

  let i=0;
  while (i < arrayComidas.length) {
    comidas[i] = new Comida(arrayComidas[i]);
    i++;
  }
}

// Se randomiza la comida seleccionada y se utiliza Object.values para formatear el objeto.
var resultComidas = document.getElementById('resultadoComida');
function randomize() {
  var rngComida = Math.floor(Math.random() * (comidas.length));
  resultComidas.innerHTML = "Resultado: " + Object.values(comidas[rngComida]);
}

// |------------------- MAIN ------------------------|
// Añadimos las comidas iniciales cuando empieza el programa.
aniadirComidasInicialesArray();
console.log('Acaba el programa');