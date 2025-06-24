<template>
  <div class="money--container">
    {{ gold }} <img src="/public/icons/money-gold.gif" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ gold: number }>();
</script>

<style lang="scss">
.money--container {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px 10px;
  line-height: 1.3;
  gap: 5px;

  img {
    height: 15px;
    aspect-ratio: 1/1;
    overflow: visible;
  }
}
</style>
