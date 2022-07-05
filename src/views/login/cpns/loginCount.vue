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
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import cache from '@/utils/cache'

export default defineComponent({
  components: {
    ElForm
  },
  setup() {
    const countRules = reactive({
      name: cache.getCache('userCount').name ?? '',
      password: cache.getCache('userCount').password ?? ''
    })

    const countRulesRef = ref<InstanceType<typeof ElForm>>()

    // 处理登录
    const handleLogin = (rememberPassword: boolean) => {
      countRulesRef.value?.validate((valid) => {
        if (valid) {
          // 是否记住密码
          if (rememberPassword) {
            cache.setCache('userCount', countRules)
          } else {
            //  没有记住密码就清除密码
            cache.removeCacheByKeyName('userCount')
          }
        }
      })
    }

    return { rules, countRules, handleLogin, countRulesRef }
  }
})
</script>

<style scoped></style>
