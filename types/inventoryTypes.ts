import type { GearType } from "./itemTypes";

export interface Inventory {
  itemName: string;
  itemValue: number;
  itemSlot?: GearType;
}
