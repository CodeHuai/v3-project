<template>
  <div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <h2>{{ name }}</h2>
    <router-view></router-view>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const name = ref(useStore().state.name)
    return {
      name
    }
  }
})
</script>

<style lang="scss" scoped></style>
