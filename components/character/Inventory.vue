<template>
  <div class="inventory-container">
    <button @click="addRandomItem">ADD RANDOM ITEM</button>
    <div class="inventory-grid">
      <div v-for="item in inventoryStore.inventory" class="inventory-cell">
        <ItemThumbnail :item="item" />
        <ItemSpecs :item="item" />
      </div>

      <div
        class="inventory-cell"
        v-for="n in 25 - inventoryStore.inventory.length"
      ></div>
    </div>
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

.inventory-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, $inventory-cell-size);
  grid-template-rows: repeat(5, $inventory-cell-size);
  gap: $inventory-cell-gap;
}

.inventory-cell {
  @extend .image-portrait--hover;
  position: relative;

  border: 1px solid black;
  box-sizing: border-box;
  background: $item-cell-background;
}
</style>
