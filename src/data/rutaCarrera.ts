// =====================================================================
//  RUTA DE CARRERA — Plan de carrera
//  Datos tomados de mi documento "Ruta de carrera | Ingeniería Informática".
//  Si actualizas tus niveles, cambia aquí los números y el mapa se redibuja solo.
// =====================================================================

export type PerfilId = 'dev' | 'ciber' | 'ambos';

export const proposito =
  'Identificar las competencias que solicitan dos perfiles profesionales relacionados con Ingeniería Informática, compararlas con las habilidades que ya he desarrollado y establecer acciones concretas para fortalecer mi preparación durante seis meses.';

export const perfiles = [
  {
    id: 'dev' as const,
    numero: 'Perfil 1',
    nombre: 'Desarrolladora de software',
    resumen: 'Diseño, programación y mantenimiento de aplicaciones web y servicios digitales.',
    descripcion:
      'Analiza necesidades, diseña, programa, prueba y mantiene aplicaciones o sistemas. Puede trabajar en desarrollo web, aplicaciones empresariales, servicios backend o integración de sistemas.',
    tecnologias: ['Python', 'AWS', 'Java', 'SQL', 'JavaScript', 'Azure', 'Git', 'API REST', 'React', 'Docker'],
    competencias: [
      ['Programación y lógica', 'Escribir código legible, resolver problemas y utilizar estructuras de datos.'],
      ['Desarrollo web y backend', 'Crear interfaces, servicios y API; integrar frontend y backend.'],
      ['Bases de datos', 'Diseñar tablas, realizar consultas SQL y mantener la integridad de la información.'],
      ['Control de versiones', 'Usar Git y plataformas como GitHub o GitLab para colaborar y administrar cambios.'],
      ['Pruebas y calidad', 'Detectar errores, probar funcionalidades y documentar resultados.'],
      ['Nube y contenedores', 'Conocer servicios cloud y herramientas como Docker para desplegar aplicaciones.'],
      ['Habilidades transversales', 'Pensamiento crítico, comunicación, aprendizaje continuo y trabajo en equipo.'],
    ],
  },
  {
    id: 'ciber' as const,
    numero: 'Perfil 2',
    nombre: 'Analista de ciberseguridad',
    resumen: 'Protección de redes, sistemas y datos; identificación de riesgos y respuesta ante incidentes.',
    descripcion:
      'Protege redes, equipos, aplicaciones y datos. Revisa configuraciones, identifica vulnerabilidades, evalúa riesgos, supervisa alertas y propone medidas para prevenir o responder a incidentes.',
    tecnologias: ['Firewalls', 'Linux', 'Splunk', 'Python', 'Nessus'],
    competencias: [
      ['Redes y protocolos', 'Comprender TCP/IP, direccionamiento, DNS, puertos, routers, switches y firewalls.'],
      ['Sistemas operativos', 'Administrar Linux y Windows, permisos, usuarios, servicios y registros.'],
      ['Seguridad defensiva', 'Configurar controles, gestionar accesos, respaldos, cifrado y actualizaciones.'],
      ['Análisis de vulnerabilidades', 'Reconocer debilidades y evaluar su impacto en sistemas y redes.'],
      ['Monitoreo y respuesta', 'Interpretar logs y alertas; documentar y atender incidentes.'],
      ['Herramientas especializadas', 'Familiarizarse con firewalls, Linux, Splunk, Python y escáneres como Nessus.'],
      ['Habilidades transversales', 'Pensamiento crítico, atención al detalle, comunicación y aprendizaje continuo.'],
    ],
  },
];

export const experienciaActual =
  'A partir de los proyectos académicos y prácticas que he desarrollado, identifico experiencia inicial en creación de páginas y sistemas web con Astro, programación de servicios con FastAPI, conexión con MySQL y trabajo con componentes electrónicos como ESP32 y RFID. También he realizado prácticas de redes en Cisco Packet Tracer, incluyendo direccionamiento, ruteo estático y topologías. Esta experiencia constituye una base; no equivale todavía a dominio profesional.';

