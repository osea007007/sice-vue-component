<template>
  <div v-if="unOpenAccount"
       v-on:click="goLogin()">
    <slot></slot>
  </div>
</template>

<script>
// 未登錄顯示組件並點擊去登錄
import { sendMessage } from '../../common/utils.js'
export default {
  name: 'jf-login-auth',
  inject: ['getAppInfo'],
  computed: {
    unOpenAccount() {
      return !this.getAppInfo().isLogin;
    },
  },
  methods: {
    goLogin() {
      sendMessage({
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
