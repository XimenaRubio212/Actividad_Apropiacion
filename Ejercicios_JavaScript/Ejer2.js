// let sirve para declarar variables y se declara la variable base y altura
// prompt() sirve para pedir datos al usuario
// se le pide al usuario la base y la altura del rectángulo
// El valor ingresado por el usuario es una cadena de texto en la viarable base y altura
let base = prompt("Ingresa la base del rectángulo:");
let altura = prompt("Ingresa la altura del rectángulo:");

// se vuelve a llamar la variables base y altura
// y se realiza la conversion del valor de la base y la altura de cadena de texto a numero decimal
// parseFloat() sirve para convertir una cadena de texto en un numero decimal
// todo eso se guarda dentro de la variable base y la altura
base = parseFloat(base);
altura = parseFloat(altura);

// se declara la variable area
// se realiza la operacion de multiplicacion entre la base y la altura (base * altura)
// El resultado de la operacion se guarda dentro de la variable area
let area = base * altura;

// console.log() es una funcion y es la que permite mostrar mensajes en la consola del navegador
// aqui es donde se muestra el resultado del area del rectángulo
console.log("El área del rectángulo es: " + area);