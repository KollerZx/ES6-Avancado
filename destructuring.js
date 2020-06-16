var arr = ['apple', 'banana', 'orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Destructuring em Arrays

var [apple2, banana2, orange2] = ['apple', 'banana', 'orange'];
console.log(apple, apple2);

//Destructuring em Objetos
var obj = {
  name:'Henrique',
  props:{
    age: 26,
    favoriteColors:['black','red' ]
  }
};

//Para pegar a propriedade nome do obj e armazenar em uma variavel, antes do Ecma6 utilizava-se a seguinte sintaxe.
var name = obj.name;
var age = obj.props.age;
var color = obj.props.favoriteColors[0];
//Ja utilizando o Destructuring 

var {name} = obj; //Ira destruir o obj {} encontrar uma propriedade 'name', pegar o seu valor e atribuir a uma variavel 'name'
console.log(name);
var {props:{age: age2, favoriteColors:[color1, color2]}} = obj;  //Destructuring de arrays dentro de objeto e vice versa (multiniveis)

console.log(age2)

//var {name: name2} = obj; //Ira destruir a propriedade name e atribuir a uma variavel name2 

var arr = [{name: 'apple', type: 'fruit'}];

//Para pegar as propriedades do objeto dentro array na forma normal

var fruit1 = arr[0].name;

//Utilizando o destructuring
var [{name}] = arr;

console.log(name);
//apple

//Functions

/*function sum(arr){
  return arr[0] + arr[1];
}
console.log(sum([5,5]));*/
//10

function sum([a, b])={
  return a + b;
}
console.log(sum([5,5]));




