<template>
  <div class="inventory-container">
    <button @click="addRandomItem">ADD RANDOM ITEM</button>

    <div v-for="item in inventoryStore.inventory" :key="item.id" class="item">
      <h2>{{ item.name }}</h2>

      <div v-if="item.stats">
        <h3>Stats:</h3>
        <ul>
          <li v-for="(value, statKey) in item.stats" :key="statKey">
            {{ formatKey(statKey) }}: {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inventoryStore = useInventoryStore();

const { data } = await useAsyncData("itemData", () =>
  queryCollection("items").all()
);

const addRandomItem = () => {
  const randomItem = data.value[Math.floor(Math.random() * data.value.length)];

  inventoryStore.addItem(randomItem);
};

const formatKey = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^[a-z]/, (match) => match.toUpperCase());
};
</script>

<style lang="scss">
.inventory-container {
  width: 500px;
}
</style>
