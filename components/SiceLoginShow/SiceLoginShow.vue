<template>
  <fragment v-if="isLogin">
    <slot></slot>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

// 登錄顯示組件
export default {
  name: 'sice-login-show',
  inject: ['getAppInfo'],
  computed: {
    isLogin() {
      return this.getAppInfo().isLogin;
    },
  },
  components: { Fragment },
};
</script>

<style></style>
