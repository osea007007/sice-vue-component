
function install(Vue) {
    Vue.directive('app-login', {
        bind(el) {
            function myAddEvent(obj, ev, fn) {
                if (obj.attachEvent) {
                    obj.attachEvent('on' + ev, fn);
                } else {
                    obj.addEventListener(ev, fn, false);
                }
            }
            myAddEvent(el, 'click', function () {
                if (window.appInfo.isApp) {
                    window.location.href = 'twsice://login';
                }
            });
        },
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    inject: ['getAppInfo'],
    props: {
        href: {
            type: String,
        },
    },
    computed: {
        isApp() {
            return this.getAppInfo().isApp;
        },
    },
}