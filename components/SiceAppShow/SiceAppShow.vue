<template>
  <fragment>
    <slot v-if="isApp"></slot>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'sice-app-show',
  inject: ['getAppInfo'],
  computed: {
    isApp() {
      return this.getAppInfo().isApp;
    },
  },
  components: { Fragment },
};
</script>

<style></style>
