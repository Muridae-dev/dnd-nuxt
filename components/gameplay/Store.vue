<template>
  <div class="store--container">
    <div class="store--grid">
      <button
        v-if="data"
        v-for="item in data.filter((d) => d != null)"
        class="store--item"
        @click="inventoryStore.buyItem(item)"
      >
        <div class="store--item-image">
          <ItemThumbnail :item="item" />
        </div>
        <div class="store--item-info">
          <span>{{ item.name }}</span>
          <span>Price: {{ item.value }}g</span>
        </div>
        <ItemSpecs :item="item" />
      </button>
    </div>
    <CharacterMoney :gold="inventoryStore.gold" />
  </div>
</template>

<script setup lang="ts">
import type { StoreInventory } from "~/types/optionTypes";

const props = defineProps<{ storeData: StoreInventory[] }>();

const inventoryStore = useInventoryStore();

const { data } = await useAsyncData("storeData", async () => {
  return await Promise.all(
    props.storeData.map((item) =>
      queryCollection("items").where("itemId", "=", item.itemId).first()
    )
  );
});
</script>

<style lang="scss">
.store--grid {
  position: relative;
  padding: $inventory-cell-gap;

  display: grid;
  grid-template-rows: repeat(5, 70px);
  grid-template-columns: repeat(2, 250px);
  gap: $inventory-cell-gap;
}

.store--item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  border: 1px solid black;
  background: $item-cell-background;
}

.store--item-image {
  height: 100%;

  img {
    height: 100%;
  }
}

.store--item-info {
  display: flex;
  flex-direction: column;
}
</style>
