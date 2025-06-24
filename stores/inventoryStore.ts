import type { ItemsCollectionItem } from "@nuxt/content";

export const useInventoryStore = defineStore("inventoryStore", {
  state: (): {
    inventory: ItemsCollectionItem[];
    inventorySize: number;
    gold: number;
  } => ({
    inventory: [],
    inventorySize: 25,
    gold: 130,
  }),
  actions: {
    addItem(item: ItemsCollectionItem) {
      const inventoryIsFull = this.checkIfInventoryIsFull();
      !inventoryIsFull && this.inventory.push(item);
    },
    removeGold(value: number) {
      this.gold = this.gold - value;
    },
    buyItem(item: ItemsCollectionItem) {
      const { addNotification } = useNotificationStore();

      const inventoryIsFull = this.checkIfInventoryIsFull();

      if (!inventoryIsFull) {
        if (item.value && this.gold >= item.value) {
          this.addItem(item);
          this.removeGold(item.value);

          addNotification({
            message: `${item.name} added to Inventory!`,
          });
        } else {
          addNotification({
            message: `Not enough gold`,
            type: "error",
          });
        }
      }
    },
    checkIfInventoryIsFull() {
      const { addNotification } = useNotificationStore();

      if (this.inventory.length < this.inventorySize) {
        return false;
      } else {
        addNotification({ message: "Inventory is full", type: "error" });
        return true;
      }
    },
  },
});
