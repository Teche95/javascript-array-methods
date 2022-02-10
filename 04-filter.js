/* Como su nombre lo dice filter filtra los elementos del array sin modificarlo y genera un nuevo array con los elementos filtrados, es un metodo inmutable, en este caso siempre va a devolver un array con 0 elementos(ningun elemento cumplio la condicion), todos los elementos del array original(todos cumplieron la condicion) o menos elementos(algunos elementos cumplieron la condicion) pero nunca mas elementos que el array original.*/

/* Ejemplo usando un for clasico */

const palabras = ["banana", "leon", "puerta", "automovil", "empanada", "sol"];
const nuevasPalabras = [];

for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    if(palabra.length > 4){
        nuevasPalabras.push(palabra)
    }
}

console.log(palabras);
/*
Output:
[ 'banana', 'leon', 'puerta', 'automovil', 'empanada', 'sol' ]
*/
console.log(nuevasPalabras);
/*
Output:
[ 'banana', 'puerta', 'automovil', 'empanada' ]
*/


/* Como pueden observar se eliminaron las palabras sol y leon ya que tienen 4 letras o menos */


/* ejemplo con filter */

const palabras2 = ["banana", "leon", "puerta", "automovil", "empanada", "sol"];

const nuevasPalabras2 = palabras2.filter(palabra => palabra.length > 4);

console.log(palabras2);
/*
Output:
[ 'banana', 'leon', 'puerta', 'automovil', 'empanada', 'sol' ]
*/
console.log(nuevasPalabras2);
/*
Output:
[ 'banana', 'puerta', 'automovil', 'empanada' ]
*/

/* Como se puede ver se obtiene el mismo resultado en menos lineas y de una manera mas amigable de entender */


/* Ejemplo con objetos */

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

const comprasEnviadas = compras.filter(compra => compra.enviado);
/* compra.enviado hace referencia a un valor booleano que puede ser true o false por lo que por si solo ya es una condicion, si es true se devolveran las compras que han sido enviadas */

console.log(comprasEnviadas);
/*
[
  { comprador: 'Juan', total: 40, enviado: true },
  { comprador: 'Daniel', total: 200, enviado: true },
  { comprador: 'Carlos', total: 250, enviado: true }
]
*/


/* Ejemplo mas complejo */

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
]

const comprasEnviadas2 = compras2.filter(compra => compra.enviado && compra.total >= 200);

console.log(comprasEnviadas2);
/* 
Output:
[
  { comprador: 'Daniel', total: 200, enviado: true },
  { comprador: 'Carlos', total: 250, enviado: true }
]
*/

/* De esta manera filtramos las compras que cumplan dos condiciones, que han sido enviadas y que el total fue mayor o igual a 200, solo dos cumplen esas dos condiciones */


/* Filter usado como buscador */

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
]

const busquedaPorLetra = (letra) => {
    return compras3.filter(compra => {
        return compra.comprador.includes(letra);
    } )
}

/* Si no sabes que es includes no te preocupes, se vera mas adelante, por ahora solo piensa que es una funcion que nos permite saber si un array o string incluye o contiene un elemento en particular. */

console.log(busquedaPorLetra("l"));

/* De esta manera solo se pueden filtrar los nombres que contengan la letra l */

/* Si quieres saber mas sobre filter puedes buscar en:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/