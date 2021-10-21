import { createApp } from 'vue'

import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import Vuex from './VueVuex';
import { routes } from './VueRouter';
import AppComponent from './App.vue'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

const store = createStore(Vuex);
const router = createRouter({history: createWebHistory(),routes});
const app = createApp(AppComponent)
app.use(router);
app.use(store);

app.use(VuesticPlugin);
app.mount('#app')  


