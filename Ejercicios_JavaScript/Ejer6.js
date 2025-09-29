// Declaración de la variable lado.
// prompt(): Muestra un cuadro de diálogo al usuario, pidiendo la longitud de un lado del cuadrado.
// El valor ingresado por el usuario se almacena en la variable 'lado' como una cadena de texto (string).
let lado = prompt("Ingresa la longitud del lado del cuadrado:");

// Conversión de la entrada a un tipo numérico.
// lado = parseFloat(lado): Convierte la cadena de texto almacenada en lado
// a un número de punto flotante (decimal).
// Esta conversión es necesaria ya que las operaciones matemáticas solo funcionan con tipos numéricos,
// y prompt() siempre devuelve un string. El valor numérico sobrescribe el string original.
lado = parseFloat(lado);

// Cálculo del perímetro.
// Declaración de la variable perimetro.
// lado * 4: Se realiza la multiplicación del valor numérico del lado por 4, que es la fórmula para
// calcular el perímetro de un cuadrado (la suma de sus cuatro lados iguales).
// El resultado numérico del cálculo se guarda en la variable perimetro.
let perimetro = lado * 4;

// Mostrar el resultado final en la consola.
// console.log(): Imprime el mensaje final en la consola del navegador o entorno de ejecución.
// Se usa la concatenación (+) para unir la cadena literal ("El perímetro del cuadrado es: ")
// con el valor numérico almacenado en perimetro.
console.log("El perímetro del cuadrado es: " + perimetro);