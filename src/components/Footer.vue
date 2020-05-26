<template>
<footer>
<div class="app-footer" v-for="data in getDatas.footerComponent" :key="data.id">
    <p>{{data.footerText}}</p>
</div>
</footer>
</template>

<script>
import JsonData from "../data/data.json";
export default{
    name: "app-footer",
    data() {
        return {
            getDatas: JsonData
        }
    }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";
footer {
    .app-footer {
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: $secondary_color;
        padding: 51px 0px 51px 0px;
        p {
            color: $primary_color;
            text-align: center;
        }
    }
}
</style>