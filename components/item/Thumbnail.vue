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
// TODO: Change this to match item type in Inventory when it's made
defineProps<{ item: any }>();
</script>

<style lang="scss">
.thumbnail--container {
  img {
    width: 100%;
  }
}
</style>
