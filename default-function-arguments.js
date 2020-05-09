/**Ao se trabalhar com funções antigamente era comum ocorrer algumas situações atipicas ao se lidar com parâmetros
No exemplo abaixo, caso se esquecesse de passar o segundo parâmetro a função retornaria um NaN (not a number)
Pois ao tentar multiplicar um numero por um parâmetro undefined. Quando não se passa um parâmetro para uma função 
o valor dele é undefined*/
/* function multiply (a, b){
	return a * b;
}
console.log(multiply(5)); */
/*Antigamente para se resolver isso era muito comum os desenvolvedores recorrerem ao operador logico OR para validar esse parâmetro
*/
/* function multiply (a, b){
	b = b || 1; // caso o valor de b nao seja verdadeiro, é atribuido 1
	return a * b;
}
console.log(multiply(5)); */

/*Após o surgimento do Ecma 6, utilizando o caractere de '=' pode-se atribuir valores padrão, sem a necessidade
de ficar validando os dados, quando o segundo parâmetro não for passado, ou o seu valor for undefined*/
/* function multiply (a, b=1){
	return a * b;
}
console.log(multiply(5)); */

//Lazy evaluation
/**Toda vez que for deixado de passar o segundo parâmetro para a função multiply
 * a função random sera invocada novamente. Que é o chamado lazy evaluation
 * Com isso é possivel garantir que a função só sera executada no momento certo.
 */
function randomNumber(){
	console.log('Generating a random number...' );
	return Math.random()*10;
}

function multiply (a, b=randomNumber()){
	return a * b;
}
console.log(multiply(5));
console.log(multiply(5));


