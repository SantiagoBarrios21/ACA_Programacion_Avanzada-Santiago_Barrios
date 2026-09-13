# Gestión de Estudiantes

Proyecto en Node.js que maneja un arreglo de objetos de estudiantes. Permite buscar por id o por nombre, filtrar por carrera o semestre, calcular promedios, separar aprobados y reprobados, y armar un reporte general del curso. Todo expuesto con Express.

Las funciones están hechas con for, while, if y ternarios. No se usan filter, map, forEach, reduce ni find, tal como lo pide la actividad.

## Archivos

- data.js: el arreglo de estudiantes
- funciones.js: la lógica (búsquedas, filtros, promedios, reporte)
- demo.js: corre todas las funciones y muestra el resultado en consola
- index.js: servidor Express con las rutas

## Cómo correrlo

```
npm install
npm start
```

El servidor queda en http://localhost:3000

Para ver todo por consola sin levantar el servidor:

```
node demo.js
```

## Rutas

- GET /estudiantes
- GET /estudiantes/:id
- GET /estudiantes/buscar/:nombre
- GET /estudiantes/carrera/:carrera
- GET /estudiantes/semestre/:semestre
- GET /estudiantes/:id/promedio
- GET /estudiantes/estado/aprobados
- GET /estudiantes/estado/reprobados
- GET /reporte

## Evidencia

En evidencia_consola.txt está la salida de correr node demo.js.
