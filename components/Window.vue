<template>
  <div
    class="window-container"
    :style="{ top: `${windowY}px`, left: `${windowX}px` }"
    ref="windowContainer"
  >
    <div
      class="window-options"
      @mousedown="moveWindow"
      @mouseup="stopWindowMovement"
    >
      <button class="window-close--button" @click="closeWindow">X</button>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface WindowProps {
  closeWindow: () => void;
}

const windowX = ref(0);
const windowY = ref(0);

const offsetX = ref(0);
const offsetY = ref(0);

const outOfBoundsX = ref(0);
const outOfBoundsY = ref(0);

const windowContainer = ref<HTMLElement | null>(null);

const mouseMove = (eListen: MouseEvent) => {
  eListen.preventDefault();

  // 11 & 72 are the relative distance on each axis to the parent-node
  const valueX = eListen.x - offsetX.value - 11;
  const valueY = eListen.y - offsetY.value - 72;

  if (valueX > 0 && valueX < outOfBoundsX.value) windowX.value = valueX;
  else if (valueX > outOfBoundsX.value) windowX.value = outOfBoundsX.value;
  else windowX.value = 0;

  if (valueY > 0 && valueY < outOfBoundsY.value) windowY.value = valueY;
  else if (valueY > outOfBoundsY.value) windowY.value = outOfBoundsY.value;
  else windowY.value = 0;
};

const moveWindow = (e: MouseEvent) => {
  offsetX.value = e.offsetX;
  offsetY.value = e.offsetY;

  windowContainer.value?.offsetWidth;
  windowContainer.value?.offsetWidth;

  outOfBoundsX.value =
    window.innerWidth - 11 * 2 - windowContainer.value?.offsetWidth;
  outOfBoundsY.value =
    window.innerHeight - (72 + 11) - windowContainer.value?.offsetHeight;

  console.log(outOfBoundsX.value, outOfBoundsY.value);

  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", stopWindowMovement);
};

const stopWindowMovement = () => {
  window.removeEventListener("mousemove", mouseMove);
  window.removeEventListener("mouseup", stopWindowMovement);
};

defineProps<WindowProps>();
</script>

<style lang="scss">
.window-container {
  position: absolute;

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
