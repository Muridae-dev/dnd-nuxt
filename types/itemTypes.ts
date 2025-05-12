import type { Stats } from "./characterTypes";

export type GearType = "head" | "chest" | "legs" | "misc";

export type ArmorClass = "mail" | "leather" | "cloth";

export interface Item {
  id: string;
  slot: GearType;
  stats: Stats;
  armorValue: number;
  armorClass: ArmorClass;
}

export type Gear = {
  [K in Exclude<GearType, "misc">]: Item | null;
} & {
  misc: Item[];
};
