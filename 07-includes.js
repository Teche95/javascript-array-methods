/* Este metodo de los arrays lo que hace es decirnos si el array o string contiene o no un elemento o elementos en particular */

const mascotas = ["gato", "perro", "pez", "loro"];
let incluidaEnMascotas = false;

for (let i = 0; i < mascotas.length; i++) {
    const mascota = mascotas[i];
    if(mascota === "gato"){
        incluidaEnMascotas = true;
        break;
    }
}

console.log(incluidaEnMascotas);
/* 
Output: 
true
*/


/* Ejemplo con includes */

const mascotas2 = ["gato", "perro", "pez", "loro"];

let estaLaMascota = mascotas2.includes("gato");

console.log(estaLaMascota);

/* A diferencia de los otros metodos includes no recibe una funcion flecha(arrow function, o lambda en otros lenguajes) solo recibe el elemento del cual queremos saber si esta incluido o no. */