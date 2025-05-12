<template>
  <div class="stats-container" v-if="data">
    <h2>{{ data?.name }}</h2>
    <article>
      <ContentRenderer v-if="data.meta.body" :value="data.meta.body" />
    </article>
    <div class="class-stats" v-for="stat in Object.entries(data?.stats)">
      <span>{{ stat[0] }}:</span><span>{{ stat[1] }}</span>
    </div>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "nuxt/app";
import type { Stats } from "~/types/characterTypes";
import type { MinimalBody } from "~/types/mdTypes";

interface CharacterData {
  name: string;
  stats: Stats;
  meta: {
    body?: MinimalBody;
  };
}

const { data } = await useAsyncData<CharacterData | null>("characterData", () =>
  queryCollection("classes").first()
);
</script>

<style lang="scss">
.stats-container {
  padding: 5px;
  overflow-y: auto;
  height: 100%;
}

.class-stats {
  display: flex;
  gap: 10px;

  text-transform: capitalize;
}
</style>
