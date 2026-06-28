import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const log = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dispatch: z.number(),
    type: z.enum(['essay', 'fragment', 'postmortem', 'decision', 'render-log', 'status-update']),
    project: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { log };
