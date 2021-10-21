<template>
  <va-navbar class="mb-2">
    <template #left>
      <va-navbar-item>LOGO HERE</va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item>Default color (secondary)</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <router-link to="/">Home</router-link>
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="/about">About</router-link>
      </va-navbar-item>
    </template>
  </va-navbar>

  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">Home</router-link>
  <router-link to="/about">about</router-link>
  <router-view />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { VaNavbar, VaNavbarItem } from "vuestic-ui";
export default {
  name: "App",
  components: {
    HelloWorld,
    VaNavbar,
    VaNavbarItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
