import AppInfoProvide from './AppInfoProvide/index'
import IsAppShow from './IsAppShow/index'
import WebLink from './WebLink/index'

const components = {
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