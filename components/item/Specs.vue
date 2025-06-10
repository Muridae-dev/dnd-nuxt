<template>
  <div class="item-specs-container">
    <h2>{{ item.name }}</h2>

    <div v-if="item.stats">
      <h3>Stats:</h3>
      <ul>
        <li v-for="(value, statKey) in item.stats" :key="statKey">
          {{ formatKey(statKey) }}: {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from "~/types/itemTypes";

interface SpecsProps {
  item: Item;
}

defineProps<SpecsProps>();

const formatKey = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^[a-z]/, (match) => match.toUpperCase());
};
</script>

<style lang="scss">
.item-specs-container {
  display: none;

  position: absolute;
  bottom: calc(100% - 10px);
  left: calc(100% - 10px);

  z-index: 1;

  padding: 2px $side-spacing 20px;
  min-width: 300px;

  border-radius: $border-radius-size;
  border: $border;
  background: $window-background;
}

.inventory-cell:hover {
  .item-specs-container {
    display: inline;
  }
}
</style>
