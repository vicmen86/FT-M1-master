/*Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
*/
//A
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1

//B

console.log(bar);// aun no se usan las varibles, hostinng
console.log(baz);//error
foo();//
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;//no esta declarada la variable

//C

var instructor = "Tony";
if(true) {
    var instructor = "Franco";// se redeclara el valor pisando el anterior ya que pertenecen al mismo scope
}
console.log(instructor);// Franco

//D

var instructor = "Tony";
console.log(instructor);//toni
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//franco
   }
})();// funcion autoinvocada, una expresion que se crea, abre y luego se elimina IIFE
console.log(instructor);//toni

//E

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";//?
    let pm = "Reverse Flash";
    console.log(instructor); // the flash
    console.log(pm); //reverse
}
console.log(instructor);// 
console.log(pm);// franco

//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:


6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5 //$45
"4" - 2//2
"4px" - 2//nan
7 / 0 // infinito
{}[0]//? esto es un bloque de codigo con un array y es algo que no se puede hacer, y en todo caso solo daria [0]
parseInt("09")//9
5 && 2//2 y no es lo mismo que if(5&&2)
// && nos sirve como un if cortito eje 5<10 && console.log('hola')==> hola
2 && 5//5
5 || 0 //5
// es como un dafault el or se queda con el primero que sea true
0 || 5 //5
[3]+[3]-[10]//23
3>2>1 //false
[] == ![]//true porque al nivel del typeof son iguales lo cual si fuere === no seria el mismo resultado




//### Hoisting

//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:


function test() {
   console.log(a);// a va ser indefinido porque en el hilo de ejcucion a aun no fue leida se le asigno memoria pero no se puede usar
   console.log(foo());//imprime 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
//Y el de este código? :
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}
// no se alcanza a mostrar nada en pantlla ya que snack nunca es leida pero si se reservo memoria 
getFood(false);



//### This

//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:


var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;// aqui test tiene una copia de la funcion

console.log(test());

//### Event loop

//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?


function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
//==> 1 4 3 2
printing();