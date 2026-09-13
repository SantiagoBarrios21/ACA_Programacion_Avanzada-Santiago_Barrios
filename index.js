
// servidor con express que expone las funciones de funciones.js

const express = require('express');
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

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    mensaje: "API de estudiantes",
    rutas: [
      "/estudiantes",
      "/estudiantes/:id",
      "/estudiantes/buscar/:nombre",
      "/estudiantes/carrera/:carrera",
      "/estudiantes/semestre/:semestre",
      "/estudiantes/:id/promedio",
      "/estudiantes/estado/aprobados",
      "/estudiantes/estado/reprobados",
      "/reporte"
    ]
  });
});

app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

app.get('/estudiantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const estudiante = buscarPorId(estudiantes, id);
  if (estudiante === null) {
    res.status(404).json({ error: "no existe ese estudiante" });
  } else {
    res.json(estudiante);
  }
});

app.get('/estudiantes/buscar/:nombre', (req, res) => {
  const resultado = buscarPorNombre(estudiantes, req.params.nombre);
  res.json(resultado);
});

app.get('/estudiantes/carrera/:carrera', (req, res) => {
  const resultado = filtrarPorCarrera(estudiantes, req.params.carrera);
  res.json(resultado);
});

app.get('/estudiantes/semestre/:semestre', (req, res) => {
  const semestre = parseInt(req.params.semestre);
  const resultado = filtrarPorSemestre(estudiantes, semestre);
  res.json(resultado);
});

app.get('/estudiantes/:id/promedio', (req, res) => {
  const id = parseInt(req.params.id);
  const resultado = obtenerPromedioEstudiante(estudiantes, id);
  if (resultado === null) {
    res.status(404).json({ error: "no existe ese estudiante" });
  } else {
    res.json(resultado);
  }
});

app.get('/estudiantes/estado/aprobados', (req, res) => {
  res.json(obtenerAprobados(estudiantes));
});

app.get('/estudiantes/estado/reprobados', (req, res) => {
  res.json(obtenerReprobados(estudiantes));
});

app.get('/reporte', (req, res) => {
  res.json(generarReporte(estudiantes));
});

app.listen(PORT, () => {
  console.log("servidor corriendo en http://localhost:" + PORT);
});
