<template>
  <div class="gameplay-container" v-if="data">
    <h2>{{ data?.meta.title }}</h2>
    <article>{{ data?.meta.description }}</article>
    <div class="class-stats" v-for="stat in Object.entries(data?.meta.stats)">
      <span>{{ stat[0] }}:</span><span>{{ stat[1] }}</span>
    </div>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "nuxt/app";

const { data } = await useAsyncData("characterData", () =>
  queryCollection("classes").first()
);
</script>

<style lang="scss">
.gameplay-container {
  height: calc(100vh - $header-height - $side-spacing * 3);
  width: calc(100% - $side-spacing * 2);
  border-radius: 5px;

  padding: $side-spacing;

  position: relative;
  margin: $side-spacing auto 0;

  background: white;
  border: 1px solid black;
}

.class-stats {
  display: flex;
  gap: 10px;

  text-transform: capitalize;
}
</style>
