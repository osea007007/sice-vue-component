<template>
  <div v-if="isApp">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sice-app-show',
  inject: ['getAppInfo'],
  computed: {
    isApp() {
      return this.getAppInfo().isApp;
    },
  },
};
</script>

<style></style>
