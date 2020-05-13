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

/*Aplicando o mesmo conceito em métodos*/
function method1() {
    console.log('method called');
}
var obj = {
    method1
};
obj.method1();

/*
var obj = {
    sum: function sum(a, b){
        return a + b;
    }
};

console.log(obj.sum(1, 5));*/

/*Um outro short range do Ecma6 
A mesma função de soma pode ser escrita omitindo a palavra function*/
var obj = {
    sum(a, b){
        return a + b;
    }
};

console.log(obj.sum(1, 5));

/*Antigamente caso quisesse utilizar uma variavel como nome de uma propriedade, deveriamos declarar o objeto literal antes e acessa-lo
através dos []

var propName = 'test';
var obj = {};

obj[propName + 'concat'] = 'prop value';

console.log(obj);*/

/*Com o surgimento do Ecma6 é possivel fazer isso direto no objeto*/

var propName = 'test';
var obj = {
    [propName + 'concat']: 'prop value'
};
console.log(obj);
