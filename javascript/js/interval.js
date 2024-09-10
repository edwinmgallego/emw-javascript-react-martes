/*
El método setInterval() en JavaScript se utiliza para ejecutar una función repetidamente en intervalos de tiempo establecidos. La función se ejecuta indefinidamente hasta que se detiene con clearInterval().



*


*/

const saludo = () => {
  document.write("<li>Hola mundo</li>");
};

document.write("<ol>");

setInterval(saludo, 5000);

document.write("</ol>");
