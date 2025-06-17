<template>
  <div class="thumbnail--container">
    <img
      :src="`/placeholders/${item.iconType}/${item.iconName}.webp`"
      class="image-contrast"
    />
    <ItemSpecs :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { ItemsCollectionItem } from "@nuxt/content";

defineProps<{ item: ItemsCollectionItem }>();
</script>

<style lang="scss">
.thumbnail--container {
  img {
    width: 100%;
  }
}
</style>
