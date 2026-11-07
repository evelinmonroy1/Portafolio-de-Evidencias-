// Lee en tiempo de compilación los archivos que haya en
// /public/evidencias/<seccion>/ para crear las tarjetas automáticamente.
// Agregar, reemplazar o borrar un archivo en esa carpeta basta para
// actualizar la página; no hay que tocar el diseño.
import fs from 'node:fs';
import path from 'node:path';

export interface Documento {
  archivo: string;
  titulo: string;
  descripcion: string;
  url: string;
  tamano: string;
  extension: string;
  fecha: number;
  orden: number;
}

type Info = { titulo?: string; descripcion?: string; orden?: number };

const PERMITIDOS = /\.(pdf|png|jpe?g|webp|docx?|pptx?|xlsx?)$/i;
const RAIZ = path.join(process.cwd(), 'public', 'evidencias');

export function withBase(ruta: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (ruta.startsWith('/') ? ruta : '/' + ruta);
}

function tituloDesdeArchivo(nombre: string) {
  const sinExt = nombre.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
  return sinExt.charAt(0).toUpperCase() + sinExt.slice(1);
}

function formatoTamano(bytes: number) {
  if (bytes < 1024 * 1024) return Math.max(1, Math.round(bytes / 1024)) + ' KB';
  return (bytes / 1024 / 1024).toFixed(1) + ' MB';
}

export function obtenerDocumentos(seccion: string): Documento[] {
  const carpeta = path.join(RAIZ, seccion);
  if (!fs.existsSync(carpeta)) return [];

  let info: Record<string, Info> = {};
  const rutaInfo = path.join(carpeta, 'info.json');
  if (fs.existsSync(rutaInfo)) {
    try {
      info = JSON.parse(fs.readFileSync(rutaInfo, 'utf-8'));
    } catch {
      console.warn(`[evidencias] No se pudo leer ${rutaInfo}: revisa que sea JSON válido.`);
    }
  }

  return fs
    .readdirSync(carpeta)
    .filter((f) => PERMITIDOS.test(f))
    .map((archivo) => {
      const stat = fs.statSync(path.join(carpeta, archivo));
      const meta = info[archivo] ?? {};
      return {
        archivo,
        titulo: meta.titulo ?? tituloDesdeArchivo(archivo),
        descripcion: meta.descripcion ?? '',
        url: withBase(`/evidencias/${seccion}/${encodeURIComponent(archivo)}`),
        tamano: formatoTamano(stat.size),
        extension: (archivo.split('.').pop() ?? '').toUpperCase(),
        fecha: stat.mtimeMs,
        orden: meta.orden ?? 999,
      };
    })
    .sort((a, b) => a.orden - b.orden || a.titulo.localeCompare(b.titulo, 'es'));
}
