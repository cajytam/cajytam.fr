import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publishedAt: z.coerce.date(),
      category: z.enum(["journey", "autre"]),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      featured: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      type: z.string().optional(),
      coverImage: image().optional(),
      url: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      publishedAt: z.coerce.date(),
    }),
});

export const collections = { blog, projects };
