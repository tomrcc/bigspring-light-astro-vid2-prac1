import { defineCollection, z } from "astro:content";

// Homepage schema
const homepageSchema = z.object({
  banner: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
    button: z.object({
      label: z.string(),
      link: z.string().default("#"),
      enable: z.boolean().default(true)
    })
  }).optional(),
  feature: z.object({
    title: z.string().optional(),
    features: z.array(z.object({ name: z.string().optional(), icon: z.string().optional(), content: z.string().optional() })),
  }).optional(),
  services: z.array(z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    images: z.array(z.string()).optional(),
    button: z.object({
      label: z.string(),
      link: z.string().default("#"),
      enable: z.boolean().default(true)
    }).optional()
  })).optional(),
  workflow: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string()
  }).optional(),
  call_to_action: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.string(),
    button: z.object({
      label: z.string(),
      link: z.string().default("#"),
      enable: z.boolean().default(true)
    }).optional()
  }).optional()
});

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesSchema = z.object({
  title: z.string(),
  meta_title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  layout: z.string().optional(),
  draft: z.boolean().optional(),
  info: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    contacts: z.array(z.string()).optional()
  }).optional(),
  faqs: z.array(z.object({
    title: z.string(),
    answer: z.string(),
  })).optional(),
  plans: z.array(z.object({
    title: z.string(),
    subtitle: z.string(),
    price: z.number(),
    recommended: z.boolean().optional(),
    type: z.string(),
    features: z.array(z.string()).optional(),
    button: z.object({
      label: z.string(),
      link: z.string().default("#"),
      enable: z.boolean().default(true)
    })
  })).optional(),
  call_to_action: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.string(),
    button: z.object({
      label: z.string(),
      link: z.string().default("#"),
      enable: z.boolean().default(true)
    }).optional()
  }).optional()
});

// Interface for content
export interface PageData {
  blog: string,
  pages: string,
}

const pagesCollection = defineCollection({
  schema: z.union([pagesSchema, homepageSchema])
})

// Export collections
export const collections = {
  blog: postsCollection,
  pages: pagesCollection,
};
