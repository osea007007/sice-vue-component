<template>
  <SiceProvider id="app" :mockData="{ isApp: false }">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      哈哈哈<SiceWebLink appHref="www.test.com1" webHref="www.test.com2"
        >123</SiceWebLink
      >呵呵呵呵呵
    </p>
    <p>
      <SiceFund fundId="0779">0779</SiceFund>
    </p>
    <p>
      <SiceFund>0779</SiceFund>
    </p>
    <p>
      <SiceLqld>SiceLqld</SiceLqld>
    </p>
    <SiceAppShow>
      <p>SiceAppShow</p>
      <p>SiceAppShow</p>

      <p>SiceAppShow</p>
    </SiceAppShow>
  </SiceProvider>
</template>

<script>
import SiceProvider from '../components/SiceProvider/SiceProvider.vue';
import SiceWebLink from '../components/SiceWebLink/SiceWebLink.vue';
import SiceFund from '../components/SiceFund/SiceFund';
import SiceLqld from '../components/SiceLqld/SiceLqld';
import SiceAppShow from '../components/SiceAppShow/SiceAppShow';

export default {
  name: 'App',
  components: {
    SiceProvider,
    SiceWebLink,
    SiceFund,
    SiceLqld,
    SiceAppShow,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
