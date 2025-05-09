<template>
  <div class="stats-container" v-if="data">
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
.stats-container {
  padding: 5px;
}

.class-stats {
  display: flex;
  gap: 10px;

  text-transform: capitalize;
}
</style>
