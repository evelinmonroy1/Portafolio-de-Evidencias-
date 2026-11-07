// Datos generales del portafolio. Cambia aquí tu nombre y tu foto
// y se actualizan en todas las secciones.

export const sitio = {
  nombre: 'Evelin Monroy Anselmo',
  carrera: 'Ingeniería Informática',
  semestre: 'Quinto',
  // Coloca tu fotografía en /public/foto.jpg (o cambia la ruta).
  // Deja null para mostrar tus iniciales.
    foto: '/evelin.jpeg' as string | null,
};

export const iniciales = sitio.nombre
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((p) => p[0].toUpperCase())
  .join('');

// Nombres visibles de cada apartado. La clave es el nombre de la carpeta
// dentro de /public/evidencias/.
export const secciones: Record<string, string> = {
  perfil: 'Sobre mí',
  'manejo-emocional': 'Manejo emocional',
  'proyecto-de-vida': 'Proyecto de vida',
  'vocacion-cientifica': 'Vocación científica',
  administracion: 'Administración por proyectos',
  'plan-de-carrera': 'Plan de carrera',
  cv: 'Mi CV personal',
  proyectos: 'Mis proyectos',
  reflexion: 'Reflexión final',
};
