<template>
  <div>
    <div
      class="layout-left spider-tab"
      :class="{'spider-tab-active':spiderTabShow}"
      @click="changeTabShow"
    >操作手册</div>
    <div
      class="layout-right spider-tab"
      :class="{'spider-tab-active':!spiderTabShow}"
      @click="changeTabShow"
    >文件管理</div>
    <div v-if="spiderTabShow">你需要了解：</div>
    <div v-if="!spiderTabShow">很多开发商的开发</div>
  </div>
</template>
<script>
import "../static/css/ftab.css";
export default {
  data() {
    return { spiderTabShow: true };
  },
  methods: {
    changeTabShow() {
      this.spiderTabShow = !this.spiderTabShow;
    }
  }
};
</script>