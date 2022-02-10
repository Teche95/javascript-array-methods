/* Este metodo sirve para volver un array en un string separandolo por el caracter que deseemos */

const alumnos = ["camila", "juan", "jorge", "carolina"];
const separador = "-";
let string = "";
/* Ejemplo con un for clasico */

for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    string += alumno + separador;
}
console.log(string);
/*
Output:
camila-juan-jorge-carolina-
*/

/* Como pueden ver trae varios problemas, primero que todo es mas dificil de leer y tiene muchas lineas, ademas agrega el separador al ultimo elemento tambien */


/* Ejemplo con join */

const alumnos2 = ["camila", "juan", "jorge", "carolina"];

const nombresAlumnos = alumnos2.join("-");

console.log(nombresAlumnos);

/* 
Output:
camila-juan-jorge-carolina
*/