/**
 * Grupo:Juan Pablo Mendoza, Paula Andre Rubio Moreno
 * 4.Leer 3 números, determinar el mayor de los 3 e imprimirlo.
 */
'use scrict';

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

alert("El mayor de los tres números es: " + mayor);




        



