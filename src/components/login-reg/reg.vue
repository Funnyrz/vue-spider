<template>
  <div>
    <Form ref="regData" :model="regData" :rules="ruleValidate">
      <FormItem prop="email" v-if="emailFlag">
        <Input v-model="regData.email" size="large" placeholder="请输入邮箱" />
      </FormItem>
      <FormItem prop="code" v-if="codeFlag">
        <Input v-model="regData.code" size="large" placeholder="请输入邮箱验证码" />
      </FormItem>
      <p v-if="regSuccFlag" class="spider-reg-text">
        注册成功
        <br />请尽情发挥你的才艺吧~
      </p>
      <Button
        type="primary"
        long
        class="layout-margin-top-20"
        style="width:100%"
        @click="goNext"
      >{{buttonTitle}}</Button>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRegSucc: false,
      validFormFlag: false,
      emailFlag: true,
      codeFlag: false,
      regSuccFlag: false,
      buttonTitle: "下一步",
      regData: { email: "", code: "" },
      ruleValidate: {
        code: [
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
    goNext() {
      if (this.emailFlag) {
        this.handleSubmit("regData");
        if (!this.validFormFlag) {
          return;
        }
        this.$Spin.show();
        this.$get("/auth/register_email", {
          email: this.regData.email
        }).then(response => {
          if (response.status != 200) {
            this.$Spin.hide();
            this.$Message.error({
              content: "请求异常",
              duration: 5
            });
            return;
          }
          if (response.rspBody) {
            this.$Spin.hide();
            this.$Message.error({
              content: "该邮箱已被注册",
              duration: 5
            });
            return;
          }
          this.$get("/auth/sendCode", {
            email: this.regData.email
          }).then(response => {
            this.$Spin.hide();
            if (response.status != 200) {
              this.$Message.error({
                content: "请求异常",
                duration: 5
              });
              return;
            }
            if (!response.rspBody) {
              this.$Message.error({
                content: "验证码下发失败",
                duration: 5
              });
              return;
            }
            this.emailFlag = !this.emailFlag;
            this.codeFlag = !this.codeFlag;
            this.buttonTitle = "验证";
            this.$Message.success({
              content: "已向您的邮箱发送一条验证邮件,请登录邮箱",
              duration: 5
            });
            return;
          });
        });
      }
      if (this.codeFlag) {
        this.handleSubmit("regData");
        window.console.log(this.validFormFlag);
        if (!this.validFormFlag) {
          return;
        }
        this.$Spin.show();
        this.$get("/auth/authCode/" + this.regData.code).then(response => {
          this.$Spin.hide();
          if (response.retcode != 200) {
            this.$Message.error({
              content: "请求异常",
              duration: 5
            });
            return;
          }
          if (!response.rspBody) {
            this.$Message.error({
              content: "验证码不正确",
              duration: 5
            });
            return;
          }
          this.codeFlag = !this.codeFlag;
          this.regSuccFlag = !this.regSuccFlag;
          this.isRegSucc = true;
          this.buttonTitle = "前往登录";
          return;
        });
      }
      if (this.isRegSucc) {
        this.$emit("regValue", true);
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        this.validFormFlag = valid;
      });
    }
  }
};
</script>