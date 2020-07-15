<template>
  <SiceProvider id="app"
                :mockData="{ isApp: true, isLogin: true }">
    <img alt="Vue logo"
         src="./assets/logo.png" />
    <p>
      哈哈哈<SiceWebLink appHref="www.test.com1"
                   webHref="www.test.com2">123</SiceWebLink>呵呵呵呵呵
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
    <SiceLoginAction>
      <div>點擊</div>
    </SiceLoginAction>
    <SiceLoginHide>SiceLoginHide</SiceLoginHide>
    <SiceLoginShow>SiceLoginShow</SiceLoginShow>

    <p v-app-login="{isApp: true, isLogin: true}">點擊login</p>
  </SiceProvider>
</template>

<script>
import SiceProvider from '../components/SiceProvider/SiceProvider';
import SiceWebLink from '../components/SiceWebLink/SiceWebLink';
import SiceFund from '../components/SiceFund/SiceFund';
import SiceLqld from '../components/SiceLqld/SiceLqld';
import SiceAppShow from '../components/SiceAppShow/SiceAppShow';
import SiceLoginAction from '../components/SiceLoginAction/SiceLoginAction';
import SiceLoginHide from '../components/SiceLoginHide/SiceLoginHide'
import SiceLoginShow from '../components/SiceLoginShow/SiceLoginShow';



export default {
  name: 'App',
  components: {
    SiceProvider,
    SiceWebLink,
    SiceFund,
    SiceLqld,
    SiceAppShow,
    SiceLoginAction,
    SiceLoginHide,
    SiceLoginShow
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
