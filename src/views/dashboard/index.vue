<template>
  <div class="dashboard-container">
    <h1 class="dashboard-text">文章列表</h1>
    <!--<div class="dashboard-text"><span v-for="role in roles" :key="role">{{ role.name }}</span></div>-->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: { },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    text-align: center;
  }
}
</style>
