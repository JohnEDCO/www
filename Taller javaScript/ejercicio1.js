/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor:
 * Fecha: 
 *
 */
 
let arraySum = function(array) {

let suma=0;

 for (let i = 0; i < array.length; i++) {
   suma += array[i];
   
 } 
  // TODO: Tu codigo aqui!
  // ...
  return suma;
};

// Prueba (No modificar)

const a = [7, 6, 5, 4, 3];
const b = [-3, -4, -5, -6, -7];
const c = [33];

if (arraySum(a) === 25 &&
    arraySum(b) === -25 &&
    arraySum(c) === 33) {
  console.log('Ejercicio 1 paso la prueba!');
  console.log('a ='+ arraySum(a));
  console.log('b =' + arraySum(b));
  console.log('c ='+arraySum(c));

} else {
  console.log('Ejercicio 1 no paso la prueba!');
}
