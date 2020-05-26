<template>
  <div class="admin">
    <section v-if="currentUser !== null">
      <div v-for="data in getDatas.adminPage" :key="data.id">
        <div class="admin_user">
          <span>{{data.loggedLabel}}</span>
          {{currentUser}}
          <button
            type="button"
            @click.prevent="signOut"
          >{{data.buttonText}}</button>
        </div>
        <app-addorder></app-addorder>
        <div class="admin_menu">
          <h3>{{data.title}}</h3>
          <div class="admin_menu_title">
            <h4>{{data.titleSecond}}</h4>
            <h4>{{data.titleSecondBis}}</h4>
          </div>
          <div class="admin_menu_bis" v-for="data in getDatasMenu" :key="data.id">
            <p>{{data.title}}</p>
            <button type="button" @click="removeDatasMenu(data.id)">&#10006;</button>
          </div>
        </div>
      </div>
    </section>
    <app-login v-if="currentUser == null"></app-login>
  </div>
</template>

<script>
import JsonData from "../data/data.json";
import AddOrder from "./AddOrder.vue";
import Login from "./Login.vue";
import { store } from "../store/store";
import { mapGetters } from "vuex";

export default {
  name: "app-admin",
  components: {
    "app-addorder": AddOrder,
    "app-login": Login
  },
  data() {
    return {
      getDatas: JsonData,
      name: "Chris"
    };
  },
  computed: {
    ...mapGetters([
      "getDatasMenu",
      "numberOfOrders",
      "currentUser",
      "getOrders"
    ])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      alert(`Hi, ${vm.name}`);
    });
  },
  methods: {
    signOut() {
      store.dispatch("signOut"); //dispatch signOut actions signOut function module users.js
    },
    removeDatasMenu(id) {
      store.dispatch("removeDatasMenu", id); //dispatch remove actions removeDatasMenu function module menu.js
    }
  },
  beforeRouteLeave(to, from, next) {
    // when changing routes the automatic signOut is activated.
    if (confirm("You will be logged out when leaving admin?") === true) {
      store.dispatch("signOut");
    } else {
      next(false);
    }
  }
};
</script>


<style lang="scss">
@import "../styles/variables.scss";
.admin {
  margin: $pos_menu;
  label {
    display: block;
    margin: 0 0 $pos_menu_bis 0;
  }

  input,
  textarea {
    padding: $pos_menu_bis;
    border: 1.4px solid $secondary_color;
    border-radius: 5px;
    outline: none;
    color: $secondary_color;
  }
  input {
    width: 75%;
  }
  textarea {
    display: block;
    margin: auto;
    width: 50%;
  }
  button {
    width: 100px;
    height: calc(100px / 4);
  }
  h3 {
    font-weight: bold;
  }
  &_user {
    button {
      background-color: $third_color;
      color: $primary_color;
      border: none;
    }
  }
  &_menu {
    padding: $pos_menu;

    &_title {
      display: flex;
      font-weight: bold;
      margin-top: $pos_menu;
      h4 {
        flex: 0.5 auto;
      }
      h4:nth-child(2) {
        margin-left: 75px;
      }
    }
    &_bis {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      margin-top: $pos_menu;
    }
  }
}
</style>