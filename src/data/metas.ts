// =====================================================================
//  MIS METAS — Línea del tiempo interactiva (Proyecto de vida)
//  Edita aquí tus metas. La línea del tiempo se arma sola con estos datos.
//  Solo cambia el texto entre comillas; no borres comas ni corchetes.
// =====================================================================

export type Prioridad = 'Alta' | 'Media' | 'Baja';
export type Tipo = 'Personal' | 'Profesional';

export interface Meta {
  titulo: string;
  tipo: Tipo;
  prioridad: Prioridad;
  valor: string; // el valor personal con el que se conecta esta meta
  smart: {
    especifica: string;
    medible: string;
    alcanzable: string;
    relevante: string;
    temporal: string;
  };
  pasos: string[];
  recursos: string[];
  obstaculos: string[];
  apoyos: string[];
  indicadores: string[];
}

export interface Plazo {
  id: string;
  etiqueta: string; // texto del botón en la línea del tiempo
  fecha: string;
  resumen: string;
  metas: Meta[];
}

// Punto de partida (hoy)
export const hoy = {
  fecha: 'Noviembre 2026',
  titulo: 'Quinto semestre de Ingeniería Informática',
  texto:
    'Tengo bases de programación, estoy construyendo mi portafolio y ya sé hacia qué áreas quiero orientar mi carrera.',
};

