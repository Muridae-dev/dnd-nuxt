<template>
  <div
    class="window-container"
    :style="{
      top: windowY ? `${windowY}px` : '50%',
      left: windowX ? `${windowX}px` : '50%',
      transform: !windowX ? 'translate(-50%, -50%)' : 'unset',
    }"
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

const windowX = ref<null | number>(null);
const windowY = ref<null | number>(null);

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

  windowContainer.value
    ?.querySelector(".window-options")
    ?.classList.add("active");

  outOfBoundsX.value =
    window.innerWidth - 11 * 2 - windowContainer.value?.offsetWidth;
  outOfBoundsY.value =
    window.innerHeight - (72 + 11) - windowContainer.value?.offsetHeight;

  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", stopWindowMovement);
};

const stopWindowMovement = () => {
  window.removeEventListener("mousemove", mouseMove);
  window.removeEventListener("mouseup", stopWindowMovement);
  windowContainer.value
    ?.querySelector(".window-options")
    ?.classList.remove("active");
};

defineProps<WindowProps>();
</script>

<style lang="scss">
.window-container {
  position: absolute;
  z-index: 10;

  border-radius: $border-radius-size;
  border: $border;
  background: $window-background;

  max-height: 100%;
  max-width: 100%;
}

.window-options {
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: grab;

  height: 20px;
  border-bottom: $border;
  padding-right: 5px;

  background: $window-top-bar-color;

  &.active {
    cursor: grabbing;
  }
}

.window-close--button {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  border-radius: 100%;
  height: calc(100% - 7px);
  aspect-ratio: 1/1;
  padding: 2px;

  filter: invert(100%);
  background: $window-top-bar-color;
  color: black;

  font-family: DS-Digital;
  font-size: 1.1rem;
}
</style>
