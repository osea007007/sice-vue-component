<template>
  <fragment>
    <slot v-if="isApp"></slot>
    <a v-else
       v-bind:href="href">
      <slot></slot>
    </a>
  </fragment>
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
