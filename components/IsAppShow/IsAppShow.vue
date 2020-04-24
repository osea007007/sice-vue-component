<template>
  <div v-if="isApp">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IsAppShow',
  inject: ['getAppInfo'],
  computed: {
    isApp() {
      return this.getAppInfo().isApp;
    },
  },
};
</script>

<style scoped></style>
