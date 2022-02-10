/* Como su nombre lo dice, este metodo reduce un array pero a diferencia de filter, lo reduce A UN SOLO VALOR, este metodo generalmente no devuelve un nuevo array.

Pequeño resumen de lo visto hasta ahora:

[🐮,🥔,🌽,🐷].map(cook) => [🍔,🍟,🍿,🥓];

[🍔,🍟,🍿,🥓].filter(esVegetariano) =>
[🍟,🍿];

[🍔,🍟,🍿,🥓].reduce(eat) => 💩;

*/


/* Ejemplo con for clasico */

const totales = [1,2,3,4,5,6,7,8];
let acumuladorDeSuma = 0;

for (let i = 0; i < totales.length; i++) {
    const numero = totales[i];
    acumuladorDeSuma += numero;
}

console.log(totales);
/*
Output:
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/
console.log(acumuladorDeSuma);
/* 
Output: 
36
*/

/* Ejemplo usando reduce */

const totales2 = [1,2,3,4,5,6,7,8];

const sumaTotales = totales2.reduce((suma, numero) => suma + numero, 0);

/* Este metodo puede ser un poco mas complejo ya que recibe dos parametros, en el primer parentesis tenemos como primer elemento el acumulador y el segundo numero el item o elemento del array, en este caso cada numero del array de totales, luego se hace una funcion flecha donde escribimos el codigo a ejecutar y como segundo parametro el valor inicial del acumulador, en este caso suma que es 0 */

console.log(totales2);
/*
Output:
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/
console.log(sumaTotales);
/* 
Output: 
36
*/


/* Histograma con reduce: recuerda que reduce devuelve un solo valor, pero puede retornar un objeto que contenga varios elementos, un objeto se puede considerar como un solo valor*/

const numeros = [1,2,3,1,3,3,3,2,1,1,1];

const numerosHistograma = numeros.reduce((acumulador, numero) => {
    if(!acumulador[numero]){
        acumulador[numero] = 1; 
    }else{
        acumulador[numero] += 1;
    }
    return acumulador;
},{})

console.log(numeros);
console.log(numerosHistograma);

/*
Si quieres saber mas sobre reduce visita:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/