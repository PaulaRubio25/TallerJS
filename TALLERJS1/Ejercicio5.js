/**
 * Grupo:Juan Pablo Mendoza, Paula Andre Rubio Moreno
 * 5.  Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el 
promedio
 */

'use scrict' 
// Solicitar al usuario que ingrese las 4 notas
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
let nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));

// Calcular el promedio
let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

// Mostrar las notas y el promedio en ventanas de alerta
alert("Notas del estudiante:\n" +
      "Nota 1: " + nota1 + "\n" +
      "Nota 2: " + nota2 + "\n" +
      "Nota 3: " + nota3 + "\n" +
      "Nota 4: " + nota4 + "\n" +
      "Promedio: " + promedio);
