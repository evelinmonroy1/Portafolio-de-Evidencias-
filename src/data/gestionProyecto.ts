// =====================================================================
//  ADMINISTRACIÓN POR PROYECTOS — Planeación de mi portafolio digital
//  Para dar seguimiento, cambia el "estado" de cada tarea:
//  'Terminada' | 'En curso' | 'Pendiente'. El avance se calcula solo.
// =====================================================================

export type Estado = 'Terminada' | 'En curso' | 'Pendiente';

export const proyecto = {
  nombre: 'Portafolio digital de Tutoría en Astro',
  objetivo:
    'Desarrollar y publicar en 6 semanas un sitio web personal que presente quién soy y reúna las evidencias de los seis temas de Tutoría, accesible desde computadora y celular.',
  inicio: '2026-10-26',
  fin: '2026-12-04',
  revision: 'Revisión de avance cada viernes',
};

// Semanas del cronograma (lunes a viernes)
export const semanas = [
  { id: 'S1', fechas: '26–30 oct' },
  { id: 'S2', fechas: '2–6 nov' },
  { id: 'S3', fechas: '9–13 nov' },
  { id: 'S4', fechas: '16–20 nov' },
  { id: 'S5', fechas: '23–27 nov' },
  { id: 'S6', fechas: '30 nov–4 dic' },
];

export const alcance = {
  incluye: [
    'Sitio web en Astro con 10 secciones: inicio, perfil, seis temas, proyectos y reflexión final.',
    'Diseño adaptable a computadora y celular, con tonos morado pastel.',
    'Evidencias en PDF que se pueden ver y descargar.',
    'Publicación gratuita en internet (Netlify o GitHub Pages).',
  ],
  noIncluye: [
    'Sistema de inicio de sesión o panel de administración.',
    'Dominio propio de pago.',
    'Traducción del sitio a otros idiomas.',
  ],
};

export const entregables = [
  { nombre: 'Estructura del sitio y diseño base', fecha: '30 oct', responsable: 'Evelin' },
  { nombre: 'Contenido de los seis temas con sus evidencias', fecha: '13 nov', responsable: 'Evelin' },
  { nombre: 'Sitio publicado con enlace público', fecha: '27 nov', responsable: 'Evelin' },
  { nombre: 'Versión final revisada y reflexión final', fecha: '4 dic', responsable: 'Evelin y tutor(a)' },
];

export const responsables = [
  { nombre: 'Evelin Monroy', rol: 'Líder del proyecto', tareas: 'Planeación, diseño, programación, contenido y publicación.' },
  { nombre: 'Tutor(a) de grupo', rol: 'Revisión', tareas: 'Revisa que cada tema cumpla la rúbrica y da retroalimentación.' },
  { nombre: 'Compañera de clase', rol: 'Pruebas de uso', tareas: 'Prueba el sitio en su celular y reporta errores o partes confusas.' },
];

// inicio = número de semana (1–6), dur = semanas que dura
export const tareas: { id: string; nombre: string; responsable: string; inicio: number; dur: number; depende: string[]; estado: Estado }[] = [
  { id: 'T1', nombre: 'Definir alcance, secciones y diseño', responsable: 'Evelin', inicio: 1, dur: 1, depende: [], estado: 'Terminada' },
  { id: 'T2', nombre: 'Configurar Astro, estilos y componentes', responsable: 'Evelin', inicio: 1, dur: 2, depende: ['T1'], estado: 'Terminada' },
  { id: 'T3', nombre: 'Sobre mí y CV', responsable: 'Evelin', inicio: 2, dur: 1, depende: ['T2'], estado: 'Terminada' },
  { id: 'T4', nombre: 'Proyecto de vida y línea del tiempo', responsable: 'Evelin', inicio: 2, dur: 1, depende: ['T2'], estado: 'Terminada' },
  { id: 'T5', nombre: 'Plan de carrera y mapa de brechas', responsable: 'Evelin', inicio: 2, dur: 2, depende: ['T2'], estado: 'Terminada' },
  { id: 'T6', nombre: 'Vocación científica: póster', responsable: 'Evelin', inicio: 3, dur: 1, depende: ['T2'], estado: 'Terminada' },
  { id: 'T7', nombre: 'Administración por proyectos: Gantt y riesgos', responsable: 'Evelin', inicio: 3, dur: 1, depende: ['T2'], estado: 'En curso' },
  { id: 'T8', nombre: 'Manejo emocional e infografía', responsable: 'Evelin', inicio: 3, dur: 2, depende: ['T2'], estado: 'Pendiente' },
  { id: 'T9', nombre: 'Mis proyectos: capturas y evidencias', responsable: 'Evelin', inicio: 4, dur: 1, depende: ['T3'], estado: 'Pendiente' },
  { id: 'T10', nombre: 'Pruebas en celular y accesibilidad', responsable: 'Compañera y Evelin', inicio: 5, dur: 1, depende: ['T4', 'T5', 'T6', 'T7', 'T8', 'T9'], estado: 'Pendiente' },
  { id: 'T11', nombre: 'Publicar el sitio en internet', responsable: 'Evelin', inicio: 5, dur: 1, depende: ['T10'], estado: 'Pendiente' },
  { id: 'T12', nombre: 'Revisión del tutor y ajustes', responsable: 'Tutor(a) y Evelin', inicio: 6, dur: 1, depende: ['T11'], estado: 'Pendiente' },
  { id: 'T13', nombre: 'Reflexión final y entrega', responsable: 'Evelin', inicio: 6, dur: 1, depende: ['T12'], estado: 'Pendiente' },
];

