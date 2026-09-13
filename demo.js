// demo.js
// corre las funciones y muestra los resultados en consola
// correr con: node demo.js

const estudiantes = require('./data');
const {
  buscarPorId,
  buscarPorNombre,
  filtrarPorCarrera,
  filtrarPorSemestre,
  obtenerPromedioEstudiante,
  obtenerAprobados,
  obtenerReprobados,
  generarReporte
} = require('./funciones');

console.log("=== 1. lista completa ===");
console.log(estudiantes);

console.log("\n=== 2. buscar por id (3) ===");
console.log(buscarPorId(estudiantes, 3));

console.log("\n=== 3. buscar por nombre (ra) ===");
console.log(buscarPorNombre(estudiantes, "ra"));

console.log("\n=== 4. filtrar por carrera (Ingenieria de Sistemas) ===");
console.log(filtrarPorCarrera(estudiantes, "Ingeniería de Sistemas"));

console.log("\n=== 5. filtrar por semestre (5) ===");
console.log(filtrarPorSemestre(estudiantes, 5));

console.log("\n=== 6. promedio de un estudiante (id 2) ===");
console.log(obtenerPromedioEstudiante(estudiantes, 2));

console.log("\n=== 7. aprobados ===");
console.log(obtenerAprobados(estudiantes));

console.log("\n=== 8. reprobados ===");
console.log(obtenerReprobados(estudiantes));

console.log("\n=== 9. reporte general ===");
console.log(generarReporte(estudiantes));
