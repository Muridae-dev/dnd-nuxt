<template>
  <div class="inventory-container">
    <button @click="addRandomItem">ADD RANDOM ITEM</button>

    <div class="inventory-grid">
      <div class="inventory-cell" v-for="item in inventoryStore.inventory">
        <img
          :src="`/placeholders/${item.iconType}/${item.iconName}.webp`"
          class="image-contrast"
        />
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
$cell-size: 80px;
$cell-gap: 2px;

.inventory-container {
  padding: $cell-gap;
}

.inventory-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, $cell-size);
  grid-template-rows: repeat(5, $cell-size);
  gap: $cell-gap;
}

.inventory-cell {
  position: relative;

  width: $cell-size;
  height: $cell-size;
  border: 1px solid black;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
  }

  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      aspect-ratio: 1/1;

      background: #ffffff;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 60%,
        rgba(252, 173, 70, 1) 100%
      );
    }
  }
}
</style>
