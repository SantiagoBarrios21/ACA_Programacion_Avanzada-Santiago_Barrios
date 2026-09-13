// funciones.js
// aca van todas las funciones para manejar el arreglo de estudiantes
// nota: no usar filter, map, forEach, reduce ni find, solo for/while/if/ternario

const NOTA_MINIMA = 3.0;

// calcula el promedio de las notas de un estudiante
function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  let promedio = notas.length > 0 ? suma / notas.length : 0;
  promedio = Number(promedio.toFixed(2));
  return promedio;
}

// busca un estudiante por id
function buscarPorId(lista, id) {
  let encontrado = null;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      encontrado = lista[i];
      break;
    }
  }
  return encontrado;
}

// busca estudiantes que contengan el texto en el nombre
function buscarPorNombre(lista, texto) {
  const resultado = [];
  const textoBuscado = texto.toLowerCase();
  let i = 0;
  while (i < lista.length) {
    const nombreActual = lista[i].nombre.toLowerCase();
    if (nombreActual.indexOf(textoBuscado) !== -1) {
      resultado.push(lista[i]);
    }
    i = i + 1;
  }
  return resultado;
}

// filtra por carrera
function filtrarPorCarrera(lista, carrera) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].carrera.toLowerCase() === carrera.toLowerCase()) {
      resultado.push(lista[i]);
    }
  }
  return resultado;
}

// filtra por semestre
function filtrarPorSemestre(lista, semestre) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].semestre === semestre) {
      resultado.push(lista[i]);
    }
  }
  return resultado;
}

// arma el objeto del estudiante con el promedio ya calculado
function armarConPromedio(estudiante, promedio) {
  const obj = {
    id: estudiante.id,
    nombre: estudiante.nombre,
    carrera: estudiante.carrera,
    semestre: estudiante.semestre,
    notas: estudiante.notas,
    promedio: promedio
  };
  return obj;
}

// devuelve el promedio de un estudiante puntual
function obtenerPromedioEstudiante(lista, id) {
  const estudiante = buscarPorId(lista, id);
  if (estudiante === null) {
    return null;
  }
  const promedio = calcularPromedio(estudiante.notas);
  return armarConPromedio(estudiante, promedio);
}

// devuelve los estudiantes que pasaron (promedio >= 3.0)
function obtenerAprobados(lista) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    const promedio = calcularPromedio(lista[i].notas);
    if (promedio >= NOTA_MINIMA) {
      resultado.push(armarConPromedio(lista[i], promedio));
    }
  }
  return resultado;
}

// devuelve los estudiantes que no pasaron (promedio < 3.0)
function obtenerReprobados(lista) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    const promedio = calcularPromedio(lista[i].notas);
    if (promedio < NOTA_MINIMA) {
      resultado.push(armarConPromedio(lista[i], promedio));
    }
  }
  return resultado;
}

// arma un reporte general del curso
function generarReporte(lista) {
  let sumaPromedios = 0;
  let totalAprobados = 0;
  let totalReprobados = 0;
  const porCarrera = {};

  let i = 0;
  while (i < lista.length) {
    const promedio = calcularPromedio(lista[i].notas);
    sumaPromedios = sumaPromedios + promedio;

    if (promedio >= NOTA_MINIMA) {
      totalAprobados++;
    } else {
      totalReprobados++;
    }

    const carrera = lista[i].carrera;
    if (porCarrera[carrera]) {
      porCarrera[carrera] = porCarrera[carrera] + 1;
    } else {
      porCarrera[carrera] = 1;
    }

    i++;
  }

  const promedioGeneral = lista.length > 0 ? Number((sumaPromedios / lista.length).toFixed(2)) : 0;

  return {
    totalEstudiantes: lista.length,
    promedioGeneral: promedioGeneral,
    totalAprobados: totalAprobados,
    totalReprobados: totalReprobados,
    porCarrera: porCarrera
  };
}

module.exports = {
  calcularPromedio,
  buscarPorId,
  buscarPorNombre,
  filtrarPorCarrera,
  filtrarPorSemestre,
  obtenerPromedioEstudiante,
  obtenerAprobados,
  obtenerReprobados,
  generarReporte
};
