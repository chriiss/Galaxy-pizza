<template>
  <header>
    <div class="header_logo" v-for="data in getDatas.headerComponent" :key="data.id"> 
      <router-link :to="{name: 'homeLink'}">
        <img :src="require(`@/assets/${data.imgText}.gif`)" :alt="data.imgText" />
      </router-link>
    </div>
  </header>
</template>

<script>
import JsonData from "../data/data.json";
export default {
  name: "app-header",
  data() {
    return {
      getDatas: JsonData
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";
.header_logo {
  img {
   width: 125px;
   height: 125px;
  }
}
</style>