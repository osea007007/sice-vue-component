<template>
  <a v-if="unOpenAccount"
     :href="`twsice://login`">
    <slot></slot>
  </a>
</template>

<script>
// 未登錄顯示組件並點擊去登錄
export default {
  name: 'sice-login-action',
  inject: ['getAppInfo', 'sendMessageToApp'],
  computed: {
    unOpenAccount() {
      return !this.getAppInfo().isLogin;
    },
  },
};
</script>

<style></style>
