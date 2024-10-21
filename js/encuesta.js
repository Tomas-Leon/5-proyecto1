const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];

// Función para calcular el promedio de satisfacción
function calcularPromedio(respuestas) {
  let suma = 0;
  for (let i = 0; i < respuestas.length; i++) {
    suma += respuestas[i];
  }
  return suma / respuestas.length;
}

// Función para contar los clientes satisfechos (calificación >= 7)
function contarSatisfechos(respuestas) {
  let clientesSatisfechos = 0;
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i] >= 7) {
      clientesSatisfechos++;
    }
  }
  return clientesSatisfechos;
}

// Función para contar los clientes insatisfechos (calificación <= 4)
function contarInsatisfechos(respuestas) {
  let clientesInsatisfechos = 0;
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i] <= 4) {
      clientesInsatisfechos++;
    }
  }
  return clientesInsatisfechos;
}

// Función para encontrar la moda (la calificación más frecuente)
function calcularModa(respuestas) {

  const frecuencia = [0,0,0,0,0,0,0,0,0,0,0]; // Índices 0 a 10, pero usaremos solo 1 a 10

  // Contamos las frecuencias
  for (let i = 0; i < respuestas.length; i++) {
    let calificacion = respuestas[i];
    frecuencia[calificacion]++; // Incrementamos la frecuencia
  }

  // Encontrar la moda
  let maxFrecuencia = 0;
  let moda = [];

  for (let i = 1; i <= 10; i++) {
    // Solo iteramos de 1 a 10
    if (frecuencia[i] > maxFrecuencia) {
      maxFrecuencia = frecuencia[i];
      moda = [i]; // Reiniciamos la moda con la nueva calificación
    } else if (frecuencia[i] === maxFrecuencia) {
      moda.push(i); // Añadimos la calificación a la moda
    }
  }

  return moda;
}

// Calcular las métricas usando las funciones
const promedio = calcularPromedio(respuestas);
const satisfechos = contarSatisfechos(respuestas);
const insatisfechos = contarInsatisfechos(respuestas);
const porcentajeSatisfechos = (satisfechos / respuestas.length) * 100;
const porcentajeInsatisfechos = (insatisfechos / respuestas.length) * 100;
const moda = calcularModa(respuestas);

// Mostrar los resultados en el documento
document.write("<p>Promedio de satisfacción: " + promedio.toFixed(2) + "</p>");
document.write("<p>Clientes satisfechos: " + satisfechos + "</p>");
document.write("<p>Clientes insatisfechos: " + insatisfechos + "</p>");
document.write(
  "<p>Porcentaje de clientes satisfechos: " +
    porcentajeSatisfechos.toFixed(2) +
    "%</p>"
);
document.write(
  "<p>Porcentaje de clientes insatisfechos: " +
    porcentajeInsatisfechos.toFixed(2) +
    "%</p>"
);
document.write("<p>La moda es: " + moda.join(", ") + "</p>");
