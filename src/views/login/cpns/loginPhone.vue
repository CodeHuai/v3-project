<template>
  <div class="phone-container">
    <el-form>
      <el-form-item label="手机号：" prop="num">
        <el-input v-model="phoneRules.num" />
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="get-code">
          <el-input v-model="phoneRules.code" />
          <div>
            <el-button type="primary" class="get-btn">获取验证码</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phoneRules = reactive({
      num: '',
      code: ''
    })
    return {
      phoneRules
    }
  }
})
</script>

<style scoped lang="less">
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
