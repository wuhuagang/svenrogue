<template>
  <div class="signup-container">
    <h3 class="title">您当前正在使用{{ providerId }}绑定系统账号</h3>
    <el-form ref="signupForm" :model="signupForm" class="signup-form" label-position="left">
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="signupForm.username" name="username" type="text" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input v-model="signupForm.email" name="email" type="text" placeholder="邮箱" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="signupForm.password"
          name="password"
          placeholder="password"/>
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <!--<el-form-item prop="phone">-->
      <!--<span class="svg-container">-->
      <!--<svg-icon icon-class="user" />-->
      <!--</span>-->
      <!--<el-input v-model="signupForm.phone" name="phone" type="text" placeholder="手机号" />-->
      <!--</el-form-item>-->
      <!--<el-form-item prop="sex">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-radio-group v-model="signupForm.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>-->
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleSignup">
          绑定
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleBinding">
          已有账号前往绑定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      providerId: 'github',
      signupForm: { username: '', password: '', email: '' },
      pwdType: 'password',
      loading: false
    }
  },
  methods: {
    handleSignup: function() {
      this.$store.dispatch('SignUp', this.signupForm).then(() => {

      })
    },
    handleBinding: function() {
      this.$router.push({ path: '/binding' })
    },
    showPwd: function() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $light_gray:#eee;

  /* reset element-ui css */
  .signup-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #000000;
  $dark_gray:#889aa4;
  $light_gray:#eee;
  .signup-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .signup-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 10px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      text-align: center;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 40px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
