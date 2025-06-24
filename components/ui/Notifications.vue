<template>
  <div
    :class="[
      'notification--container',
      { active: isActive },
      notificationStore.type,
    ]"
  >
    {{ notificationStore.message }}
  </div>
</template>

<script setup lang="ts">
const notificationStore = useNotificationStore();

const isActive = ref(false);
const timeoutId = ref<ReturnType<typeof setTimeout> | null>(null);

watch(
  () => notificationStore.id,
  () => {
    const { message, timeout } = notificationStore;

    if (message && timeout) {
      isActive.value = true;

      if (timeoutId.value) clearTimeout(timeoutId.value);

      timeoutId.value = setTimeout(() => {
        notificationStore.clearNotification();
        isActive.value = false;
        timeoutId.value = null;
      }, timeout as number);
    }
  },
  { immediate: true, flush: "post" }
);
</script>

<style lang="scss">
.notification--container {
  display: none;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  font-weight: bold;
  text-align: center;

  z-index: 9999;
  border-radius: $border-radius-size;

  position: fixed;
  top: 50%;
  left: 50%;

  height: 100px;
  width: 300px;

  border: 1px solid;
  background: $window-background;

  &.active {
    display: flex;
  }

  &.error {
    border-color: #ef4444;
  }

  &.message {
    // border-color: #3b82f6;
    border-color: black;
  }

  &.help {
    border-color: #8b5cf6;
  }
}
</style>
