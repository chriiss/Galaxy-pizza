<template>
  <div class="app-delivary">
    <form @submit.prevent="checkForm" v-for="data in getDatas.homePageComponents" :key="data.id">
      <div class="form-group">
        <label for="postalcode">{{data.labelTextDelivary}}</label>
        <input
          type="text"
          id="postalcode"
          v-bind:class="{
            'is-invalid': $v.postalcode.$error,
            'is-valid': !$v.postalcode.$invalid,
          }"
          v-model.number="postalcode"
          :placeholder="data.placeholderText"
        />
      </div>
      <div class="form-group">
        <label for="street">{{data.labelTextDelivary_bis}}</label>
        <input
          type="text"
          id="street"
          v-bind:class="{
            'is-invalid': $v.street.$error,
            'is-valid': !$v.street.$invalid,
          }"
          v-model="street"
          :placeholder="data.placeholderText_bis"
        />
      </div>
      <div class="form-group">
        <label for="numberstreet">{{data.labelTextDelivary_ter}}</label>
        <input
          type="number"
          id="numberstreet"
          min="0"
          v-bind:class="{
            'is-invalid': $v.numberstreet.$error,
            'is-valid': !$v.numberstreet.$invalid,
          }"
          v-model.number="numberstreet"
          :placeholder="data.placeholderText_ter"
        />
      </div>
      <button type="submit" v-bind:class="{ invalid: $v.$invalid }">{{data.buttonText}}</button>
    </form>
  </div>
</template>

<script>
import JsonData from "../data/data.json";
import { required, numeric, alpha } from "vuelidate/lib/validators";
export default {
  name: "app-delivary",
  data() {
    return {
      getDatas: JsonData,
      postalcode: null,
      street: null,
      numberstreet: null
    };
  },
  validations: {
    postalcode: { required, numeric },
    street: { required, alpha },
    numberstreet: { required, numeric }
  },
  methods: {
    checkForm() {
      if (this.$v.$invalid) {
        alert("Champs incorect rentrer les conditions dans les champs designé");
      } else {
        window.open("menu");
        window.close("home");
      }
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
.app-delivary {
  padding-top: $pos_menu;
  padding-bottom: $pos_menu;

  form {
    label {
      @media (max-width: $max_width_tablet) {
        margin: 0 0 $pos_menu_bis 23.2%;
      }
    }

    .invalid {
      opacity: 0.4;
      cursor: not-allowed;
    }

    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: $pos_menu;
      background-color: $third_color;
      border: none;
      height: 50px;
      width: calc(50px * 4);
      color: $primary_color;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
