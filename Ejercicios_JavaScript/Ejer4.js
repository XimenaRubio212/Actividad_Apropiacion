// const sirve par adeclarar una constante
// const: Se utiliza para declarar una variable cuyo valor
// NO cambiará durante la ejecución del programa.
// TASA_CAMBIO: Nombre de la constante que almacena la tasa de conversión fija
// Sirve para hacer el código más legible y fácil de mantener si la tasa necesita ser actualizada.
const TASA_CAMBIO = 4000; 

// Declaración de la variable 'pesosColombianos'.
// prompt(): Muestra un cuadro de diálogo al usuario, pidiéndole la cantidad a convertir.
// El valor que el usuario ingresa se guarda como una cadena de texto (string)
// en la variable 'pesosColombianos'.
let pesosColombianos = prompt("Ingresa la cantidad de pesos colombianos (COP):");


pesosColombianos = parseFloat(pesosColombianos);

let dolares = pesosColombianos / TASA_CAMBIO;

console.log(pesosColombianos + " COP equivalen a " + dolares.toFixed(2) + " USD.");