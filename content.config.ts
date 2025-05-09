import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    classes: defineCollection({
      source: "classes/*.md",
      type: "data",
      schema: z.object({}),
    }),
  },
});
