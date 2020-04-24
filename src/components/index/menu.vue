<!--  -->
<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="mouseenter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    };
  },
  created() {
    api.getMenuList().then(res => {
      this.menuList = res.data.data
    })
  },
  methods: {
    mouseenter(item) {
      this.curDetail = item;
    },
    mouseleave() {
      let self = this;
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/index/index.scss";
</style>
