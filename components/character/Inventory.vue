<template>
  <div class="inventory-container">
    <button @click="addRandomItem">ADD RANDOM ITEM</button>
    <ItemInventoryGrid :items="inventoryStore.inventory" />
  </div>
</template>

<script setup lang="ts">
const inventoryStore = useInventoryStore();

const { data } = await useAsyncData("itemData", () =>
  queryCollection("items").all()
);

const addRandomItem = () => {
  if (data.value) {
    const randomItem =
      data.value[Math.floor(Math.random() * data.value.length)];

    inventoryStore.addItem(randomItem);
  }
};
</script>

<style lang="scss">
.inventory-container {
  padding: $inventory-cell-gap;
}
</style>
