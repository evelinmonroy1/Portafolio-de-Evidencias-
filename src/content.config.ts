import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada proyecto es un archivo .md en src/content/proyectos/
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    objetivo: z.string(),
    tecnologias: z.array(z.string()).default([]),
    funcionalidades: z.array(z.string()).default([]),
    participacion: z.string().optional(),
    resultados: z.string().optional(),
    // Rutas dentro de /public, por ejemplo "/proyectos/inventario/captura1.png"
    imagenes: z.array(z.string()).default([]),
    // PDF de evidencia dentro de /public, opcional
    evidencia: z.string().optional(),
    enlace: z.string().url().optional(),
    orden: z.number().optional(),
  }),
});

export const collections = { proyectos };
