<template>
  <component
    :is="href ? defineNuxtLink({}) : 'button'"
    @click="onClick"
    :to="href && href"
  >
    <figure class="icon--container">
      <img
        :src="`/placeholders/${iconType}/${iconName}.webp`"
        class="image-contrast"
      />
      <figcaption>
        {{ title }}
      </figcaption>
    </figure>
  </component>
</template>

<script setup lang="ts">
interface IconProps {
  iconType: "items" | "misc" | "npcs";
  iconName: string;
  title: string;
  onClick?: () => void;
  href?: string;
}

defineProps<IconProps>();
</script>

<style lang="scss">
.icon--container {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 130px;
  text-align: center;
  padding: 5px 5px 0px 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  figure {
    display: flex;
  }

  img {
    width: 80px;
    aspect-ratio: 1/1;
  }
}
</style>
