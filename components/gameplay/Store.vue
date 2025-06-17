<template>
  <pre>{{ storeData }}</pre>
</template>

<script setup lang="ts">
import type { StoreInventory } from "~/types/optionTypes";

const props = defineProps<{ storeData: StoreInventory[] }>();
</script>
