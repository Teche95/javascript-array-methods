/* Un array o "arreglo" es una coleccion de elementos, esta es la manera mas facil de entenderla, un contenedor donde se pueden almacenar todo tipo de valores, primitivos(int,boolean,etc) y tambien objetos({name: "juan"}) ejemplo: const animals = ["bird", "lion", "cat", "dog"] este ejemplo es un array de strings(cadena de caracteres) con los nombres de animales */

const animals = ["bird", "lion", "cat", "dog"];

/* Los metodos de los arrays son la manera de remplazar al mitico for por lo que en todos los ejemplos se dara la expliacion de como hacerlo con un for y como los metodos de los arrays nos facilitan la iteracion */

/* Recorriendo animals con un for normal */

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}

/* Output esperado: 
bird
lion
cat
dog */

/* Recorriendo animals con un forEach */
const animals2 = ["bird", "lion", "cat", "dog"];

const animal = animals2.forEach(element => console.log(element));

/* Output esperado: 
bird
lion
cat
dog */

/* Como se puede observar el forE ach tambien itera dentro de cada elemento de animals pero reduce la sintaxis de un bucle for a una simple linea, sin necesidad de declarar una variable indice que se autoincremente */

/* Recorriendo un array de objetos con forEach */

const students = [
    {
        name: "Jorge",
        age: 24,
        subject: "JavaScript",
    },
    {
        name: "Maria",
        age: 20,
        subject: "CSS",
    },
    {
        name: "Carlos",
        age: 30,
        subject: "CSS",
    },
];

students.forEach(student => console.log(`Mi nombre es: ${student.name}, tengo: ${student.age} años y actualmente estoy estudiando ${student.subject}`));

/* Output esperado:
Mi nombre es: Jorge, tengo: 24 años y actualmente estoy estudiando JavaScript
Mi nombre es: Maria, tengo: 20 años y actualmente estoy estudiando CSS
Mi nombre es: Carlos, tengo: 30 años y actualmente estoy estudiando CSS
 */


/* Para profundizar mas sobre forEach puedes visitar:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/