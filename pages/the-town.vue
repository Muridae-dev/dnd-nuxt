<template>
  <GameplayContainer>
    <div class="the-town-container">
      <GameplayIcon
        :onClick="() => (isDialogueOpen = !isDialogueOpen)"
        iconType="npcs"
        iconName="wise-man"
        title="Open Dialogue"
      />

      <GameplayIcon
        iconType="misc"
        iconName="map"
        title="Return to Dashboard"
        href="/"
      />

      <Window
        v-if="isDialogueOpen"
        :closeWindow="() => (isDialogueOpen = false)"
        ><GameplayDialogue v-if="data" :data="data"
      /></Window>
    </div>
  </GameplayContainer>
</template>

<script setup lang="ts">
const isDialogueOpen = ref(false);

const { data } = await useAsyncData("content", () => loadDialogue(), {
  server: true,
});
</script>

<style lang="scss">
.the-town-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  width: fit-content;

  padding: 10px;
}
</style>
