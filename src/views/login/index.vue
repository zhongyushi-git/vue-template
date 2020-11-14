<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="用户登录" :bordered="false">
        <Form ref="loginForm" :model="form" :rules="rules">
          <FormItem prop="username">
            <Input v-model="form.username" placeholder="请输入用户名">
            <span slot="prepend">
              <Icon :size="16" type="ios-person"></Icon>
            </span>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="请输入密码">
            <span slot="prepend">
              <Icon :size="14" type="md-lock"></Icon>
            </span>
            </Input>
          </FormItem>
          <FormItem>
            <Button @click="handleSubmit" type="primary" long>登录</Button>
          </FormItem>
        </Form>
        <p class="login-tip">{{msg}}</p>
      </Card>
    </div>
  </div>
</template>

<script>

  export default {
    name: '',
    components: {},
    computed: {},
    created() { },
    data() {
      return {
        form: {},
        msg: '用户名和密码都是admin',

        rules: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            console.log(this.form)
            if (this.form.username == 'admin' && this.form.password == 'admin') {
              this.$router.push('/home')
            } else {
              this.msg = '用户名或密码错误'
            }
          }
        })
      }
    },
  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    background: url('~assets/images/login-bg.jpg');
  }

  .login-con {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
  }

  .login-tip {
    font-size: 10px;
    text-align: left;
    color: red;
  }
</style>