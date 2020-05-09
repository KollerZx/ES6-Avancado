//Forma comum de se declarar objetos literais 
var obj = { //Dentro das chaves pode-se declarar as propriedades e métodos
    prop1: '1 propriedade'
};

//Outra forma de se declarar é referenciando uma variavel como valor de uma propriedade
var prop1 = '1 propridade'
var obj = {
    prop1: prop1
};
/* Porém no exemplo acima acaba-se repetindo duas vezes a palavra 'prop1' 
com o surgimento do Ecma 6 foi introduzido um short range pra isso, dessa forma pode-se omitir
o lado direito, podendo definir valores para propriedades e métodos, sem repetir a palavra */

var prop1 = '1 propridade'
var obj = {
    prop1
};
console.log(obj);

