import { z, defineCollection } from 'astro:content';

const projetsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projets: projetsCollection,
};
