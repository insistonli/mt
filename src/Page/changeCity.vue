<template>
  <div class="page-changeCity">
    <!-- 切换城市 -->
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市" :list="cityList" />
    </el-row>
    <el-row>
      <hot title="最近访问" :list="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>
<script>
import province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hot";
import category from "@/components/changeCity/category"
import api from "@/api/index.js"
export default {
  data() {
    return {
      cityList: [],
      rencentList: []
    };
  },
  created () {
    api.getHotCity().then(res => {
      this.cityList = res.data.data.map((item) => item.name)
    })
    api.getRencentCity().then(res => {
      this.rencentList = res.data.data.map((item) => item.name)
    })
  },
  components: {
    province,
    hot,
    category
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>