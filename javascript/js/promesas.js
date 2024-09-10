/*
Las promesas en JavaScript son objetos que representan el eventual resultado (o falla) de una operación asincrónica. Permiten manejar tareas asincrónicas de manera más eficiente y legible que con callbacks anidados, resolviendo lo que se conoce como "callback hell".

Estados de una promesa
Una promesa puede estar en uno de tres estados:

Pendiente (pending): El estado inicial, que indica que la operación no ha terminado.
Resuelta (fulfilled): La operación terminó con éxito y se devolvió un valor.
Rechazada (rejected): La operación falló y se devolvió una razón (error).


*/

const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Esto no es valido");
    } else {
      resolve(a + b);
    }
  });
};

const result = sumar(3, 5)
  .then((res) => {
    document.write(res);
  })
  .catch((error) => {
    document.write(error);
  });
