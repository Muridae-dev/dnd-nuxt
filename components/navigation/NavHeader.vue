<template>
  <header>
    <button class="menu-button" v-for="action in headerActions">
      {{ action.title }}
    </button>
  </header>
</template>

<script setup lang="ts">
const headerActions = [
  {
    title: "character",
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
  border-radius: 5px;

  padding: 0px $side-spacing;

  position: relative;
  margin: $side-spacing auto 0;

  background: white;
  border: 1px solid black;

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
