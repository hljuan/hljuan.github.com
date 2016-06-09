var vm = new Vue({
    el: '#app',
    data: {
        banner: '小柔柔的主页',
        backgroundColor: '#fff',
        begin : new Date('2012/09/13 00:00:00').getTime(),
        yy: '',
        MM: '',
        dd: '',
        hh: '',
        mm: '',
        ss:''
    }
});


var toDoubleDigit = function (number) {
    number = number.toString();
    return number.length == 1 ? "0" + number : number;
};

var tik = function () {
    var today = new Date().getTime();
    var period = today - vm.begin;

    var time = new Date(period);

    vm.yy = toDoubleDigit(time.getFullYear()-1970);
    vm.MM = toDoubleDigit(time.getMonth() + 1);
    vm.dd = toDoubleDigit(time.getDate());
    vm.hh = toDoubleDigit(time.getHours());
    vm.mm = toDoubleDigit(time.getMinutes());
    vm.ss = toDoubleDigit(time.getSeconds());
    setTimeout('tik()', 1000);
};

tik();

var App = Vue.extend({

});

var router = new VueRouter();


router.map({
    '/cute': {
        component: {
            template: '#cute',
            attached: function () {
                $('#time').css('display', 'none');
                vm.banner = '萌妹纸';
                vm.backgroundColor = 'rgb(72, 71, 71)';
            }
        }
    },
    '/godness': {
        component: {
            template: '#godness'
        }
    },
    '/time': {
        component: {
            template: '',
            attached: function () {
                vm.banner = '流年';
                vm.backgroundColor = '#A8B3DB';
                $('#time').css('display', 'block');
            }
        }
    }
});

router.start(App, '#app');