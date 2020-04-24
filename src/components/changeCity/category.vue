<!--  -->
<template>
  <div class="category">
    <dl class="m-category">
      <dt>按首字母选择</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl
      v-for="(item,index) in cityGroup"
      :key="index"
      class="m-category-section"
      :id="'city-' + index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {}
    };
  },
  created() {
    api.getCityList().then(res => {
      let obj = {};
      //将请求的数据进行排序处理
      res.data.data.sort((a, b) => {
        return a.firstChar.localeCompare(b.firstChar);
      });
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  methods: {
    changeCity(item) {
      console.log("item=====", item);
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/changecity/category.scss";
</style>
