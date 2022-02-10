/* Este metodo no es de arrays comotal pero sirve para volver un string en un array, hace lo contrario del metodo join, separa un string de acuerdo al caracter que le digamos, por ejemplo un espacio */

const frase = "aprender javascript es divertido";

const arrayFrase = frase.split(" ");

console.log(arrayFrase);

/* 
Output:
[ 'aprender', 'javascript', 'es', 'divertido' ]
*/