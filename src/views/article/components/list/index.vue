<template>
  <div class="app-container">
    <article-item v-for="(article) in articles" :article="article" :key="article.id"/>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
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
        { id: '1', title: 'vue中央事件总线', classify: 'javascript', abstract: 'vue父子组件传值有很多方法，而两个没有关系的组件传值就是vuex和中央事件总线了' },
        { id: '2', title: 'Vue状态管理之Vuex', classify: 'Node.js', abstract: 'vue使用vuex来管理状态，一般用于大型项目之中' }
      ],
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      }
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
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
