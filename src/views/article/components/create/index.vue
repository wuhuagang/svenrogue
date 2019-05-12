<template>
  <div class="components-container">
    <div class="editor-container">
      <el-input class="article-title" placeholder="请输入标题"/>
      <markdown-editor v-model="content1" style="height: 450px"/>
    </div>
    <el-button-group >
      <el-button type="primary" style="margin: 10px 10px 10px 10px" @click="publishArticle">发布博客</el-button>
      <el-button type="primary" style="margin: 10px 10px 10px 10px" @click="publishArticle">存为草稿</el-button>
    </el-button-group>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'

const content = `
请输入内容`
export default {
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList['en']
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
    },
    publishArticle() {

    }
  }
}
</script>

<style scoped>
.editor-container{
  margin-bottom: 30px;
}
.article-title{
  margin-bottom: 5px;
}
</style>
