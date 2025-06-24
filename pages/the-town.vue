<template>
  <GameplayContainer>
    <div class="the-town-container">
      <template v-for="data in optionsData">
        <GameplayIcon
          :onClick="() => (data.isOpen = true)"
          :iconType="data.iconType"
          :iconName="data.iconName"
          :title="data.title"
        />

        <Window v-if="data.isOpen" :closeWindow="() => (data.isOpen = false)"
          ><GameplayDialogue
            v-if="data.type === 'dialogue'"
            :data="data.dialogues"
            :finished="data.finished"
            :closeWindow="() => (data.isOpen = false)"
          />
          <GameplayStore
            v-else-if="data.type === 'store'"
            :storeData="data.storeData"
          />
        </Window>
      </template>

      <GameplayIcon
        iconType="misc"
        iconName="map"
        title="Return to Dashboard"
        href="/"
      />
    </div>
  </GameplayContainer>
</template>

<script setup lang="ts">
import type {
  DialogueOption,
  StoreInventory,
  StoreOption,
} from "~/types/optionTypes";
import { useTheTownStore } from "../stores/theTownStore";

const optionsData = ref<(DialogueOption | StoreOption)[]>([]);

const { optionsToShow } = useTheTownStore();

onMounted(() => {
  parseOptions();
});

const parseOptions = () => {
  optionsToShow.forEach(async (option) => {
    if (option.type === "dialogue") {
      const fetchedDialogues = await loadDialogue(
        `the-town/dialogues/${option.src}`
      );

      if (fetchedDialogues)
        optionsData.value.push({
          ...(option as DialogueOption),
          ...fetchedDialogues,
          isOpen: false,
        });
    } else if (option.type === "store") {
      const storeData: StoreInventory[] | undefined = await loadStore(
        `the-town/stores/${option.src}`
      );

      if (storeData)
        optionsData.value.push({
          ...(option as StoreOption),
          storeData,
          isOpen: false,
        });
    }
  });
};

watch(optionsToShow, async () => {
  optionsData.value = [];
  parseOptions();
});
</script>

<style lang="scss">
.the-town-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>
