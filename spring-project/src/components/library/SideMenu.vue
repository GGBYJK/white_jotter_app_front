<template>
  <el-menu
      class="categories"
      default-active="0"
      @select="handleSelect"
      active-text-color="red">
    <el-menu-item index="0">
      <el-icon><Menu /></el-icon>
      <template #title>全部</template>
    </el-menu-item>
    <el-menu-item index="1">
      <el-icon><Menu /></el-icon>
      <template #title>文学</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Menu /></el-icon>
      <template #title>流行</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Menu /></el-icon>
      <template #title>文化</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Menu /></el-icon>
      <template #title>生活</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Menu /></el-icon>
      <template #title>经管</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><Menu /></el-icon>
      <template #title>科技</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {Menu} from '@element-plus/icons'
export default {
  name: 'SideMenu',
  components: {
    Menu
  },
  data () {
    return {
      cid: ''
    }
  },
  methods: {
    handleSelect (key) {
      this.cid = key
      this.$emit('indexSelect')
    }
  }
}
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -600px;
  top: 100px;
  width: 150px;
}
</style>