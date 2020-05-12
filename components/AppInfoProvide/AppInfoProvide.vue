<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'jf-app-info-provide',
  methods: {
    setAppInfo(obj) {
      this.appInfo = obj;
    },
    sendMessageToApp(data) {
      //   if (process.env.NODE_ENV !== 'production') {
      //     // eslint-disable-next-line no-console
      //     console.log(JSON.stringify(data))
      //   }
      window.ReactNativeWebView &&
        window.ReactNativeWebView.postMessage(JSON.stringify(data));
    },
  },
  data() {
    return {
      appInfo: {},
      appInfo1: {},
    };
  },
  provide() {
    return {
      appInfo: this.appInfo,
      getAppInfo: () => {
        return this.appInfo;
      },
      setAppInfo: (obj) => {
        return this.setAppInfo(obj);
      },
      clearAppInfo: () => {
        return this.setAppInfo({});
      },
      sendMessageToApp: (data) => {
        return this.sendMessageToApp(data);
      },
    };
  },
  created() {
    const handleMessage = (e) => {
      const { type: action, payload } = e.data || {};
      if (action === 'RN_MSG_DATA_SEND') {
        this.appInfo = payload;
      }
    };
    window.document.addEventListener('message', handleMessage);
    this.sendMessageToApp({
      type: 'GET_RN_MSG_DATA',
    });
  },
};
</script>
<style lang="scss" scoped>
#app {
  border: 1px solid #000;
  padding: 20px;
}
</style>
