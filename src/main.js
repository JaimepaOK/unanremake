import { createApp } from 'vue'

import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router' 

import Vuex from './VueVuex';
import { routes } from './VueRouter';
import AppComponent from './App.vue'

const store = createStore(Vuex);
const router = createRouter({history: createWebHistory(),routes});
const app = createApp(AppComponent)
app.use(router);
app.use(store);
app.mount('#app')  


