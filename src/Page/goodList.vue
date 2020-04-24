<!--  -->
<template>
  <div class="page-product">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <list />
        </el-row>        
      </el-col>
      <el-col :span="5">
        map + fav
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from "@/components/product/crumbs.vue"
import category from "@/components/product/category.vue"
import list from "@/components/product/list.vue"
export default {
  data() {
    return {};
  },
  components: {
    crumbs,
    category,
    list
  }
};
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>