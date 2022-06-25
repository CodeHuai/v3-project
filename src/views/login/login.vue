<template>
  <div class="login-container">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span class="label-txt">账号登录</span>
          </span>
        </template>
        <login-count></login-count>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span class="label-txt">手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="oprate-container">
      <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="sub-btn" type="primary">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { Cellphone, Avatar } from '@element-plus/icons-vue'
import loginCount from './cpns/loginCount.vue'
import loginPhone from './cpns/loginPhone.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Avatar,
    Cellphone,
    loginCount,
    loginPhone
  },
  setup() {
    let rememberPassword = ref(true)
    return {
      rememberPassword
    }
  }
})
</script>

<style scoped lang="less">
/deep/ .el-tabs__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  padding: 0 10px;
  height: 400px;
  background: #fff;
  border-radius: 18px;
  h1 {
    text-align: center;
  }

  .demo-tabs {
    width: 400px;
    .custom-tabs-label {
      display: flex;
      justify-content: center;
      align-items: center;
      .label-txt {
        margin-left: 5px;
      }
    }
  }

  .oprate-container {
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sub-btn {
    width: 100%;
    height: 40px;
  }
}
</style>
