export const useInventoryStore = defineStore("inventoryStore", {
  // TODO: Update these any:s
  state: (): any => ({
    inventory: [],
  }),
  actions: {
    addItem(item: any) {
      this.inventory.push(item);
    },
  },
});
