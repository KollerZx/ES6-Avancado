
//Em arrow functions o return é implicito caso seja uma expressão, ternários, operadores lógicos
var sum = (a, b) => a + b;

//Se a função receber apenas 1 argumento, pode-se omitir os parenteses
var sum = a => a + 5;

//Se o retorno for uma declaração, definição de uma variável, condicionais, laços.
//Obrigatoriamente deve-se escrever dentro das chaves
var sum = (a , b) => {
  var x = 10;
  if (a > b){
  
  }
  return a + b;
}

//Objetos literais
//Se quisermos fazer um retorno implicito de um objeto, obrigatoriamente as chaves devem ser colocadas dentro dos parenteses

var createObj = () => ({
  test: 123
});
console.log(createObj());

/*Com arrow functions não é possivel fazer a chamada da função antes de declara-la. (function hoisting)

** ISSO NÃO É PERMITIDO **
log ('teste');

var log = value => {
  console.log(value);
}
*/

