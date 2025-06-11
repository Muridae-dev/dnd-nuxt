<template>
  <div class="dialogue-container">
    <div @click="() => updateDialogue()" v-if="!isMakingAChoice">
      <GameplayDialogueIcon
        :characterName="
          data[currentDialogue].dialogueData[currentPerson].person
        "
        :caption="data[currentDialogue].dialogueData[currentPerson].person"
      />
      <span>{{ scrollingText }}</span>
    </div>

    <div v-if="isMakingAChoice" class="choice-container">
      <GameplayDialogueIcon
        :characterName="
          data[currentDialogue].dialogueData[currentPerson].person
        "
        :caption="
          data[currentDialogue].dialogueData[currentPerson].dialogue[
            currentPhrase - 1
          ]
        "
      />
      <button
        v-for="choice in data[currentDialogue].dialogueData[currentPerson]
          .choices"
        @click="currentChoice = choice.split('#')[1]"
      >
        - {{ choice.split("#")[0] }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dialogue } from "~/types/dialogueTypes";

const props = defineProps<{ data: Dialogue[] }>();

const currentDialogue = ref(0);
const scrollingText = ref("");
const scrollingTextIndex = ref(0);
const currentPerson = ref(0);
const currentPhrase = ref(0);

const currentChoice = ref<string | false>(false);

const isMakingAChoice = ref(false);

const textSpeed = 20;

watch(currentChoice, () => {
  if (currentChoice.value) {
    currentDialogue.value = props.data.findIndex(
      (i) => i.choiceTitle === currentChoice.value
    );
    currentPerson.value = 0;
    currentPhrase.value = 0;
    isMakingAChoice.value = false;

    typeWriter();
  }
});

onMounted(() => {
  typeWriter();
});

const typeWriter = () => {
  const currentText =
    props.data[currentDialogue.value].dialogueData[currentPerson.value]
      .dialogue[currentPhrase.value];

  if (currentText)
    if (scrollingTextIndex.value < currentText.length) {
      scrollingText.value += currentText.charAt(scrollingTextIndex.value);
      scrollingTextIndex.value++;
      setTimeout(typeWriter, textSpeed);
    }
};

const updateDialogue = () => {
  currentPhrase.value++;

  // Update person
  if (
    currentPhrase.value >=
      props.data[currentDialogue.value].dialogueData[currentPerson.value]
        .dialogue.length &&
    props.data[currentDialogue.value].dialogueData[currentPerson.value + 1]
  ) {
    currentPerson.value++;
    currentPhrase.value = 0;
  }
  // If a choice needs to be made
  else if (
    currentPhrase.value ===
      props.data[currentDialogue.value].dialogueData[currentPerson.value]
        .dialogue.length &&
    !props.data[currentDialogue.value].dialogueData[currentPerson.value + 1] &&
    props.data[currentDialogue.value].dialogueData[currentPerson.value].choices
  ) {
    isMakingAChoice.value = true;
  }

  scrollingText.value = "";
  scrollingTextIndex.value = 0;
  typeWriter();
};
</script>

<style lang="scss">
.dialogue-container {
  width: 500px;
  padding: 5px 10px;
  cursor: pointer;

  span {
    user-select: none;
    pointer-events: none;
  }
}

.choice-container {
  display: flex;
  flex-direction: column;
  cursor: default;

  button {
    padding: 0 5px;
    user-select: none;
  }

  button:hover {
    background: grey;
  }
}
</style>
