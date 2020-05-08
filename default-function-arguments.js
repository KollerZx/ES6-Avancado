/**Ao se trabalhar com funções antigamente era comum ocorrer algumas situações atipicas ao se lidar com parâmetros
No exemplo abaixo, caso se esquecesse de passar o segundo parâmetro a função retornaria um NaN (not a number)
Pois ao tentar multiplicar um numero por um parâmetro undefined. Quando não se passa um parâmetro para uma função 
o valor dele é undefined*/
function multiply (a, b){
	return a * b;
}
console.log(multiply(5));
/*Antigamente para se resolver isso era muito comum os desenvolvedores recorrerem ao operador logico OR para validar esse parâmetro
*/
function multiply (a, b){
	b = b || 1; // caso o valor de b nao seja verdadeiro, é atribuido 1
	return a * b;
}
console.log(multiply(5));

/*Porém se quisesse multiplicar por 0 (zero), continuaria se tendo o mesmo resultado, com o segundo parametro recebendo o valor 1
Pois em javascript o 0 (zero) é um valor falso. Sendo assim, ao se deparar com esse problema, poderia se recorrer a validação de tipo
*/
function multiply (a, b){
	b = typeof
	return a * b;
}
console.log(multiply(5));
