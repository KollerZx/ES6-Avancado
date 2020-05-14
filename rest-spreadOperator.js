
/*Antes do Ecma6 caso quiséssemos que uma função recebesse varios argumentos sem definir quantos antes, utilizava-se uma variavel
chamada 'arguments' que é uma palavra reservada que se refere a todos os argumentos da função.
Aplicando-a em uma laço de repetição
*/
function sum () {
    var value = 0;
    for(var i=0; i < arguments.length; i++){
        value += arguments[i]; // o prototype de arguments é object
    }
    
    return value;
}
console.log(sum(5, 6, 4, 3, 2));
//20

/*O Ecma6 trouxe um operador chamado 'rest operator' que irá auxiliar nessa situação
Sua sintaxe é '(...args)' 
o prototype de args é array, e ja traz os métodos de array para manipular os seus argumentos*/

function sum(...args){
    return args.reduce((acc, value) => acc + value, 0); // acc = valor acumulado | value = valor da iteração
}
console.log(sum(5, 6, 4, 3, 2));
//20

/*Com arrow functions não é possivel acessar a lista de 'arguments' ao tentar acessar retornará um erro de
referência porque arguments não foi definido
Quando se estiver trabalhando com arrow functions tambem deve-se utilizar o rest operator*/

/*const sum = (...rest) => {
    
};*/
/*Rest operator pega todos os parâmetros de uma função e transforma em um array
Tambem pode ser utilizado para pegar parâmetros restantes*/
/*const sum = (a, b, ...rest) => {
    console.log(a, b, rest); //retorna os valores referenciados 'a' 'b' e o restante retorna no array 'rest'
    // 5 5 [5, 2, 3]  
};
console.log(sum(5, 6, 4, 3, 2));*/

/*Spread Operator pega todos os itens de um array e transformar em parâmetros para uma função
É aplicavel a strings, arrays, objetos literais e objetos iteraveis*/
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum=(...rest) => {
    return multiply(...rest);
};
console.log(sum(5, 6, 4, 3, 2));

/*Quebra a string em caracteres e joga para uma lista*/
const stri = 'JavaScript ES6';
function logArgs(...args) {
    console.log(args);
}
logArgs(...stri);
//(14) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "E", "S", "6"]