export const plazos: Plazo[] = [
  {
    id: 'un-ano',
    etiqueta: '1 año',
    fecha: 'Noviembre 2027',
    resumen: 'Fortalecer hábitos y mi base técnica.',
    metas: [
      {
        titulo: 'Terminar un curso certificado de desarrollo web y publicar 2 proyectos',
        tipo: 'Profesional',
        prioridad: 'Alta',
        valor: 'Disciplina',
        smart: {
          especifica: 'Completar un curso de desarrollo web (HTML, CSS, JavaScript) y publicar 2 proyectos propios en GitHub.',
          medible: 'Certificado del curso y 2 repositorios públicos con su página funcionando.',
          alcanzable: 'Dedicaré 4 horas por semana, compatible con mi carga de materias.',
          relevante: 'Es la base para trabajar como desarrolladora web, el área que más me interesa.',
          temporal: 'Antes del 30 de noviembre de 2027.',
        },
        pasos: [
          'Elegir el curso e inscribirme (diciembre 2026)',
          'Avanzar 2 módulos por mes',
          'Primer proyecto: página personal (marzo 2027)',
          'Segundo proyecto: app con base de datos (septiembre 2027)',
        ],
        recursos: ['Computadora e internet', 'Plataforma de cursos en línea', 'GitHub y VS Code', '4 horas por semana'],
        obstaculos: ['Semanas de exámenes', 'Perder la motivación a mitad del curso'],
        apoyos: ['Tutor académico', 'Compañeros de la carrera para revisar código', 'Comunidades de programación'],
        indicadores: ['Porcentaje de avance del curso cada mes', 'Número de proyectos publicados', 'Horas registradas por semana'],
      },
      {
        titulo: 'Hacer ejercicio 3 veces por semana',
        tipo: 'Personal',
        prioridad: 'Media',
        valor: 'Compromiso',
        smart: {
          especifica: 'Hacer 30 minutos de ejercicio (caminar, correr o rutina en casa) tres días a la semana.',
          medible: 'Registro semanal en una app o calendario.',
          alcanzable: 'Son 90 minutos por semana y no necesito gimnasio.',
          relevante: 'Me ayuda a manejar el estrés y a rendir mejor en la escuela.',
          temporal: 'Mantenerlo de diciembre 2026 a noviembre 2027.',
        },
        pasos: ['Definir días y horario fijos', 'Preparar una rutina sencilla', 'Registrar cada sesión', 'Revisar mi avance cada mes'],
        recursos: ['Ropa deportiva', 'App de registro', 'Espacio en casa o parque cercano'],
        obstaculos: ['Cansancio después de clases', 'Clima o falta de tiempo'],
        apoyos: ['Hacerlo con una amiga o familiar', 'Recordatorios en el celular'],
        indicadores: ['Cumplir al menos el 80 % de las sesiones del mes', 'Cómo me siento de energía y estrés (escala 1 a 10)'],
      },
    ],
  },
  {
    id: 'tres-anos',
    etiqueta: '3 años',
    fecha: 'Noviembre 2029',
    resumen: 'Titularme y dar el primer paso profesional.',
    metas: [
      {
        titulo: 'Titularme y conseguir mi primer empleo como desarrolladora junior',
        tipo: 'Profesional',
        prioridad: 'Alta',
        valor: 'Responsabilidad',
        smart: {
          especifica: 'Concluir la carrera, obtener mi título y trabajar como desarrolladora junior.',
          medible: 'Título en mano y contrato laboral firmado.',
          alcanzable: 'Mi plan de estudios termina en 2028 y las residencias me darán experiencia.',
          relevante: 'Me da independencia económica y experiencia real en mi área.',
          temporal: 'Antes de noviembre de 2029.',
        },
        pasos: [
          'Aprobar todas las materias sin rezago',
          'Hacer residencias en un área de TI (2028)',
          'Certificar inglés nivel B2',
          'Actualizar CV, LinkedIn y portafolio',
          'Postularme a 5 vacantes por mes al egresar',
        ],
        recursos: ['Portafolio y CV actualizados', 'Bolsa de trabajo de la universidad', 'Curso y examen de inglés'],
        obstaculos: ['Competencia por vacantes junior', 'Que pidan experiencia previa', 'Trámites de titulación tardados'],
        apoyos: ['Asesor de residencias', 'Coordinación de la carrera', 'Contactos de prácticas y docentes'],
        indicadores: ['Créditos aprobados por semestre', 'Nivel de inglés en exámenes de práctica', 'Postulaciones enviadas y entrevistas obtenidas'],
      },
      {
        titulo: 'Crear un fondo de ahorro de emergencia',
        tipo: 'Personal',
        prioridad: 'Media',
        valor: 'Honestidad',
        smart: {
          especifica: 'Ahorrar el 15 % de mis ingresos hasta juntar el equivalente a 3 meses de gastos.',
          medible: 'Saldo de una cuenta de ahorro separada.',
          alcanzable: 'Empezaré con montos pequeños y aumentaré al tener empleo.',
          relevante: 'Me da tranquilidad y me permite apoyar a mi familia.',
          temporal: 'Completar el fondo antes de noviembre de 2029.',
        },
        pasos: ['Registrar mis gastos cada mes', 'Abrir una cuenta solo para ahorro', 'Apartar el ahorro el día que recibo dinero'],
        recursos: ['App o tabla de presupuesto', 'Cuenta de ahorro'],
        obstaculos: ['Gastos inesperados', 'Ingresos bajos mientras estudio'],
        apoyos: ['Consejos de mi familia', 'Cursos gratuitos de educación financiera'],
        indicadores: ['Porcentaje ahorrado cada mes', 'Avance del fondo respecto a la meta'],
      },
    ],
  },
  {
    id: 'cinco-anos',
    etiqueta: '5 años',
    fecha: 'Noviembre 2031',
    resumen: 'Crecer, especializarme y ser independiente.',
    metas: [
      {
        titulo: 'Ser desarrolladora semi senior y liderar un proyecto',
        tipo: 'Profesional',
        prioridad: 'Alta',
        valor: 'Respeto',
        smart: {
          especifica: 'Ascender a un puesto semi senior, obtener una certificación en la nube y liderar al menos un proyecto.',
          medible: 'Puesto en contrato, certificado obtenido y un proyecto entregado como líder.',
          alcanzable: 'Con 2 a 3 años de experiencia es un ascenso común en el área.',
          relevante: 'Combina mi interés técnico con mi meta de liderar equipos.',
          temporal: 'Antes de noviembre de 2031.',
        },
        pasos: ['Pedir retroalimentación en evaluaciones de desempeño', 'Estudiar para una certificación en la nube', 'Ofrecerme para coordinar tareas del equipo'],
        recursos: ['Capacitación de la empresa', 'Cursos y guías de certificación', 'Mentoría de personas con más experiencia'],
        obstaculos: ['Poco tiempo libre por el trabajo', 'Inseguridad al liderar'],
        apoyos: ['Mentor o jefe directo', 'Compañeros de equipo', 'Comunidades profesionales'],
        indicadores: ['Resultados de evaluaciones de desempeño', 'Avance en la certificación', 'Proyectos en los que tengo un rol de liderazgo'],
      },
      {
        titulo: 'Vivir de forma independiente y viajar fuera del país',
        tipo: 'Personal',
        prioridad: 'Media',
        valor: 'Empatía',
        smart: {
          especifica: 'Rentar mi propio espacio sin dejar de apoyar a mi familia y hacer un viaje al extranjero.',
          medible: 'Contrato de renta a mi nombre y viaje realizado.',
          alcanzable: 'Con empleo estable y el fondo de ahorro de la meta de 3 años.',
          relevante: 'Representa mi independencia y conocer otras culturas.',
          temporal: 'Antes de noviembre de 2031.',
        },
        pasos: ['Definir presupuesto mensual de vivienda', 'Ahorrar para el viaje aparte del fondo de emergencia', 'Tramitar pasaporte'],
        recursos: ['Ingreso estable', 'Ahorro para el viaje', 'Pasaporte'],
        obstaculos: ['Aumento del costo de vida', 'Gastos familiares imprevistos'],
        apoyos: ['Mi familia', 'Planeación financiera'],
        indicadores: ['Ahorro acumulado para el viaje', 'Porcentaje del ingreso destinado a vivienda'],
      },
    ],
  },
];

// Orden de prioridad general (el número de la izquierda es la prioridad)
export const prioridades = [
  'Titularme y conseguir mi primer empleo',
  'Terminar el curso de desarrollo web y publicar proyectos',
  'Certificar mi inglés en nivel B2',
  'Cuidar mi salud física y emocional',
  'Construir estabilidad económica',
];

// Reflexión de cierre: ¿Cómo se conectan tus valores con tus metas?
export const reflexionValores = [
  'Mis metas no salieron de la nada: cada una se apoya en algo que valoro. La disciplina me sostiene en el curso de desarrollo web cuando la motivación baja, y el compromiso me ayuda a cumplir con el ejercicio aunque esté cansada.',
  'La responsabilidad está detrás de mi meta de titularme y trabajar, porque sé que mi familia ha invertido en mi educación. La honestidad conmigo misma me ayuda a llevar un registro real de mis gastos y avances, sin engañarme.',
  'Al pensar en liderar un equipo, el respeto y la empatía son lo que quiero que me distinga: no solo llegar a un puesto, sino ser una persona con la que otros quieran trabajar. Revisar mis metas desde mis valores me hizo ver que lo importante no es solo qué quiero lograr, sino quién quiero ser en el camino.',
];