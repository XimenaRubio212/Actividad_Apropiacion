let celsius = prompt("Ingresa la temperatura en grados Celsius (°C):");

// Convertir la entrada a número
celsius = parseFloat(celsius);

// Aplicar la fórmula: F = (C * 9/5) + 32
let fahrenheit = (celsius * (9/5)) + 32;

console.log(celsius + " °C equivalen a " + fahrenheit.toFixed(2) + " °F.");
// Ejemplo de salida en consola (Celsius=25): 25 °C equivalen a 77.00 °F.