<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { sendMessage } from '../../common/utils';
export default {
  name: 'sice-provider',
  props: {
    mockData: {
      type: Object
    },
  },
  methods: {
    setAppInfo(obj) {
      this.appInfo = obj;
    },
    sendMessageToApp(data) {
      sendMessage(data);
    },
  },
  data() {
    return {
      appInfo: this.mockData || {},
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
    if (this.mockData) {
      window.appInfo = this.mockData;
    }
    const handleMessage = (e) => {
      const { type: action, payload } = e.data || {};
      switch (action) {
        case 'RN_MSG_DATA_SEND':
          this.appInfo = payload;
          window.appInfo = payload;
          break;
        case 'UPDATE_TOKEN':
          this.appInfo = {
            ...this.appInfo,
            isLogin: Boolean(payload.token)
          };
          window.appInfo = {
            ...this.appInfo,
            isLogin: Boolean(payload.token)
          };
          break;
      }
    };
    window.document.addEventListener('message', handleMessage);
    this.sendMessageToApp({
      type: 'GET_RN_MSG_DATA',
    });
  },
};
</script>
