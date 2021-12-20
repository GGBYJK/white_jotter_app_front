<template>
  <div style="margin-bottom: 30px;display: flex;justify-content: center;align-items: center">
    <el-input
        @change="searchClick"
        placeholder="通过书名或作者搜索..."
        size="small"
        style="width: 400px;margin-right: 10px"
        v-model="keywords">
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
  </div>
</template>

<script>
import {Search} from "@element-plus/icons";
export default {
  name: "SearchBar",
  components: {
    Search
  },
  data () {
    return {
      keywords: '',
      books: [],
      cardLoading: []
    }
  },
  methods: {
    searchClick () {
      this.$emit('onSearch')
    }
  }
}
</script>

<style scoped>

</style>