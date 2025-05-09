<template>
  <header>
    <button
      class="menu-button"
      v-for="action in headerActions"
      @click="action.action"
    >
      {{ action.title }}
    </button>
  </header>
</template>

<script setup lang="ts">
import Info from "~/components/character/Info.vue";

const windowStore = useWindowStore();

const headerActions = [
  {
    title: "character",
    action: () => windowStore.addWindow({ component: markRaw(Info) }),
  },
  {
    title: "inventory",
  },
];
</script>

<style lang="scss">
header {
  height: $header-height;
  width: calc(100% - $side-spacing * 2);
  border-radius: $border-radius-size;

  padding: 0px $side-spacing;

  position: relative;
  margin: $side-spacing auto 0;

  background: white;
  border: $border;

  display: flex;

  align-items: center;
  gap: 10%;

  .menu-button {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
}
</style>
