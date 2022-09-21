<template>
    <div class="login-warapper">
        <div class="login-form">
            <p class="login-title">积云会员管理系统</p>
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="账号">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          form: {
          username: '',
          password:''
        }
        }
    },
     methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>


<style lang="scss">
.login-warapper {
  background: url("http://vue.mengxuegu.com/img/login.b665435f.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-title{
    font-size: 24px;
    font-weight: 700;
    // background-color: red;
    margin-bottom: 30px;
    text-align: center;
    margin-top: 20px
}
.login-form {
  background-color: rgba(255, 255, 255, 0.8);
  width: 350px;
  padding: 28px;
  margin: 160px auto;
  border-radius: 20px
}
</style>
