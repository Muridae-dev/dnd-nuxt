import type { StoreInventory } from "~/types/optionTypes";

export const loadStore = async (src: string) => {
  const base = useRequestURL();
  const res = await fetch(`${base.origin}/${src}.md`);
  const raw = await res.text();
  return parseStoreData(raw);
};

const parseStoreData = (rawData: string) => {
  const rawInventory = rawData.split("# Inventory")[1].trim();

  if (rawInventory) {
    const inventory: StoreInventory[] = rawInventory
      .split(">")
      .filter((i) => i.split("x ")[1] != null)
      .map((rawItem) => {
        const amount = rawItem.split("x ")[0];
        const itemId = rawItem.split("x ")[1].trim();
        return { amount, itemId };
      });

    return inventory;
  }

  return;
};
