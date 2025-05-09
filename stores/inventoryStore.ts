export const useInventoryStore = defineStore("inventoryStore", {
  state: (): any => ({
    inventory: [],
  }),
  actions: {
    addItem(item: any) {
      this.inventory.push(item);
    },
  },
});