// semana = en qué semana cae el hito (se dibuja al final de esa semana)
export const hitos = [
  { id: 'H1', nombre: 'Estructura lista', fecha: '30 oct', semana: 1, criterio: 'El sitio compila y muestra todas las secciones vacías.', logrado: true },
  { id: 'H2', nombre: 'Seis temas con contenido', fecha: '13 nov', semana: 3, criterio: 'Cada tema cumple la lista de verificación de su actividad.', logrado: false },
  { id: 'H3', nombre: 'Sitio publicado', fecha: '27 nov', semana: 5, criterio: 'El enlace público abre bien en computadora y celular.', logrado: false },
  { id: 'H4', nombre: 'Entrega final', fecha: '4 dic', semana: 6, criterio: 'Versión revisada por el tutor y reflexión final terminada.', logrado: false },
];

export type Nivel = 'Alta' | 'Media' | 'Baja';
export type Impacto = 'Alto' | 'Medio' | 'Bajo';

export const riesgos: { id: string; riesgo: string; prob: Nivel; impacto: Impacto; prevencion: string; respuesta: string; responsable: string }[] = [
  { id: 'R1', riesgo: 'La carga de otras materias retrasa el contenido', prob: 'Alta', impacto: 'Medio', prevencion: 'Reservar 1 hora diaria fija para el portafolio.', respuesta: 'Priorizar los temas con fecha de revisión más cercana y mover lo opcional.', responsable: 'Evelin' },
  { id: 'R2', riesgo: 'Errores al compilar o publicar el sitio', prob: 'Media', impacto: 'Alto', prevencion: 'Ejecutar npm run build cada semana y guardar versiones con Git.', respuesta: 'Regresar a la última versión que funcionaba y corregir paso a paso.', responsable: 'Evelin' },
  { id: 'R3', riesgo: 'Pérdida de archivos o de la computadora', prob: 'Baja', impacto: 'Alto', prevencion: 'Subir el proyecto a GitHub y respaldar los PDF en la nube.', respuesta: 'Descargar el proyecto desde GitHub en otra computadora.', responsable: 'Evelin' },
  { id: 'R4', riesgo: 'Algún tema no cumple con lo que pide la rúbrica', prob: 'Media', impacto: 'Alto', prevencion: 'Revisar la lista de verificación de cada actividad antes de darla por terminada.', respuesta: 'Ajustar con la retroalimentación del tutor en el hito H2.', responsable: 'Evelin y tutor(a)' },
  { id: 'R5', riesgo: 'Publicar datos personales sensibles', prob: 'Media', impacto: 'Medio', prevencion: 'No mostrar teléfono, domicilio ni fecha de nacimiento en la página.', respuesta: 'Retirar el dato y volver a publicar de inmediato.', responsable: 'Evelin' },
  { id: 'R6', riesgo: 'El diseño se ve mal en algunos celulares', prob: 'Media', impacto: 'Bajo', prevencion: 'Probar en celular cada semana, no solo al final.', respuesta: 'Corregir los estilos con los reportes de la compañera de pruebas.', responsable: 'Compañera y Evelin' },
];

export const seguimiento = [
  { semana: 'S1 · 30 oct', nota: 'Se cumplió el hito H1. La estructura y el diseño quedaron listos a tiempo.', estado: 'A tiempo' },
  { semana: 'S2 · 6 nov', nota: 'Terminé Sobre mí, CV, Proyecto de vida y Plan de carrera. El póster se adelantó una semana.', estado: 'Adelantado' },
  { semana: 'S3 · 13 nov', nota: 'Pendiente de registrar.', estado: 'Pendiente' },
];

export const reflexion = [
  'Si ocurre un imprevisto, lo primero que haría es revisar qué tareas dependen de la que se retrasó. En este proyecto, las pruebas (T10) y la publicación (T11) dependen de que todo el contenido esté listo, así que esa es la ruta que no puedo descuidar.',
  'Si me enfermo o tengo una semana pesada de exámenes, usaría el adelanto que llevo en Vocación científica y Plan de carrera como margen, y movería primero lo opcional: por ejemplo, mostrar dos proyectos en lugar de cuatro antes que retrasar la publicación.',
  'Si falla la publicación, regresaría a la última versión estable guardada en GitHub y probaría otro servicio gratuito. En cualquier caso avisaría a mi tutor(a) con anticipación, propondría una nueva fecha para el hito afectado y actualizaría el cronograma y el tablero para que el seguimiento siga siendo real.',
];