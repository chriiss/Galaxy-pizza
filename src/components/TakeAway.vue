<template>
  <div class="app-takeaway">
    <form v-for="data in getDatas.homePageComponents" :key="data.id">
      <div class="form-group">
        <label for="city">{{data.labelTextTakeAway}}</label>
        <select @change="selectCity">
          <option value="" disabled selected>{{data.selectTextTakeAway}}</option>
          <option v-for="city in getCityDatas" :key="city.id">{{city.city}}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import JsonData from '../data/data.json'
import cityData from "../data/fr.json"
export default {
  name: "app-takeaway",
  data() {
    return {
      getDatas: JsonData,
      getCityDatas: cityData
    }
  },
  methods: {
    selectCity() {
      window.open("menu");
      window.close("home");
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
.app-takeaway {
  select {
    background: none;
    font-weight: bold;
    width: 51.5% !important;
    option {
      background-color: $secondary_color;
      color: $primary_color;
      font-size: calc(2.3em / 1.7);
    }
  }
}
</style>
