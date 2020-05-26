<template>
  <span v-if="isApp">
    <slot></slot>
  </span>
  <a v-else v-bind:href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'sice-web-link',
  inject: ['getAppInfo'],
  props: {
    href: {
      type: String,
    },
  },
  computed: {
    isApp() {
      return this.getAppInfo().isApp;
    },
  },
};
</script>
