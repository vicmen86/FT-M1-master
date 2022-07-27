"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
pre order: raiz, iz, der
in order: iz, raiz, der
post iorder: iz, der, rsiz
*/
function BinarySearchTree(value) {
  this.value= value;
  this.left=null;//numeros menores
  this.right=null;//nodos mayores
}
BinarySearchTree.prototype.insert = function(value){//comparamos valores con la raiz y cuando sepamos donde ir (iz o derec) vamos a preguntar si esta libre sus hojas
//let hoja=new BinarySearchTree(value);
if(value > this.value){
  if(this.right === null) this.right = new BinarySearchTree(value);
  else this.right.insert(value);
}
else if(value < this.value){
  if(this.left === null)this.left = new BinarySearchTree(value);
  else this.left.insert(value);
}
}
BinarySearchTree.prototype.size=function(){
  if(this.left===null && this.right===null)return 1;
  if(this.left!==null&&this.right===null)return 1+ this.left.size();//if(this.left && !this.right)
  if(this.right!==null&&this.left===null)return 1+ this.right.size();
  if(this.left!==null&&this.right!==null)return 1 + this.left.size() + this.right.size();
}
BinarySearchTree.prototype.contains=function(value){//buscar el value.Pregunto si es el valor que estoy buscando.
  if(value===this.value)return true;
  if(value>this.value){//voy hacia la derecha
    if(!this.right)return false;
    else return this.right.contains(value);
  }
  else{//si es menor voy  ala izquierda
    if(!this.left)return false;
    else return this.left.contains(value);
  }

}

BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
if(order === 'pre-order'){
  cb(this.value);
  if(this.left !== null) this.left.depthFirstForEach(cb,order);
  if(this.right !== null) this.right.depthFirstForEach(cb,order);
}
else if(order === 'post-order'){
  if(this.left !== null) this.left.depthFirstForEach(cb,order);
  if(this.right !== null) this.right.depthFirstForEach(cb,order);
  cb(this.value);
}else {
  if(this.left !== null) this.left.depthFirstForEach(cb,order);
  cb(this.value);
  if(this.right !== null) this.right.depthFirstForEach(cb,order);
}
}
//dfs lee linea a linea del arbol 
BinarySearchTree.prototype.breadthFirstForEach=function(cb,array=[]){
  if(this.left !== null) array.push(this.left);
  if(this.right !== null) array.push(this.right);
  cb(this.value);
  if(array.length > 0) array.shift().breadthFirstForEach(cb,array);
}

//const arbolito = new BinarySearchTree(5) 
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
