<template>
  <a :href="isApp?appHref:webHref">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'jf-toggle-link',
  inject: ['getAppInfo'],
  props: {
    webHref: {
      type: String,
    },
    appHref: {
      type: String,
    }
  },
  computed: {
    isApp() {
      return this.getAppInfo().isApp;
    },
  },
};
</script>
