// const sirve par adeclarar una constante
// const: Se utiliza para declarar una variable cuyo valor
// NO cambiará durante la ejecución del programa.
// TASA_CAMBIO: Nombre de la constante que almacena la tasa de conversión fija
// Sirve para hacer el código más legible y fácil de mantener si la tasa necesita ser actualizada.
const TASA_CAMBIO = 4000; 

// Declaración de la variable pesosColombianos.
// prompt(): Muestra un cuadro de diálogo al usuario, pidiéndole la cantidad a convertir.
// El valor que el usuario ingresa se guarda como una cadena de texto (string)
// en la variable 'pesosColombianos'.
let pesosColombianos = prompt("Ingresa la cantidad de pesos colombianos (COP):");

// Conversión de un valor tipo texto a un tipo numérico.
// parseFloat(): Convierte la cadena de texto (string) obtenida de prompt()
// a un número de punto flotante (decimal).
// Esto es esencial para poder realizar la operación de división en la siguiente línea.
// El valor numérico sobrescribe el valor de string original en la variable 'pesosColombianos'.
pesosColombianos = parseFloat(pesosColombianos);

// Declaración de la variable dolares.
// pesosColombianos / TASA_CAMBIO: Realiza la operación matemática. El monto en pesos se divide
// por la tasa de cambio fija para obtener el valor equivalente en dólares.
// El resultado numérico de la división se almacena en la variable 'dolares'.
let dolares = pesosColombianos / TASA_CAMBIO;

// Mostrar el resultado final en la consola.
// console.log(): Imprime el mensaje al desarrollador/usuario en la consola.
// dolares.toFixed(2): Es un método que se aplica al número 'dolares' para formatearlo
// como una cadena de texto que solo muestre dos decimales (formato estándar de moneda).
console.log(pesosColombianos + " COP equivalen a " + dolares.toFixed(2) + " USD.");