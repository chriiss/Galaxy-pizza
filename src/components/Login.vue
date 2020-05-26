<template>
  <div class="app-login">
    <form v-for="data in getDatas.loginPage" :key="data.id">
      <p>{{data.loginText}}</p>
      <div class="form-group">
        <label for="email">{{data.emailLabel}}</label>
        <input type="email" id="email" v-model="email" :placeholder="data.emailPlaceholder" />
      </div>
      <div class="form-group">
        <label for="password">{{data.passwordLabel}}</label>
        <input type="password" id="password" v-model="password" :placeholder="data.passwordPlaceholder" />
      </div>
      <button type="button" @click.prevent="signIn">{{data.buttonText}}</button>
    </form>
  </div>
</template>


<script>
import { store } from '../store/store'
import JsonData from '../data/data.json'
export default {
  name: "app-login",
  data() {
    return {
      getDatas: JsonData,
      email: "",
      password: ""
    }
  },
  methods: {
    signIn() {
      const user = {
        email: this.email,
        password: this.password
      }
      store.dispatch('signIn', user) //store dispatch signIn function and user paramater module users.js 
    }
  }

};
</script>

<style lang="scss">
@import "../styles/variables.scss";
.app-login {
  form {
    .form-group,
    p,
    button {
      margin-top: $pos_menu;
      margin-bottom: $pos_menu * 4.25;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    p {
      text-align: center;
    }

    button {
      background-color: $third_color;
      color: $primary_color;
      border: none;
      width: calc(50px * 4);
      height: 50px;
    }

    strong {
      font-weight: bold;
    }
  }
}
</style>