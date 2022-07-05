<template>
  <div class="login-container">
    <h1>后台管理系统</h1>
    <el-tabs
      v-model="chooseLoginWay"
      class="demo-tabs"
      stretch
      type="border-card"
    >
      <el-tab-pane name="账号密码">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Avatar />
            </el-icon>
            <span class="label-txt">账号登录</span>
          </span>
        </template>
        <login-count ref="accountRef"></login-count>
      </el-tab-pane>
      <el-tab-pane name="手机号">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Cellphone />
            </el-icon>
            <span class="label-txt">手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="operate-container">
      <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="sub-btn" type="primary" @click="loginAction"
      >立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { Avatar, Cellphone } from '@element-plus/icons-vue'
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
    //是否记住密码
    const rememberPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginCount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()

    let chooseLoginWay = ref('账号密码')

    // 点击登录时处理
    const loginAction = () => {
      if (chooseLoginWay.value === '账号密码') {
        accountRef.value?.handleLogin(rememberPassword.value)
      } else if (chooseLoginWay.value === '手机号') {
        phoneRef.value?.handleLogin(rememberPassword.value)
      }
    }
    return {
      rememberPassword,
      loginAction,
      accountRef,
      phoneRef,
      chooseLoginWay
    }
  }
})
</script>

<style lang="less" scoped>
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

  .operate-container {
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
