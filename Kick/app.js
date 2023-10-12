// Obtenemos los elementos del DOM que vamos a actualizar
const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

// Definimos la fecha límite para el contador
const fechaLimite = new Date('October 14, 2023 00:00:00');
console.log(fechaLimite);

function actualizarContador() {
  // Obtenemos la fecha y hora actual
  const fechaActual = new Date();

  // Calculamos la diferencia entre la fecha límite y la fecha actual
  const diferencia = fechaLimite - fechaActual;

  // Calculamos los días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizamos los elementos del DOM con los valores calculados
  diasElement.textContent = dias < 10 ? `0${dias}` : dias;
  horasElement.textContent = horas < 10 ? `0${horas}` : horas;
  minutosElement.textContent = minutos < 10 ? `0${minutos}` : minutos;
  segundosElement.textContent = segundos < 10 ? `0${segundos}` : segundos;
}

// Actualizamos el contador cada segundo
setInterval(actualizarContador, 1000);