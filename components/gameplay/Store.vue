<template>
  <div class="store--container">
    <ItemInventoryGrid v-if="data" :items="data.filter((d) => d != null)" />
  </div>
</template>

<script setup lang="ts">
import type { StoreInventory } from "~/types/optionTypes";

const props = defineProps<{ storeData: StoreInventory[] }>();

const { data } = await useAsyncData("storeData", async () => {
  return await Promise.all(
    props.storeData.map((item) =>
      queryCollection("items").where("itemId", "=", item.itemId).first()
    )
  );
});
</script>

<style lang="scss">
.store--container {
  position: relative;
  padding: $inventory-cell-gap;
  display: flex;
}
</style>
