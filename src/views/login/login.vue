<template>
    <div class="login-container">
    <el-card class="login">
        <img src="../../assets/images/logo_index.png" alt="">
        <el-form>
            <el-form-item>
                <el-input></el-input>
            </el-form-item>
             <el-form-item>
                <el-input style="width:260px"></el-input>
                <el-button style="float:right">验证码</el-button>
            </el-form-item>
            <el-form-item class="checkbox">
                <el-checkbox v-model="checked"></el-checkbox>
                <span>我已阅读并同意 <el-link type="primary" :underline="false">用户协议</el-link>和<el-link type="primary" :underline="false">隐私条款</el-link></span>
            </el-form-item>
            <el-form-item>
               <el-button style="width:100%" type="primary" >登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style scoped lang='less'>
    .login-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
        .login{
            width: 420px;
            height: 340px;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            img{
                width: 220px;
                display: block;
                margin: 16px auto;
            }
            .el-checkbox {
                margin-right: 10px
            }
            .checkbox{
                margin-bottom: 10px;
            }

        }

    }
</style>
