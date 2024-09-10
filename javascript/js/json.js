/**
 * 
Un JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos. Es fácil de leer y escribir para los humanos, y también fácil de interpretar y generar para las máquinas. JSON se basa en una estructura de pares clave-valor y en arrays, lo que lo hace muy útil para almacenar y transmitir datos estructurados.

Características principales:
Formato de texto: JSON es simplemente texto, lo que significa que es independiente del lenguaje de programación.
Pares clave-valor: Los datos se organizan en pares, donde una clave se asocia con un valor.
Ejemplo: "nombre": "Cristian"
Soporta varios tipos de datos:
Cadenas ("Hola"),
Números (123),
Booleanos (true o false),
Arrays (["rojo", "verde", "azul"]),
Objetos ({"ciudad": "Madrid", "país": "España"}),
Null (null).
 * 
 * 
 */

const { name, email } = {
  name: "edwin",
  edad: 20,
  email: "mail@mail.com",
};

document.write("<p>" + name + "</p>");
document.write("<p>" + email + "</p>");



console.log(name);
console.log(email);
