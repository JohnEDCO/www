/*
 *
 * Ejercicio 2: Dado un arreglo de personas, retorne el color de cabello de la persona de mas edad.
 *
 * Una persona es un objeto con los siguientes atributos:
 *    nombres: String
 *    apellidos: String
 *    edad: Number
 *    colorCabello: String
 *
 * Autor:
 * Fecha: 
 *
 */

let colorCabello = function(personas) {

  let rainbow = "";
  let MayorEdad = 0;

for(i=0; i< personas.length; i++){
 if(personas[i].edad > MayorEdad){
   
   rainbow =personas[i].colorCabello;
   MayorEdad = personas[i].edad
 }
}
  // TODO: Tu codigo aquí!
  // ...
  //return rainbow;
  return rainbow;
};

// Prueba (No modificar)

const persona1 = {
  nombres: 'Kirk',
  apellidos: 'Hummer',
  edad: 27,
  colorCabello: 'Rubio'
};
const persona2 = {
  nombres: 'Homero',
  apellidos: 'Simpson',
  edad: 30,
  colorCabello: 'Cafe Oscuro'
};
const persona3 = {
  nombres: 'Eric',
  apellidos: 'Cartman',
  edad: 10,
  colorCabello: 'Cafe'
};
const persona4 = {
  nombres: 'John Wick',
  apellidos: '-',
  edad: 45,
  colorCabello: 'Azul'
};

let personas1 = [persona1];
let personas2 = [persona1, persona3];
let personas3 = [persona1, persona2, persona3];
let personas4 = [persona3, persona4];

if (colorCabello(personas1) === 'Rubio' &&
    colorCabello(personas2) === 'Rubio' &&
    colorCabello(personas3) === 'Cafe Oscuro' &&
	colorCabello(personas4) === 'Azul') {
  console.log('Ejercicio 2 paso el test!');
} else {
  console.log('Ejercicio 2 no paso el test!');
}
