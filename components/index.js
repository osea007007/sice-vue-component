import Compontent1 from './Component1/index'
import Compontent2 from './Component2/index'




const components = {
    Compontent1,
    Compontent2,
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
    Compontent1,
    Compontent2,
}