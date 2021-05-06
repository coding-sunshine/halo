require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './Router/index';
import store from './Store/index';
import App from './App.vue';
import VueHtml2Canvas from 'vue-html2canvas';
import "regenerator-runtime/runtime.js";

Vue.use(VueRouter);
Vue.use(VueHtml2Canvas);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
});
