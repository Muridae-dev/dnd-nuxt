<template>
  <GameplayContainer>
    <div class="the-town-container">
      <button @click="() => (isDialogueOpen = !isDialogueOpen)">
        Open Dialogue
      </button>

      <Window
        v-if="isDialogueOpen"
        :closeWindow="() => (isDialogueOpen = false)"
        ><div class="dialogue-container">HAHA Welcome to the town</div></Window
      >

      <NuxtLink to="/">Back to dashboard</NuxtLink>
    </div>

    <!-- <pre>{{ data }}</pre> -->
  </GameplayContainer>
</template>

<script setup lang="ts">
const isDialogueOpen = ref(false);

const { data } = await useAsyncData("content", () =>
  loadDialogue("the-town/intro/intro")
);

data.value && console.log(parseDialogue(data.value));
</script>

<style lang="scss">
.the-town-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.dialogue-container {
  padding: 5px 10px;
}
</style>
