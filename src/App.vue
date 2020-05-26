<template>
  <SiceProvider id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      <SiceLink appHref="www.test.com1" webHref="www.test.com2">123</SiceLink>
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
  </SiceProvider>
</template>

<script>
import SiceProvider from '../components/SiceProvider/SiceProvider.vue';
import SiceLink from '../components/SiceLink/SiceLink.vue';
import SiceFund from '../components/SiceFund/SiceFund';
import SiceLqld from '../components/SiceLqld/SiceLqld';

export default {
  name: 'App',
  components: {
    SiceProvider,
    SiceLink,
    SiceFund,
    SiceLqld,
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
