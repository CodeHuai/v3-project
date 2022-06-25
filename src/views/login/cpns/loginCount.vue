<template>
  <div class="count-contaiern">
    <el-form ref="countRulesRef" :model="countRules" :rules="rules">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="countRules.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="countRules.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { rules } from '../config/rules'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const countRules = reactive({
      name: '',
      password: ''
    })
    return { rules, countRules }
  }
})
</script>

<style scoped></style>
