<template>
  <figure class="dialogue-icon--container">
    <img
      :src="`/placeholders/${getCharacterImage(characterName)}.webp`"
      class="image-contrast"
    />
    <figcaption>
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
interface DialogueIconProps {
  characterName: string;
  caption: string;
}

defineProps<DialogueIconProps>();
</script>

<style lang="scss">
.dialogue-icon--container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;

  user-select: none;
  pointer-events: none;

  img {
    height: 64px;
    aspect-ratio: 1/1;
  }

  figcaption {
    line-height: 1.1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    user-select: none;
  }
}
</style>
