import AppInfoProvide from './AppInfoProvide/index'
import IsAppShow from './IsAppShow/index'
import WebLink from './WebLink/index'
import IsWebShow from './IsWebShow/index'
import JFToggleLink from './JFToggleLink/index'
import JFLoginAuth from './JFLoginAuth/index'
import JFLoginShow from './JFLoginShow/index'



const components = {
    AppInfoProvide,
    IsAppShow,
    WebLink,
    IsWebShow,
    JFToggleLink,
    JFLoginAuth,
    JFLoginShow
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