<template>
  <fragment v-if="isApp">
    <slot></slot>
  </fragment>
  <a v-else v-bind:href="href">
    <slot></slot>
  </a>
</template>

<script>
import { Fragment } from 'vue-fragment';

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
  components: { Fragment },
};
</script>
