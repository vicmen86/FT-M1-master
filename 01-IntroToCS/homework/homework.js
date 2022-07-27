'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 /* num = num.split("").reverse()
  var element=0;
  for (let i = 0; i < num.length; i++) {
    element += num[i]*2**[i];
  }
  return element;
}
*/
var binario = 0;
for (let i = 0; i < num.length; i++) {
  binario += num[i]* Math.pow(2,(num.length-1-i))
}
return binario;
}
function DecimalABinario(num) {
  // tu codigo aca
/* var binario=[];
while(num>0){
  binario.unshift(num%2);
  num= Math.floor(num/2)
}
return binario.join("");
*/
var numbinario = [];
while (num>0) {
  numbinario.unshift(num%2);
  num=(num-(num%2))/2;
}
return numbinario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}