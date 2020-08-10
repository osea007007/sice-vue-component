import SiceProvider from './SiceProvider/index'
import SiceWebShow from './SiceWebShow/index'
import SiceAppShow from './SiceAppShow/index'
import SiceFund from './SiceFund/index'
import SiceLoginAction from './SiceLoginAction/index'
import SiceLoginShow from './SiceLoginShow/index'
import SiceLink from './SiceLink/index'
import SiceWebLink from './SiceWebLink/index'
import SiceLqld from './SiceLqld/index'
import SiceLogin from '../directives/SiceLogin/SiceLogin'
import SiceFundList from '../directives/SiceFundList/SiceFundList'
import SiceLoginHide from './SiceLoginHide/index'


const components = {
    SiceProvider,
    SiceWebShow,
    SiceAppShow,
    SiceFund,
    SiceLoginAction,
    SiceLoginShow,
    SiceLink,
    SiceWebLink,
    SiceLqld,
    SiceLoginHide
}

function install(Vue) {
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...SiceLogin,
    ...SiceFundList,
}