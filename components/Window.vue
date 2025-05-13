<template>
  <div class="window-container">
    <div class="window-options">
      <button class="window-close--button" @click="closeWindow">X</button>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface WindowProps {
  closeWindow: () => void;
}

defineProps<WindowProps>();
</script>

<style lang="scss">
.window-container {
  position: absolute;
  bottom: 50px;
  right: 300px;

  max-height: 500px;

  border-radius: $border-radius-size;
  border: $border;
  background: rgb(172, 172, 172);
}

.window-options {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 20px;
  border-bottom: $border;
  padding-right: 5px;

  background: rgb(52, 52, 52);
}

.window-close--button {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  height: calc(100% - 5px);
  aspect-ratio: 1/1;

  background: red;
  color: black;

  font-family: DS-Digital;
  font-size: 1.1rem;
}
</style>
