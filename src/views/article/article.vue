<template>
  <div class="contianer">
    <el-card class="box-card">
      <div slot="header">
        <my-bread>内容管理</my-bread>
      </div>
      <el-form v-model="reqParams" size="small" label-width="100px">
        <el-form-item label="状态:">
          <el-radio-group v-model="radio">
            <el-radio :label="3">全部</el-radio>
            <el-radio :label="6">草稿</el-radio>
            <el-radio :label="9">待审核</el-radio>
            <el-radio :label="9">审核通过</el-radio>
            <el-radio :label="9">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道:">
          <el-select v-model="reqParams.channel_id">
            <el-option
              v-for="item in channelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间:">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <span>
        根据筛选条件共查询到
        <b>{{total}}</b> 条结果：
      </span>
      <el-table :data="articles" style="width: 100%">
        <el-table-column label="封面">
          <template slot-scope="scope">
           <el-image :src='scope.row.cover.images[0]' style="width:108px; height:60px">
      <div slot="error" class="image-slot">
        <img src="../..//assets/images/error.gif" alt="">
      </div>
    </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="pubdate" label="发布时间"></el-table-column>
        <el-table-column prop="date" label="操作"></el-table-column>
      </el-table>
      <div class="box">
        <el-pagination
          background
          style="margin-top:20px"
          layout="prev, pager, next"
          :page-size="reqParams.per_page"
          :current-page="reqParams.page"
          @current-change="changePage"
          :total="total"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import MyBread from '../../components/my-bread'
export default {
  components: {
    MyBread
  },
  data () {
    return {
      radio: 3,
      reqParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null,
        page: 1,
        per_page: 20
      },
      channelOptions: [{ name: 'java', id: 2 }],
      value1: [],
      // 文章列表数据
      articles: [],
      total: 0
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      const {
        data: { data }
      } = await this.axios.get('articles', { params: this.reqParams })
      console.log(data)
      this.articles = data.results
      this.total = data.total_count
    },
    changePage (newPage) {
      this.reqParams.page = newPage
      this.getArticles()
    }
  }
}
</script>

<style scoped lang='less'>
.box-card {
  margin-bottom: 20px;
}
.box {
  text-align: center;
}
</style>
