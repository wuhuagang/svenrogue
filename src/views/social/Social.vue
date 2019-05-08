<template>
  <div class="social-sign-container">
    <div class="sign-btn" @click="wechatHandleClick('wechat')">
      <span class="wx-svg-container"><svg-icon icon-class="wechat" class="icon" /></span>
    </div>
    <div class="sign-btn" @click="tencentHandleClick('tencent')">
      <span class="qq-svg-container"><svg-icon icon-class="qq" class="icon" /></span>
    </div>
    <div class="sign-btn">
      <a href="http://www.ruixinkeji.club:9200/api-auth/auth/github" class="qq-svg-container"><svg-icon icon-class="github" class="icon" /></a>

    </div>
  </div>
</template>
<!--<a href="http://www.ruixinkeji.club:9200/api-auth/auth/github" class="qq-svg-container"></a>-->
<script>
import openWindow from '@/utils/openWindow'

export default {
  name: 'Social',
  methods: {
    wechatHandleClick(third) {
      this.$store.commit('SET_AUTH_TYPE', third)
      const appid = '1106503892'
      const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      openWindow(url, third, 540, 540)
    },
    tencentHandleClick(third) {
      this.$store.commit('SET_AUTH_TYPE', third)
      const client_id = '1106503892'
      const redirect_uri = encodeURIComponent('http://nf3gmu.natappfree.cc/redirect?redirect=' + window.location.origin + '/auth-redirect')
      const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      openWindow(url, third, 540, 540)
    },
    gitHandleClick(third) {
      this.$store.commit('SET_AUTH_TYPE', third)
      // const client_id = 'c826cedc5b328bb28d24'
      // const redirect_uri = encodeURIComponent('http://svenrogue.natapp1.cc/api-auth/auth')
      const url = 'http://www.ruixinkeji.club:9200/api-auth/auth/github'
      openWindow(url, third, 540, 540)
    }
  }
}
</script>

<style lang="scss" scoped>
  .social-sign-container {
    margin: 20px 0;
    .sign-btn {
      display: inline-block;
      cursor: pointer;
    }
    .icon {
      color: #fff;
      font-size: 24px;
      margin-top: 8px;
    }
    .wx-svg-container,
    .qq-svg-container {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding-top: 1px;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-right: 5px;
    }
    .wx-svg-container {
      background-color: #24da70;
    }
    .qq-svg-container {
      background-color: #6BA2D6;
      margin-left: 50px;
    }
  }
</style>
