/**
 * Grupo:Juan Pablo Mendoza, Paula Andre Rubio Moreno
 * 2.Leer un número e imprimir un mensaje si es positivo o negativo.
 */

'use strict';

let numero = parseFloat(prompt ('introduzaca el numero a evaluar'));
if (numero > 0) {
    alert(`el numero es: ${numero} es positivo`);
} else{
    if (numero<0)
         alert (`el numero: ${numero} es negativo`);
    else(numero=0)
         alert (`el numero es: ${numero} es cero`);
        }