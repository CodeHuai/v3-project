<template>
  <div class="phone-container">
    <el-form ref="phoneRef">
      <el-form-item label="手机号：" prop="num">
        <el-input v-model="phoneRules.num" />
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="get-code">
          <el-input v-model="phoneRules.code" />
          <div>
            <el-button class="get-btn" type="primary">获取验证码</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import cache from '@/utils/cache'

export default defineComponent({
  components: {
    ElForm
  },
  setup() {
    const phoneRules = reactive({
      num: cache.getCache('userPhone').name ?? '',
      code: cache.getCache('userPhone').password ?? ''
    })

    const phoneRef = ref<InstanceType<typeof ElForm>>()

    const handleLogin = (rememberPassword: boolean) => {
      phoneRef.value?.validate((valid: boolean) => {
        if (valid) {
          if (rememberPassword) {
            cache.setCache('userPhone', phoneRules)
          } else {
            //  没有记住密码就清除密码
            cache.removeCacheByKeyName('userPhone')
          }
        }
      })
    }
    return {
      phoneRef,
      phoneRules,
      handleLogin
    }
  }
})
</script>

<style lang="less" scoped>
/deep/ .el-form-item__content {
  display: flex;
  flex-wrap: nowrap;
}

.phone-container {
  .get-code {
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