// Escala: 0 = sin evidencia; 1 = básico; 2 = en desarrollo; 3 = competente para proyectos académicos
export const escala = ['Sin evidencia', 'Básico', 'En desarrollo', 'Competente'];

export const brechas: { habilidad: string; actual: number; meta: number; paso: string; perfil: PerfilId }[] = [
  { habilidad: 'Desarrollo web (Astro)', actual: 2, meta: 3, paso: 'Profundizar componentes, accesibilidad, responsive y buenas prácticas.', perfil: 'dev' },
  { habilidad: 'Backend y API (FastAPI)', actual: 2, meta: 3, paso: 'Validación, autenticación, documentación y pruebas automatizadas.', perfil: 'dev' },
  { habilidad: 'Bases de datos (MySQL)', actual: 2, meta: 3, paso: 'Consultas avanzadas, índices, respaldos y seguridad.', perfil: 'dev' },
  { habilidad: 'Git y colaboración', actual: 1, meta: 3, paso: 'Practicar ramas, commits, pull requests y resolución de conflictos.', perfil: 'dev' },
  { habilidad: 'Pruebas y despliegue', actual: 1, meta: 3, paso: 'Aprender pruebas, Docker y despliegue en un servicio cloud.', perfil: 'dev' },
  { habilidad: 'Redes y configuración', actual: 2, meta: 3, paso: 'Consolidar subnetting, VLAN, ACL, DNS y diagnóstico.', perfil: 'ciber' },
  { habilidad: 'Linux y administración', actual: 1, meta: 3, paso: 'Practicar terminal, permisos, servicios, procesos y logs.', perfil: 'ciber' },
  { habilidad: 'Ciberseguridad / análisis', actual: 1, meta: 3, paso: 'Estudiar riesgos, vulnerabilidades, hardening y respuesta a incidentes.', perfil: 'ciber' },
  { habilidad: 'SIEM y monitoreo', actual: 0, meta: 2, paso: 'Realizar prácticas guiadas con logs y una herramienta como Splunk.', perfil: 'ciber' },
  { habilidad: 'Comunicación técnica', actual: 2, meta: 3, paso: 'Mejorar documentación, reportes, presentaciones e inglés técnico.', perfil: 'ambos' },
];

export const interpretacion =
  'Mi mayor avance se encuentra en el desarrollo web, backend, bases de datos y fundamentos de redes, porque ya los he aplicado en trabajos escolares. Las brechas más importantes son el uso sistemático de Git, las pruebas automatizadas, el despliegue en la nube, la administración de Linux y las herramientas de monitoreo de seguridad. Para ambos perfiles también necesito fortalecer el inglés técnico y la documentación profesional.';

export const comparacion =
  'El desarrollo de software se relaciona directamente con los proyectos web que ya he realizado, por lo que permite aprovechar mis conocimientos actuales y construir un portafolio funcional. La ciberseguridad también se conecta con mis prácticas de redes, pero requiere una preparación más especializada en sistemas operativos, análisis de vulnerabilidades, monitoreo y respuesta a incidentes. Ambos perfiles exigen pensamiento crítico, solución de problemas, comunicación y actualización constante.';

export const objetivoPlan =
  'Fortalecer las competencias técnicas que comparten ambos perfiles y desarrollar evidencias prácticas que permitan decidir con mayor claridad hacia cuál especialidad orientar mi carrera.';

