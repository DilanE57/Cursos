/* 
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
✅
*/

function miFuncion(cadena, separador) {
	return cadena.split(separador);
}

let resultado = miFuncion("Hola que tal", " ");

console.log(resultado);
