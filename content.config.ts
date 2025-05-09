import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    classes: defineCollection({
      source: "classes/*.md",
      type: "data",
      schema: z.object({
        id: z.string(),
        name: z.string(),
        stats: z.record(z.number()),
      }),
    }),
    items: defineCollection({
      source: "items/*.md",
      type: "data",
      schema: z.object({
        id: z.string(),
        name: z.string(),

        stats: z.object({
          attackPower: z.number().optional(),
          armorValue: z.number().optional(),
          armorClass: z.enum(["cloth", "leather", "mail"]).optional(),

          value: z.number(),

          playerStats: z.record(z.number()).optional(),
        }),
      }),
    }),
  },
});
