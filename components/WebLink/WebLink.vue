<template>
  <div v-if="isApp">
    <slot></slot>
  </div>
  <a v-else v-bind:href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'WebLink',
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
