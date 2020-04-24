import Compontent1 from './Component1/index'
import Compontent2 from './Component2/index'
import AppInfoProvide from './AppInfoProvide/index'
import IsAppShow from './IsAppShow/index'
import WebLink from './WebLink/index'

const components = {
    Compontent1,
    Compontent2,
    AppInfoProvide,
    IsAppShow,
    WebLink
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