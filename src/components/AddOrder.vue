<template>
  <div class="add-order">
    <form v-for="data in getDatas.addOrderComponent" :key="data.id">
      <h3>{{data.title}}</h3>

      <div class="form-group">
        <label for="name">{{data.nameLabel}}</label>
        <input type="text" id="name" v-model="neworder.title" />
      </div>
      <div class="form-group">
        <label for="description">{{data.descriptionLabel}}</label>
        <textarea type="text" id="description" v-model="neworder.description"></textarea>
      </div>

      <p>
        <strong>{{data.titleBis}} 1:</strong>
      </p>
      <div class="form-group">
        <label for="size_one">{{data.sizeLabel}} ("):</label>
        <input type="text" id="size_one" v-model="neworder.parameters[0].size" />
      </div>
      <div class="form-group">
        <label for="price_one">{{data.priceLabel}}</label>
        <input type="text" id="price_one" v-model="neworder.parameters[0].price" />
      </div>

      <p>
        <strong>{{data.titleBis}} 2:</strong>
      </p>
      <div class="form-group">
        <label for="size_two">{{data.sizeLabel}} (")</label>
        <input type="text" id="size_two" v-model="neworder.parameters[1].size" />
      </div>
      <div class="form-group">
        <label for="price_two">{{data.priceLabel}}</label>
        <input type="text" id="price_two" v-model="neworder.parameters[1].price" />
      </div>

      <button type="button" @click="addFirebase">{{data.buttonText}}</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store/store'
import JsonData from "../data/data.json"
export default {
  name: "app-addorder",
  data() {
    return {
      getDatas: JsonData,
      neworder: {
        id: 0,
        title: "Pepperoni",
        description:
          "A delicious tomato based pizza topped with mozzarella and pepperonni",
        parameters: [
          {
            size: 9,
            price: 6.99
          },
          {
            size: 12,
            price: 11.99
          }
        ]
      }
    };
  },
  methods: {
    addFirebase() {
      store.dispatch('addDatasMenu', this.neworder); // dispatch addDatasMenu function menu.js module and neworder array
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
.add-order {
  margin-top: $pos_menu;
  form {
    .form-group,
    p,
    button {
      margin-top: $pos_menu;
    }

    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: $pos_menu;
      height: 50px;
      width: calc(50px * 4);
      background-color: $four_color;
      border: none;
      color: $primary_color;
    }

    strong {
      font-weight: bold;
      margin-left: 24%;
    }
  }
}
</style>