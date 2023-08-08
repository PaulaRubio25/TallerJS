/**
 * Grupo:Juan Pablo Mendoza, Paula Andre Rubio Moreno
 *Realizar un programa que pida al usuario 2 números y se realicen las 4 operaciones básicas 
(Suma, resta, multiplicación, división). Imprimir los resultados.
 */
'use script';

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));


let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;


alert(`El resultado de la suma es: ${suma}`);
alert(`El resultado de la resta es: ${resta}`);
alert(`El resultado de la multiplicación es: ${multiplicacion}`);
alert(`El resultado de la división es: ${division}`);



