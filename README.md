# Portafolio de Tutoría · Ingeniería Informática

Portafolio personal hecho con [Astro](https://astro.build), en tonos morado pastel y adaptado a computadora y celular.

## Cómo empezar

```bash
npm install
npm run dev      # abre http://localhost:4321
npm run build    # genera la página final en /dist
```

Necesitas Node.js 22.23 o más reciente.

## Qué editar y dónde

| Quiero cambiar… | Archivo |
|---|---|
| Mi nombre o mi foto | `src/data/sitio.ts` (pon tu foto en `public/foto.jpg` y escribe `foto: '/foto.jpg'`) |
| Los textos de un apartado | `src/components/secciones/<Apartado>.astro` |
| Colores y tipografía | `src/styles/global.css` (las variables están al inicio, en `:root`) |
| Mis proyectos | `src/content/proyectos/*.md` |

Los textos resaltados en amarillo (como “Nombre de tu institución”) usan la clase `ph`. Cámbialos por tus datos y quita el `<span class="ph">`.

## Evidencias y documentos (PDF)

Cada apartado tiene su carpeta dentro de `public/evidencias/`:

```
public/evidencias/
├── perfil/
├── manejo-emocional/
├── proyecto-de-vida/
├── vocacion-cientifica/
├── administracion/
├── plan-de-carrera/
├── cv/              ← aquí va tu CV en PDF (el botón “Descargar CV” lo detecta)
├── proyectos/
└── reflexion/
```

- **Agregar:** copia el PDF a la carpeta del apartado.
- **Actualizar:** reemplaza el archivo con otro del mismo nombre.
- **Eliminar:** borra el archivo.

Después vuelve a ejecutar `npm run build` (o solo guarda si usas `npm run dev`). Las tarjetas con “Ver” y “Descargar” se crean solas, sin tocar el diseño.

También acepta imágenes (PNG, JPG, WEBP) y archivos de Office.

### Nombre y descripción de cada tarjeta (opcional)

Si no haces nada, el título sale del nombre del archivo (`reporte-final.pdf` → “Reporte final”). Para poner un título, una descripción y un orden, crea un `info.json` en la misma carpeta:

```json
{
  "infografia-manejo-emocional.pdf": {
    "titulo": "Infografía: manejo emocional",
    "descripcion": "Ruta de cinco pasos y estrategias para cada emoción.",
    "orden": 1
  }
}
```

Hay un ejemplo en `public/evidencias/manejo-emocional/info.json`.

## Agregar un proyecto

1. Copia `src/content/proyectos/ejemplo-sistema-tutorias.md` y cámbiale el nombre.
2. Llena los datos (título, objetivo, tecnologías, funcionalidades, participación, resultados).
3. Pon las capturas en `public/proyectos/<tu-proyecto>/` y escribe sus rutas en `imagenes`:
   ```yaml
   imagenes: ["/proyectos/inventario/inicio.png", "/proyectos/inventario/reporte.png"]
   evidencia: "/proyectos/inventario/manual.pdf"
   enlace: "https://github.com/tu-usuario/inventario"
   ```
4. Borra el proyecto de ejemplo cuando tengas los tuyos.

## Publicar gratis

- **Netlify o Vercel:** sube el repositorio a GitHub e impórtalo. Comando de build: `npm run build`, carpeta: `dist`.
- **GitHub Pages:** en `astro.config.mjs` descomenta `site` y `base` con tus datos y usa la acción oficial de Astro para Pages.

Cada vez que agregues un PDF y subas los cambios a GitHub, la página se actualiza sola.
