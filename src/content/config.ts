// Import utilities from astro:content
import { z, defineCollection } from "astro:content";

// Define the type and schema for one or more collections
const blogCollection = defineCollection({
  type: "content",
  // an object of strings - title, year, month, day, and intro
  schema: z.object({
    title: z.string(),
    year: z.string(),
    month: z.string(),
    day: z.string(),
    intro: z.string(),
  }),
});

// Export a single collections object to register the collections
// The key should match the collection directory name in "src/content"
export const collections = {
  blog: blogCollection, // add the blog collection
};
