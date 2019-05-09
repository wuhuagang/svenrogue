<template>
  <el-card class="container">
    <div style="text-align: center">
      <span class="svg-container">
        <svg-icon icon-class="documentation" />
      </span>
      <span>{{ article.title }}</span>
    </div>
    <h3 class="classify">{{ article.classify }}</h3>
    <h5 style="text-align: center">{{ article.abstract }}</h5>
    <el-container class="multiplex">
      <span class="svg-container">
        <svg-icon icon-class="eye-open" />
      </span>
      <span style="margin-left: 10px ; margin-right: 10px">{{ article.eyeOpen }}</span>
      <el-badge :value="article.like" :max="99" class="item">
        <el-button size="small">点赞</el-button>
      </el-badge>
    </el-container>
    <el-button type="text" class="detail" icon="el-icon-tickets" @click.native.prevent="displayDetail">查看详情</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true,
      default: function() {
        return {
          id: '1',
          title: 'vue中央事件总线',
          classify: 'javascript',
          abstract: 'vue父子组件传值有很多方法，而两个没有关系的组件传值就是vuex和中央事件总线了',
          eyeOpen: 109,
          like: 998
        }
      }
    }
  },
  methods: {
    displayDetail() {
      this.$router.push({ path: '/articleDetail' })
    }
  }
}
</script>

<style scoped>
.container{
  margin-bottom: 20px;
  position: relative;
}
  .classify{
    color: #ff162a;
  }
.svg-container {
  padding: 6px 5px 6px 15px;
  color: #ffd75c;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
  .detail{
    position: absolute;
    right: 30px;
    bottom: 10px;
  }
  .multiplex{
   text-align: center;
  }
</style>
