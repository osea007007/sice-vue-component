<template>
  <div v-if="unOpenAccount"
       v-on:click="goLogin()">
    <slot></slot>
  </div>
</template>

<script>
// 未登錄顯示組件並點擊去登錄
export default {
  name: 'jf-login-auth',
  inject: ['getAppInfo', 'sendMessageToApp'],
  computed: {
    unOpenAccount() {
      return !this.getAppInfo().isLogin;
    },
  },
  methods: {
    goLogin() {
      this.sendMessageToApp({
        type: 'NAVIGATE',
        payload: {
          path: 'Login',
        }
      })
    }
  },
};
</script>

<style scoped></style>
