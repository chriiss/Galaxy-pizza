<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { dbRef } from "./Firebase"

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },

  created() {
    this.$store.dispatch('setMenuRef', dbRef) // dispatch  setMenuRef module menu.js and dbRef import
  }
}
</script>

<style lang="scss">
@import "./styles/Reset.scss";
</style>