export const plan = [
  { mes: 1, enfoque: 'Fundamentos y organización', actividades: 'Repasar lógica, JavaScript/Python, Git y GitHub. Crear repositorio y documentar el estado de mis proyectos.', evidencia: 'Repositorio ordenado y README de un proyecto.' },
  { mes: 2, enfoque: 'Backend y bases de datos', actividades: 'Mejorar una API con FastAPI: validaciones, autenticación básica, consultas SQL y manejo de errores.', evidencia: 'API documentada y conectada a MySQL.' },
  { mes: 3, enfoque: 'Calidad y despliegue', actividades: 'Agregar pruebas automatizadas, revisar seguridad básica del código y aprender fundamentos de Docker y despliegue.', evidencia: 'Aplicación probada y publicada en entorno de prueba.' },
  { mes: 4, enfoque: 'Redes y Linux', actividades: 'Practicar terminal Linux, usuarios, permisos, servicios, TCP/IP, DNS, puertos, firewall y diagnóstico de red.', evidencia: 'Bitácora con comandos y laboratorio de red.' },
  { mes: 5, enfoque: 'Ciberseguridad inicial', actividades: 'Estudiar vulnerabilidades, gestión de riesgos, hardening y análisis de registros. Realizar laboratorios legales y controlados.', evidencia: 'Reporte de evaluación de seguridad de un laboratorio propio.' },
  { mes: 6, enfoque: 'Integración y evaluación', actividades: 'Desarrollar un proyecto integrador: aplicación web con controles de seguridad, documentación y demostración. Evaluar avances y elegir especialidad.', evidencia: 'Proyecto en portafolio, informe técnico y autoevaluación.' },
];

export const tiempo = [
  { horas: '2 h', texto: 'Estudio' },
  { horas: '2–3 h', texto: 'Práctica' },
  { horas: '1–2 h', texto: 'Documentar resultados' },
];

export const indicadores = [
  'Mantener al menos un repositorio actualizado por proyecto.',
  'Completar una API con validaciones y pruebas básicas.',
  'Desplegar una aplicación de demostración.',
  'Resolver ejercicios de Linux y redes y documentar los comandos utilizados.',
  'Elaborar un reporte de riesgos y recomendaciones de seguridad en un laboratorio propio.',
  'Presentar el proyecto final en el portafolio con descripción, tecnologías, capturas y aprendizajes.',
];

export const reflexion =
  'La competencia que necesito priorizar es la ciberseguridad aplicada al desarrollo de software, especialmente la identificación de vulnerabilidades, la protección de datos y la implementación de controles de seguridad en aplicaciones y redes. Considero importante fortalecerla porque los sistemas que se desarrollan deben funcionar correctamente, pero también deben proteger la información de sus usuarios. Ya cuento con una base en programación, bases de datos y redes; por ello, integrar prácticas de seguridad a mis proyectos me permitirá aprovechar esos conocimientos y construir soluciones más confiables. Durante los próximos seis meses quiero avanzar mediante prácticas, documentación y un proyecto integrador que demuestre lo aprendido.';

export const conclusion =
  'La ruta propuesta parte de las competencias que ya he comenzado a desarrollar y establece pasos medibles para ampliar mi perfil. El objetivo no es dominar todas las tecnologías en seis meses, sino construir fundamentos sólidos, demostrar lo aprendido y tomar una decisión profesional con mayor información.';

export const fuentes = [
  { texto: 'O*NET OnLine. (2026). Software Developers (15-1252.00). National Center for O*NET Development.', url: 'https://www.onetonline.org/link/summary/15-1252.00' },
  { texto: 'O*NET OnLine. (2026). In-Demand Software Skills: Software Developers (15-1252.00). National Center for O*NET Development.', url: 'https://www.onetonline.org/link/demand/15-1252.00' },
  { texto: 'O*NET OnLine. (2026). Information Security Analysts (15-1212.00). National Center for O*NET Development.', url: 'https://www.onetonline.org/link/details/15-1212.00' },
  { texto: 'O*NET OnLine. (2026). In-Demand Software Skills: Information Security Analysts (15-1212.00). National Center for O*NET Development.', url: 'https://www.onetonline.org/link/demand/15-1212.00' },
  { texto: 'Petersen, R., Santos, D., Wetzel, K., Smith, M., & Witte, G. (2020). Workforce Framework for Cybersecurity (NICE Framework) (NIST SP 800-181 Rev. 1). National Institute of Standards and Technology.', url: 'https://doi.org/10.6028/NIST.SP.800-181r1' },
  { texto: 'National Institute of Standards and Technology. (s. f.). NICE Framework Resource Center: About.', url: 'https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/about' },
];