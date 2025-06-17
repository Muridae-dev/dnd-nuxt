<template>
  <img
    :src="`/placeholders/${item.iconType}/${item.iconName}.webp`"
    class="image-contrast thumbnail--image"
  />
</template>

<script setup lang="ts">
import type { ItemsCollectionItem } from "@nuxt/content";

defineProps<{ item: ItemsCollectionItem }>();
</script>

<style lang="scss">
.thumbnail--image {
  width: 100%;
}
</style>
