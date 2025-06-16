<template>
  <GameplayContainer>
    <div class="the-town-container">
      <template v-for="data in dialogueData">
        <GameplayIcon
          :onClick="() => (data.isOpen = true)"
          :iconType="data.iconType"
          :iconName="data.iconName"
          :title="data.title"
        />

        <Window v-if="data.isOpen" :closeWindow="() => (data.isOpen = false)"
          ><GameplayDialogue
            v-if="data.data.dialogues"
            :data="data.data.dialogues"
            :finished="data.data.finished"
            :closeWindow="() => (data.isOpen = false)"
        /></Window>
      </template>

      <GameplayIcon
        iconType="misc"
        iconName="map"
        title="Return to Dashboard"
        href="/"
        class="dashboard-icon"
      />
    </div>
  </GameplayContainer>
</template>

<script setup lang="ts">
import { useTheTownStore } from "../stores/theTownStore";

const dialogueData = ref<any>([]);

const { optionsToShow, updateShowingOptions } = useTheTownStore();

onMounted(() => {
  if (optionsToShow.length === 0) updateShowingOptions("intro/intro");
  else parseOptions();

  console.log("onMounted::");
});

const parseOptions = () => {
  optionsToShow.forEach(async (option: any) => {
    const fetchedDialogues = await loadDialogue(`/the-town/${option.src}`);

    dialogueData.value.push({
      ...option,
      data: fetchedDialogues,
      isOpen: false,
    });
  });

  console.log("parseOptions:: ", dialogueData.value);
};

watch(optionsToShow, async () => {
  dialogueData.value = [];
  parseOptions();
  console.log("watch::");
});
</script>

<style lang="scss">
.the-town-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  padding: 10px;
}
</style>
