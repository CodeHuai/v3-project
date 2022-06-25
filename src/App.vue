<template>
  <div id="app">
    <router-view></router-view>
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

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./assets/image/login-banner/login-banner.jpg') no-repeat;
  background-size: 100%;
}
</style>
