'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let arrayDer=[];
let arrayIzq= [];
let j=array.length-1;
let pivotes=[];
if(array.length <=1)return array;
for (let i = 0; i < array.length; i++) {
 if (array[i]>array[j]){
  arrayDer.push(array[i]);
 }
 else if (array[i]<array[j]){
 arrayIzq.push(array[i]);
}
else{
   pivotes.push(array[i]);
}
}
return quickSort(arrayIzq).concat(pivotes).concat(quickSort(arrayDer));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
