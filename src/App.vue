<template>
  <SiceProvider id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SiceLink appHref="www.test.com1" webHref="www.test.com2">123</SiceLink>
  </SiceProvider>
</template>

<script>
import SiceProvider from '../components/SiceProvider/SiceProvider.vue';
import SiceLink from '../components/SiceLink/SiceLink.vue';

export default {
  name: 'App',
  components: {
    SiceProvider,
    SiceLink,
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
