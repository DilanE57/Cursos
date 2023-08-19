/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
✅
*/

const miFuncion = (texto) => {
	return texto.split("").reverse().join("");
};

console.log(miFuncion("Hola Mundo"));
