import SiceProvider from './SiceProvider/index'
import SiceWebShow from './SiceWebShow/index'
import SiceAppShow from './SiceAppShow/index'
import SiceFund from './SiceFund/index'
import SiceLoginAction from './SiceLoginAction/index'
import SiceLoginShow from './SiceLoginShow/index'
import SiceLink from './SiceLink/index'
import SiceWebLink from './SiceWebLink/index'

const components = {
    SiceProvider,
    SiceWebShow,
    SiceAppShow,
    SiceFund,
    SiceLoginAction,
    SiceLoginShow,
    SiceLink,
    SiceWebLink,
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
}