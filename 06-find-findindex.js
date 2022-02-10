/* Find es igual que filter pero solo retorna un elemento que cumpla con la condicional y solo el primero, si hay mas elementos que cumplan no importa, find retorna el primero que encuentre.*/

/* Ejemplo con un for clasico */

const numeros = [10,30,4,29,14,11];
let num = undefined;
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero === 4){
        num = numero;
        break;
    }
};
console.log(num);

/*
Output:
4
*/


/* Ejemplo utilizando find */

const numeros2 = [10,30,4,29,14,11];
const num2 = numeros2.find(numero => numero === 4);
console.log(num2);
/*
Output:
4
*/

/* Ejemplo con objetos */


const animales = [
    {
        nombre: "gato",
        cantidad: 10,
        id: '🐈'
    },
    {
        nombre: "perro",
        cantidad: 6,
        id: '🐕'
    },
    {
        nombre: "vaca",
        cantidad: 22,
        id: '🐄'
    },
    {
        nombre: "loro",
        cantidad: 2,
        id: '🦜'
    },
    {
        nombre: "rana",
        cantidad: 14,
        id: '🐸'
    },
];

const gato = animales.find(animal => animal.id === "🐈");

console.log(gato);

/* Como pueden ver retorna todo el elemento u objeto gato del array, su nombre, la cantidad y su id */

/* findIndex lo que hace es retornar en que posicion se encuentra el elemento, no retorna el elemento como tal si no su posicion(indice). */


/*
si quieres saber mas sobre find puedes buscar en:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/