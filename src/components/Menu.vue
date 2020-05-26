<template>
  <section>
    <div class="menu_page" v-for="dataPage in getDatas.menuPage" :key="dataPage.id">
      <div class="menu">
        <h2>&apid; {{dataPage.title}} &apid;</h2>

        <div v-for="data in getDatasMenu" :key="data.title">
          <div class="menu_bis">
            <h3>&apid; {{data.title}} &apid;</h3><br/>
            <p>{{data.description}}</p>
          </div>

          <div class="menu_ter" v-for="(paramater, index) in data.parameters" :key="paramater[index]">
            <p>{{paramater.size}}"</p>
            <p>{{paramater.price | currency }}</p>
            <button type="button" @click="addOrders(data, paramater)">&plus;</button>
          </div>
        </div>
      </div>

      <div class="order">
        <h2>&apid; {{dataPage.titleBis}} &apid;</h2>
        <div v-if="order.length > 0">
          <div class="order_bis" v-for="(data, index) in order" :key="index">
            <button type="button" @click="decreaseQuantity(data)">&minus;</button>
            <span> {{ data.quantity }} </span>
            <button type="button" @click="increaseQuantity(data)">&plus;</button>
            <span> {{data.title}} {{data.size}}" {{data.price * data.quantity | currency }}</span>
          </div>
          <div class="order_ter">
            <p>{{dataPage.orderTotal}} {{totalOrder | currency }}</p>
            <button type="button" @click="addNewOrder">{{dataPage.buttonText}}</button>
          </div>
        </div>
        <div v-else>
          <p class="order_text">{{orderText}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JsonData from "../data/data.json";
import { mapGetters } from "vuex";
export default {
  name: "app-menu",
  data() {
    return {
      order: [],
      orderText: 'Your order is empty',
      getDatas: JsonData
    };
  },
  computed: {
    ...mapGetters([
      'getDatasMenu'
    ]),
    totalOrder() {
      let totalCost = 0
      this.order.map(data => {
        totalCost += data.quantity * data.price
      })
      return totalCost
    }
  },
  methods: {
    async addOrders(data, paramater) {
      const pizzaNumber = await this.order.find(pizza => pizza.title === data.title && pizza.size === paramater.size)
      if(pizzaNumber) {
        return pizzaNumber.quantity++;
      }
      this.order.push({
        title: data.title,
        price: paramater.price,
        size: paramater.size,
        quantity: 1
      })
    },

    removeOrders(data) {
      this.order.splice(this.order.indexOf(data), 1);
    },
    
    decreaseQuantity(data) {
      data.quantity--;

      if(data.quantity === 0) {
        this.removeOrders(data);
      }
    },
    increaseQuantity(data) {
      data.quantity++;
    },
    addNewOrder() {
      this.order = [];
      this.orderText = "Thank you, your order has been placed"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";

.menu_page {
  display: flex;
  justify-content: space-around;
  padding: $pos_menu;

  @media (max-width: $max_width_tablet) {
    flex-direction: column;
    padding: 0 0 $pos_menu 0;
    margin-top: $pos_menu;
  }

  h2 {
    font-size: 2.3em;
    text-align: center;
  }

  .menu,
  .order {
    width: 42%;
    background-color: $secondary_color;
    color: $primary_color;
    padding: $pos_menu;

    @media (max-width: $max_width_tablet) {
      width: 90%;
      padding: $pos_menu_bis;
      display: block;
      margin-right: auto;
      margin-left: auto;
      margin-top: $pos_menu;
    }

    &_bis:nth-child(1) {
      margin-top: $pos_menu * 2;
    }

    &_bis {
      margin-top: $pos_menu_bis;

      h3 {
        font-weight: bold;
      }
    }
    &_ter {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      margin-top: $pos_menu;
    }

    .order_text {
      text-align: center;
      margin-top: 50px;
      font-size: 2.3em;
    }
  }
}
</style>