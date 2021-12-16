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
  arrayComidas.push("Spaguetti Carbonara");
  arrayComidas.push("Filete con Patatas");
  arrayComidas.push("Lomo a la Pimienta");
  arrayComidas.push("Arroz a la Cubana");
  arrayComidas.push("Longaniza al Vino");
  arrayComidas.push("Entrecot");
  arrayComidas.push("Arroz con Pollo Korma");
  arrayComidas.push("Gallo Rebozado");
  arrayComidas.push("Merluza Rebozada");
  arrayComidas.push("Salmón");
  arrayComidas.push("Arroz con Almejas");
  arrayComidas.push("Pollo Teriyaki");
  arrayComidas.push("Pollo Asado");
  arrayComidas.push("Carrilleras");
  arrayComidas.push("Concretas");
  arrayComidas.push("Revuelto de Morcilla");
  arrayComidas.push("Anchoas Rebozadas");
  arrayComidas.push("Enchiladas");
  arrayComidas.push("Ensalada Montañesa");
  arrayComidas.push("Ensaladilla");
  arrayComidas.push("Pasta al Ajillo");
  arrayComidas.push("Ensalada Pasta");
  arrayComidas.push("Costilla");
  arrayComidas.push("Tacos");
  arrayComidas.push("Coliflor Rebozada");
  arrayComidas.push("Solomillo Cerdo al horno");
  arrayComidas.push("Solomillo Wellington");
  arrayComidas.push("Pollo Parmesano");
  arrayComidas.push("Albóndigas");
  arrayComidas.push("Chipirones en su Tinta");
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
