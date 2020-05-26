<template>
  <div v-if="isLogin">
    <slot></slot>
  </div>
</template>

<script>
// 登錄顯示組件
export default {
  name: 'sice-login-show',
  inject: ['getAppInfo'],
  computed: {
    isLogin() {
      return this.getAppInfo().isLogin;
    },
  },
};
</script>

<style scoped></style>
