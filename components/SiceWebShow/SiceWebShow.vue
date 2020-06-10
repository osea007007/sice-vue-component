<template>
  <div v-if="!isApp">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sice-web-show',
  inject: ['getAppInfo'],
  computed: {
    isApp() {
      return this.getAppInfo().isApp;
    },
  },
};
</script>

<style></style>
