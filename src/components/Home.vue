<template>
  <section>
    <div class="app-home">
      <div class="background-home">
        <nav>
          <ul v-for="data in getDatas.homePageLink" :key="data.id">
            <router-link :to="data.routeLink" tag="li">
              <div class="router_bloc">
                <img
                  class="notActive"
                  :src="require(`@/assets/${data.imgText}.png`)"
                  :alt="data.imgText"
                />
              </div>
              <div class="router_bloc">
                <img
                  class="isActive"
                  :src="require(`@/assets/${data.imgTextActive}.png`)"
                  :alt="data.imgTextActive"
                />
              </div>
              <div class="router_bloc">{{ data.textLink }}</div>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="promo" v-for="data in getDatas.homePage" :key="data.id">
      <h2>{{data.title}}</h2>
      <div class="promo_bloc">
        <div class="promo_bloc_children">
          <img :src="require(`@/assets/${data.imgText}.png`)" :alt="data.imgText" />
        </div>
        <div class="promo_bloc_children">
          <img :src="require(`@/assets/${data.imgText_bis}.png`)" :alt="data.imgText_bis" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JsonData from "../data/data.json";
export default {
  name: "app-home",
  data() {
    return {
      getDatas: JsonData
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";
//CSS Global components (Delivary && rakeAway)
form {
  .form-group {
    margin-top: $pos_menu;
    label {
      display: block;
      margin: 0 0 $pos_menu_bis 24.2%;
    }

    input,
    select {
      padding: $pos_menu_bis;
      width: 50%;
      border: 1.4px solid $secondary_color;
      border-radius: 5px;
      outline: none;
      color: $secondary_color;
      display: block;
      margin: auto;
    }
  }
}
//CSs Just Home component
.app-home {
  .background-home {
    background-image: url("../assets/backgroundHome.png");
    height: 250px;
    width: 100%;
    background-position: left;
    nav {
      display: flex;
      justify-content: center;
      padding-top: 70px;

      ul {
        flex: 0.2 auto;
        background-color: #e5e5e5;
        color: #7d7c7c;
        font-weight: bold;

        li {
          font-size: 2.3em;
          border: 1px solid $secondary_color;
          padding: calc(70px / 3.5);
          text-align: center;
          cursor: pointer;
          @media (max-width: $max_width_tablet) {
            font-size: calc(2.3em / 2);
          }

          .router_bloc {
            display: inline-block;
            img {
              width: 55px;
              height: 55px;
              @media (max-width: $max_width_tablet) {
                width: calc(55px / 2);
                height: calc(55px / 2);
              }
            }
          }
          .router_bloc:nth-child(3) {
            vertical-align: top;
            margin-top: 15px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.promo {
  margin-top: $pos_menu;
  text-align: center;

  h2 {
    font-size: 2.3em;
    color: $secondary_color;
    @media (max-width: $max_width_tablet) {
      font-size: calc(2.3em / 2);
    }
  }

  &_bloc {
    display: flex;
    justify-content: space-around;
    padding: $pos_menu;
    @media (max-width: $max_width_tablet) {
      flex-direction: column;
    }

    &_children {
      width: calc(100% / 2.1);
      @media (max-width: $max_width_tablet) {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: $pos_menu_bis;
        width: 95%;
      }

      img {
        width: calc(100% / 2.1 * 2);
      }
    }
  }
}

.notActive {
  display: block;
}
.isActive {
  display: none;
}

.router-link-active {
  background-color: $primary_color;
  transition: all 0.5s;
  color: $four_color !important;

  .notActive {
    display: none;
  }
  .isActive {
    display: block;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}

.page-enter {
  transform: translateX(-20px);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
