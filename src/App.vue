<template>
  <AppInfoProvide id="app">
    <img alt="Vue logo"
         src="./assets/logo.png" />
    <JFToggleLink appHref="www.baidu.com1"
                  webHref="www.baidu.com2">123</JFToggleLink>
  </AppInfoProvide>
</template>

<script>
import AppInfoProvide from '../components/AppInfoProvide/AppInfoProvide.vue';
import JFToggleLink from '../components/JFToggleLink/JFToggleLink.vue';

export default {
  name: 'App',
  components: {
    AppInfoProvide,
    JFToggleLink,
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
