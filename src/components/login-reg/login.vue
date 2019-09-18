<template>
  <div>
    <Form ref="loginData" :model="loginData" :rules="ruleValidate">
      <FormItem prop="email">
        <Input v-model="loginData.email" size="large" placeholder="请输入邮箱" />
      </FormItem>
      <FormItem prop="pwd">
        <Input v-model="loginData.pwd" size="large" placeholder="请输入密码" />
      </FormItem>
      <Button
        type="primary"
        long
        class="layout-margin-top-20"
        style="width:100%"
        @click="handleSubmit('loginData')"
      >登录</Button>
    </Form>
  </div>
</template>
<script>
import "../../static/css/login.css";
export default {
  name: "login",
  data() {
    return {
      loginData: { email: "", pwd: "" },
      ruleValidate: {
        pwd: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        window.console.log(valid);
      });
    }
  }
};
</script>