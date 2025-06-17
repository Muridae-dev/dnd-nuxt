import type { ItemsCollectionItem } from "@nuxt/content";

export type GearType = "head" | "chest" | "legs" | "misc";

export type ArmorClass = "mail" | "leather" | "cloth";

export type Gear = {
  [K in Exclude<GearType, "misc">]: ItemsCollectionItem | null;
} & {
  misc: ItemsCollectionItem[];
};
