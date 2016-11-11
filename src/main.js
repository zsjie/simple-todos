import Vue from 'vue';
import insertSvg from './components/insertSvg';
import App from './App.vue';

// insert svg sprite
insertSvg()

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
