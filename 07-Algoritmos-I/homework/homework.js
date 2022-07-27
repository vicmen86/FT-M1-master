'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
var array=[1];
let i=2;
while (num > 1){// num!==1
 
  if(num % i === 0) {
    array.push(i);
    num = num/i;
  }else {
    i++;
  }
}
return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
 let cambio=true;
while(cambio){
  cambio=false;
  for (let i = 0; i < array.length; i++) {
    if(array[i]>array[i+1]){
    let aux=array[i]; //ordenamiento burbuja
    array[i]=array[i+1];
    array[i+1]=aux;
    cambio=true;
    }
  }
}
return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //[7,3,0,4,5]
  // j i

  for (let i = 1; i < array.length; i++) {
    let j=i-1;
    while (j>=0 && array[j]>array[i]) {
      let aux = array[i];
      array[i]=array[j];
      array[j]=aux;
    j--;
    i--;
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i] > array[j]) {
        let aux=array[i];
        array[i]=array[j];
        array[j]=aux;
      }
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
