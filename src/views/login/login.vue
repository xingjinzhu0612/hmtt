<template>
  <div class="login-container">
    <el-card class="login">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form  :model="loginForm" :rules="loginRules" ref="loginForm" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:260px"></el-input>
          <el-button style="float:right">验证码</el-button>
        </el-form-item>
        <el-form-item class="checkbox">
          <el-checkbox v-model="checked"></el-checkbox>
          <span>
            我已阅读并同意
            <el-link type="primary" :underline="false">用户协议</el-link>和
            <el-link type="primary" :underline="false">隐私条款</el-link>
          </span>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {

  data () {
    const checkMoblie = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入11位手机号'))
      }
    }
    return {
      checked: true,
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMoblie, trigger: 'blur' }

        ],
        code: [
          { required: true, message: '请输入验正码', trigger: 'blur' },
          { len: 6, message: '请输入6位验正码', trigger: 'blur' }

        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 校验成功，进行登录
          this.axios
            .post('authorizations', this.loginForm)
            .then((res) => {
              const { data } = res.data
              console.log(data)
              this.$router.push('/')
              window.sessionStorage.setItem('hmtt', JSON.stringify(res.data.data))
            })
            .catch(() => {
              this.$message.error('用户名和密码不正确')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login {
    width: 420px;
    height: 340px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 220px;
      display: block;
      margin: 16px auto;
    }
    .el-checkbox {
      margin-right: 10px;
    }
    .checkbox {
      margin-bottom: 10px;
    }
  }
}
</style>
