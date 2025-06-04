<template>
  <GameplayContainer>
    <div class="the-town-container">
      <button @click="() => (isDialogueOpen = !isDialogueOpen)">
        Open Dialogue
      </button>

      <Window
        v-if="isDialogueOpen"
        :closeWindow="() => (isDialogueOpen = false)"
        ><GameplayDialogue v-if="data" :data="data"
      /></Window>

      <NuxtLink to="/">Back to dashboard</NuxtLink>
    </div>
  </GameplayContainer>
</template>

<script setup lang="ts">
const isDialogueOpen = ref(false);

const { data } = await useAsyncData("content", () =>
  loadDialogue("the-town/intro/intro")
);
</script>

<style lang="scss">
.the-town-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
</style>
