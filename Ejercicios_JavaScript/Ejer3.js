// let sirve para declarar las variables y se declara la variable nota1, nota2 y nota3
// prompt() sirve para mostrar un mensaje para el usuario
// dentro del prompt() se escribe el mensaje que se quiere mostrar
// El dato que el usuario ingresa se guarda en la variable nombre o edad
// y sera tratado como una cadena de texto
let nota1 = prompt("Ingresa la primera calificación:");
let nota2 = prompt("Ingresa la segunda calificación:");
let nota3 = prompt("Ingresa la tercera calificación:");

// se vuelve a llamar la variables nota1, nota2 y nota3
// y se realiza la conversion del valor de las notas de cadena de texto a numero decimal
// parseFloat() sirve para convertir una cadena de texto en un numero decimal
// todo eso se guarda dentro de la variable nota1, nota2 y nota3
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

// se declara la variable suma y promedio
// se realiza la operacion de suma entre las tres notas (nota1 + nota2 + nota3)
// y se guarda dentro de la variable suma
// luego se realiza la operacion de division entre la suma y el numero 3 (suma / 3)
// y se guarda dentro de la variable promedio
let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;

// console.log() es una funcion y es la que permite mostrar mensajes en la consola del navegador
// aqui es donde se muestra el resultado del promedio de las tres notas
// toFixed(2) sirve para mostrar solo dos decimales en el resultado
console.log("El promedio de las tres notas es: " + promedio.toFixed(2));