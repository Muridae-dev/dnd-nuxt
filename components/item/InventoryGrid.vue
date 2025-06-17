<template>
  <div class="inventory-grid">
    <ItemThumbnail :item="item" v-for="item in items" class="inventory-cell" />

    <div class="inventory-cell" v-for="n in 25 - items.length"></div>
  </div>
</template>

<script setup lang="ts">
import type { ItemsCollectionItem } from "@nuxt/content";

interface InventoryGridProps {
  items: ItemsCollectionItem[];
}

defineProps<InventoryGridProps>();
</script>

<style lang="scss">
.inventory-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, $inventory-cell-size);
  grid-template-rows: repeat(5, $inventory-cell-size);
  gap: $inventory-cell-gap;
}

.inventory-cell {
  position: relative;

  border: 1px solid black;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);

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
