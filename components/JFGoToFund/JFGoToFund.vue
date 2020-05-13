<template>
  <div v-on:click="goFundPage()">
    <slot></slot>
  </div>
</template>

<script>
// 未登錄顯示組件並點擊去登錄
export default {
  name: 'jf-go-to-fund',
  inject: ['sendMessageToApp'],
  props: {
    fundId: {
      type: String,
    },
    activity: {
      type: Boolean
    }
  },
  methods: {
    goFundPage() {
      if (this.activity) {
        return this.sendMessageToApp({
          type: 'OPEN_FUND_ACTIVITY',
        })
      } else if (this.fundId) {
        this.sendMessageToApp({
          type: 'OPEN_FUND_DATEIL',
          payload: {
            fundId: this.fundId
          }
        })
      } else {
        return this.sendMessageToApp({
          type: 'OPEN_FUND_LIST',
        })
      }
    }
  },
};
</script>

<style scoped></style>
