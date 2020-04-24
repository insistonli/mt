<!--  -->
<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import Item from "./item";
import api from "@/api/index.js"
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序"
        },
        {
          key: "s-price",
          name: "价格最低"
        },
        {
          key: "s-sale",
          name: "人气最高"
        },
        {
          key: "s-comment",
          name: "评价最高"
        }
      ],
      productList: []
    };
  },
  created() {
    api.getProductsList().then(res => {
      this.productList = res.data.data
    })
  },
  components: {
    Item
  }
};
</script>
<style lang="scss">
/* @import url(); 引入css类 */
</style>