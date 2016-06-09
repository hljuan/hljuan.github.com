var vm = new Vue({
    el: '#app',
    data: {
        banner: '小柔柔的主页',
        backgroundColor: '#A8B3DB'
    }
});

var App = Vue.extend({

});

var router = new VueRouter();

router.map({
    '/cute': {
        component: {
            template: '#cute',
            attached: function () {
                vm.banner = '萌妹子';
                vm.backgroundColor = 'rgb(72, 71, 71)';
            }
        }
    },
    '/godness': {
        component: {
            template: '#godness'
        }
    },
    '/graduation': {
        component: {
            template: '#graduation'
        }
    }
});

router.start(App, '#app');