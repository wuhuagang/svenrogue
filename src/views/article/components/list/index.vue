<template>
  <el-container class="app-container">
    <el-aside width="300px" style="background-color: rgb(255,230,215);">
      <h2 style="text-align: center">个人</h2>
      <el-carousel :autoplay="true" direction="vertical" type="card">
        <el-carousel-item v-for="item in personalCards" :key="item">
          <img :src="item" alt="加载失败">
        </el-carousel-item>
      </el-carousel>
      <span>没有情调，不懂浪漫，也许这是程序员的一面，但拥有朴实无华的爱是他们的另一面。 信念和目标，必须永远洋溢在程序员内心</span>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <router-link to="/login">
          <el-button type="info" size="medium" >前往登录</el-button>
        </router-link>
      </el-header>
      <el-main>
        <article-item v-for="(article) in articles" :article="article" :key="article.id"/>
        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import ArticleItem from '../articleItem/index'

export default {
  name: 'ArticleList',
  components: { Pagination, ArticleItem },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      articles: [
        { id: '1', title: 'vue中央事件总线', classify: 'javascript', abstract: 'vue父子组件传值有很多方法，而两个没有关系的组件传值就是vuex和中央事件总线了', eyeOpen: 9999, like: 998 },
        { id: '2', title: 'Vue状态管理之Vuex', classify: 'Node.js', abstract: 'vue使用vuex来管理状态，一般用于大型项目之中', eyeOpen: 9999, like: 10 },
        { id: '3', title: 'Vue状态管理之Vuex', classify: 'Node.js', abstract: 'vue使用vuex来管理状态，一般用于大型项目之中', eyeOpen: 9999, like: 10 }
      ],
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      },
      personalCards: [
        require('@/assets/images/personalCard.jpeg'),
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg']
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = false
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   this.listLoading = false
      // })
    }
  }
}
</script>

<style scoped>
</style>
