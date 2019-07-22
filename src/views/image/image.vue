<template>
  <el-card class="container" v-loading='loading'>
    <div slot="header">
      <my-bread>素材管理</my-bread>
    </div>
    <div>
      <el-radio-group size="small" v-model="reqParams.collect" @change="search">
        <el-radio-button :label="false">全部</el-radio-button>
        <el-radio-button :label="true">收藏</el-radio-button>
      </el-radio-group>
      <el-button size="small" style="float:right" type="success">添加素材</el-button>
    </div>
    <ul class="list" style="margin-top:20px">
      <li v-for="item in images" :key="item.id">
        <img :src="item.url" alt />
        <div class="tb" v-if="!reqParams.collect">
          <span @click="toggleSc(item)" class="el-icon-star-off" :class="{red:item.is_collected}"></span>
          <span @click="del(item)" class="el-icon-delete"></span>
        </div>
      </li>
    </ul>

    <el-pagination
      background
      style="text-align:center"
      layout="prev, pager, next"
      :page-size="reqParams.per_page"
      :current-page="reqParams.page"
      @current-change="changePage"
      :total="total"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      reqParams: {
        collect: false,
        page: 1,
        per_page: 20
      },
      images: [],
      total: 0
    }
  },
  created () {
    this.getImages()
  },
  methods: {
    del (item) {
      this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.axios.delete('user/images/' + item.id)
        this.$message.success('删除成功')
        this.getImages()
      }).catch(() => {

      })
    },
    async toggleSc (item) {
      const { data: { data } } = await this.axios.put('user/images/' + item.id, { collect: !item.is_collected })
      this.$message.success('操作成功')
      item.is_collected = data.collect
    },
    search () {
      this.reqParams.page = 1
      this.getImages()
    },
    changePage (newPage) {
      this.reqParams.page = newPage
      this.getImages()
    },
    async getImages () {
      this.loading = true
      const {
        data: { data }
      } = await this.axios.get('user/images', { params: this.reqParams })
      console.log(data)
      this.images = data.results
      this.total = data.total_count
      this.loading = false
    }

  }
}
</script>

<style scoped lang='less'>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li {
    width: 180px;
    height: 180px;
    border: 1px dashed #ddd;
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
    position: relative;
    img {
      display: zblock;
      width: 100%;
      height: 100%;
    }
    .tb {
      width: 100%;
      height: 30px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      span {
        margin: 0 20px;
        &.red {
          color: red;
        }
      }
    }
  }
}
</style>
