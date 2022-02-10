/* Map es el mas util para hacer transformaciones en arrays sin alteral el array original, es decir que crea un nuevo array con los elementos transformados (el resultado va a tener el mismo nuemero de elementos que el array original) */


/* Ejemplo utilizando un for clasico */

const letters = ["a", "b", "c", "d"];
const newArray = [];

for (let i = 0; i < letters.length; i++) {
    const letter = letters[i].toUpperCase();
    newArray.push(letter);
}
console.log(letters)
console.log(newArray);


/* Ejemplo con map */

const letters2 = ["a", "b", "c", "d"];
const newLetters = letters2.map(letter => letter.toUpperCase());
console.log(letters2);
console.log(newLetters);

/* Map con objetos */

const compras = [
    {
        comprador: "Juan",
        total: 40,
        enviado: true
    },
    {
        comprador: "Maria",
        total: 150,
        enviado: false
    },
    {
        comprador: "Daniel",
        total: 200,
        enviado: true
    },
    {
        comprador: "Carlos",
        total: 250,
        enviado: true
    },
]

const totalCompras = compras.map(compra => compra.total);

console.log(compras);
/*
Output:
[
  { comprador: 'Juan', total: 40, enviado: true },
  { comprador: 'Maria', total: 150, enviado: false },
  { comprador: 'Daniel', total: 200, enviado: true },
  { comprador: 'Carlos', total: 250, enviado: true }
]
*/
console.log(totalCompras);
/*
Output:
[ 40, 150, 200, 250 ]
*/

/* Como se puede observar en el ejemplo anterior a partir de un array de objetos se genero un array de numeros que corresponden al total de las compras, este proceso no modifico el array original si no que genero uno nuevo con lo que le estabamos pidiendo, en este caso compra.total que equivale a el total de cada una de las compras de los clientes. */

/* En el siguiente ejemplo vamos a ver como adicionar un nuevo elemento a los objetos */

const compras2 = [
    {
        comprador: "Juan",
        total: 40,
        enviado: true
    },
    {
        comprador: "Maria",
        total: 150,
        enviado: false
    },
    {
        comprador: "Daniel",
        total: 200,
        enviado: true
    },
    {
        comprador: "Carlos",
        total: 250,
        enviado: true
    },
];

const nuevaCompras2 = compras2.map(compra => {
    compra.tax = 0.19
    return compra;
});

console.log(compras2);
/*
Output:
[
  { comprador: 'Juan', total: 40, enviado: true, tax: 0.19 },
  { comprador: 'Maria', total: 150, enviado: false, tax: 0.19 },
  { comprador: 'Daniel', total: 200, enviado: true, tax: 0.19 },
  { comprador: 'Carlos', total: 250, enviado: true, tax: 0.19 }
]
*/
console.log(nuevaCompras2);
/*
Output:
[
  { comprador: 'Juan', total: 40, enviado: true, tax: 0.19 },
  { comprador: 'Maria', total: 150, enviado: false, tax: 0.19 },
  { comprador: 'Daniel', total: 200, enviado: true, tax: 0.19 },
  { comprador: 'Carlos', total: 250, enviado: true, tax: 0.19 }
]
*/

/* En este caso map si altero (muto) el array original y esto se debe a que estamos accediendo a la referencia en memoria de cada objeto del array y agregandolo directamente por lo que usar maps en objetos si los puede mutar (ESTO SOLO PASA CON LOS OBJETOS POR QUE CADA OBJETO TIENE UNA REFERENCIA EN MEMORIA), la manera de solucionar esto es hacer una copia del objeto de la siguiente manera */

const compras3 = [
    {
        comprador: "Juan",
        total: 40,
        enviado: true
    },
    {
        comprador: "Maria",
        total: 150,
        enviado: false
    },
    {
        comprador: "Daniel",
        total: 200,
        enviado: true
    },
    {
        comprador: "Carlos",
        total: 250,
        enviado: true
    },
];

const nuevaCompras3 = compras3.map(compra => {
    return{
        ...compra,
        tax: 0.19
    };
});

console.log(compras3);
/*
Output:
[
  { comprador: 'Juan', total: 40, enviado: true },
  { comprador: 'Maria', total: 150, enviado: false },
  { comprador: 'Daniel', total: 200, enviado: true },
  { comprador: 'Carlos', total: 250, enviado: true }
]
*/
console.log(nuevaCompras3);
/*
Output:
[
  { comprador: 'Juan', total: 40, enviado: true, tax: 0.19 },
  { comprador: 'Maria', total: 150, enviado: false, tax: 0.19 },
  { comprador: 'Daniel', total: 200, enviado: true, tax: 0.19 },
  { comprador: 'Carlos', total: 250, enviado: true, tax: 0.19 }
]
*/

/* Utilizamos el spread operator(...) los tres puntos antes del objeto y de esta manera hacemos una copia del objeto y no alteramos el original para saber mas sobre map y el spread operator puedes visitar:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/