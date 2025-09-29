// Declaración de la variable numero.
// prompt(): Muestra un cuadro de diálogo al usuario, pidiéndole que ingrese un número.
// El valor que el usuario escribe se almacena en la variable numero
// como una cadena de texto (string).
let numero = prompt("Ingresa un número:");

// Conversión de la entrada a un tipo numérico.
// numero = parseFloat(numero): La función parseFloat() convierte la cadena de texto
// de numero a un número
// de punto flotante (decimal). Esto es esencial para que las operaciones matemáticas
// se realicen correctamente
// El valor numérico resultante sobrescribe el string original en la variable numero.
numero = parseFloat(numero);

// Cálculo del doble.
// Declaración de la variable doble.
// numero * 2: Multiplica el valor numérico ingresado por 2.
// El resultado de esta operación se guarda en la variable doble.
let doble = numero * 2;

// Cálculo del triple.
// Declaración de la variable triple.
// numero * 3: Multiplica el valor numérico ingresado por 3.
// El resultado de esta operación se guarda en la variable triple.
let triple = numero * 3;

// Mostrar el número original ingresado.
// console.log(): Imprime el mensaje en la consola, concatenando el texto con el valor de numero.
console.log("El número ingresado es: " + numero);

// Mostrar el doble del número.
// console.log(): Imprime el resultado del cálculo del doble.
console.log("Su doble es: " + doble);

// Mostrar el triple del número.
// console.log(): Imprime el resultado del cálculo del triple.
console.log("Su triple es: " + triple);