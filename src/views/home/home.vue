<template>
  <el-container class="home-container">
    <el-aside class="aside"   :width="isCollapse?'60px':'200px'">
        <div class="logo" :class="{close:isCollapse}"></div>
      <el-menu
      style="border-right:none"
      :collapse="isCollapse"
      :collapse-transition='false'
        default-active="/"
        class="el-menu-vertical-demo"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >

        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-setting"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-setting"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-document"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-setting"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-setting"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <span @click="toggleMenu()"  class="el-icon-s-fold"></span>
        <span class="txt">传智播客有限公司</span>
        <el-dropdown style="float:right">
          <img src="../../assets/images/avatar.jpg" alt />
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出设置</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang='less'>
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .header {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .el-icon-s-fold {
      font-size: 20px;
      vertical-align: middle;
    }
    .txt {
      vertical-align: middle;
    }
    img {
      // display: block;
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }
  .aside {
      background: #002233;
      border-right: 0;
      .logo{
          width: 100%;
          height: 60px;
          background: #002048 url(../../assets/images/logo_admin.png) no-repeat center / 140px;
      }
      .close{
          background: url(../../assets/images/logo_admin_01.png) no-repeat center
      }
  }
}
</style>
