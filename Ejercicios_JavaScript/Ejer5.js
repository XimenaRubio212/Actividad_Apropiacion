// Declaración de la variable celsius.
// prompt(): Muestra un cuadro de diálogo al usuario,
// solicitando la temperatura en grados Celsius (°C).
// El valor ingresado por el usuario y se almacena en la variable
// celsius como una cadena de texto (string).
let celsius = prompt("Ingresa la temperatura en grados Celsius (°C):");

// Conversión de la entrada a un tipo numérico.
// celsius = parseFloat(celsius): Convierte la cadena de texto de celsius
// a un número de punto flotante (decimal).
// Esta conversión es obligatoria para poder realizar cálculos matemáticos correctos.
celsius = parseFloat(celsius);

// Cálculo de la conversión de Celsius a Fahrenheit.
// Declaración de la variable 'fahrenheit'.
// Fórmula: (C * 9/5) + 32.
// Se realiza la multiplicación de la temperatura en Celsius por 9/5 (o 1.8), y luego se suma 32.
// El resultado numérico de la conversión se guarda en la variable fahrenheit.
let fahrenheit = (celsius * (9/5)) + 32;

// Mostrar el resultado final en la consola.
// console.log(): Imprime el mensaje de salida en la consola.
// celsius + " °C equivalen a ...": Se usa la concatenación (+)
// para unir la temperatura original, el texto y el resultado.
// fahrenheit.toFixed(2): Método que formatea el número fahrenheit
// para que muestre exactamente dos decimales, lo que mejora la legibilidad del resultado.
console.log(celsius + " °C equivalen a " + fahrenheit.toFixed(2) + " °F.");