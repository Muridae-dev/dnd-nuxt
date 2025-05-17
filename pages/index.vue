<template>
  <div class="gameplay-container">
    <Window
      v-for="window in windowStore.windows"
      :closeWindow="() => windowStore.closeWindow(window)"
    >
      <component :is="window.component" />
    </Window>
    <Map />
  </div>
</template>

<script setup lang="ts">
const windowStore = useWindowStore();
</script>

<style lang="scss">
.gameplay-container {
  height: calc(100vh - $header-height - $side-spacing * 3);
  width: calc(100% - $side-spacing * 2);
  border-radius: $border-radius-size;

  padding: $side-spacing;

  position: relative;
  margin: $side-spacing auto 0;

  background: white;
  border: $border;
}
</style>
