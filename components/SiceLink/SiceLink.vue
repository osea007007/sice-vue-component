<template>
  <a v-bind="$attrs"
     :href="isApp ? appHref : webHref">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'sice-link',
  inject: ['getAppInfo'],
  props: {
    webHref: {
      type: String,
    },
    appHref: {
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
