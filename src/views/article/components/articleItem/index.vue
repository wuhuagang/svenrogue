<template>
  <div>
    <el-card>
      <div style="text-align: center">{{ article.title }}</div>
      <h3>{{ article.classify }}</h3>
    </el-card>
  </div>
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
          abstract: 'vue父子组件传值有很多方法，而两个没有关系的组件传值就是vuex和中央事件总线了'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
