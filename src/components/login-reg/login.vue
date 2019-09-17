<template>
  <Modal title="Title" v-model="loginModal" class-name="vertical-center-modal">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
</template>
<script>
export default {
  name: "login",
  props: { loginModal: { type: Boolean, default: false } },
  data() {
    return {};
  }
};
</script>
<style lang="less">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
</style>