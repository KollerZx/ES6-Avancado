var arr = ['apple', 'banana', 'orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Destructuring em Arrays

var [apple2, banana2, orange2] = ['apple', 'banana', 'orange'];
console.log(apple, apple2);

//Destructuring em Objetos
var obj = {
  name:'Henrique'
}

//Para pegar a propriedade nome do obj e armazenar em uma variavel, antes do Ecma6 utilizava-se a seguinte sintaxe.
var name = obj.name;
/*Ja utilizando o Destructuring 

var {name} = obj; //Ira destruir o obj {} encontrar uma propriedade 'name', pegar o seu valor e atribuir a uma variavel 'name'
console.log(name);
