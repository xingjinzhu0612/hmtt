<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <my-bread>发布文章</my-bread>
      </div>
      <el-form label-width="100px">
        <el-form-item label="标题：">
          <el-input style="width:500px"></el-input>
        </el-form-item>
        <el-form-item label="内容：">
            <quill-editor class="fwbeditor" v-model="content"></quill-editor>
        </el-form-item>
        <el-form-item label="封面：">
          <el-radio-group v-model="radio">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道："></el-form-item>
        <el-form-item>
          <el-button type="primary">发表</el-button>
          <el-button>存入草稿</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      radio: 3,
      content: ''
    }
  }
}
</script>

<style scoped lang='less'>
.fwbeditor{
    height: 300px;
    margin-bottom: 80px;
}
</style>
