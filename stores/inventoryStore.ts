import type { ItemsCollectionItem } from "@nuxt/content";

export const useInventoryStore = defineStore("inventoryStore", {
  state: (): { inventory: ItemsCollectionItem[] } => ({
    inventory: [],
  }),
  actions: {
    addItem(item: ItemsCollectionItem) {
      this.inventory.push(item);
    },
  },
});
