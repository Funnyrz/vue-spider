<style scoped>
</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="spider-header">
        <div>
          <div class="spider-logo">Spider Robot</div>
          <div class="spider-login">
            <Button type="info">登录</Button>
          </div>
        </div>
      </Header>
      <Layout class="spider-border">
        <Sider hide-trigger class="spider-sider"></Sider>
        <Layout>
          <Content class="spider-code-com">
            <div class="spider-code-tool">
              <Select
                v-model="modelLanguage"
                class="spider-select-language"
                @on-change="changeLanguage"
              >
                <Option
                  class="spider-select-option"
                  v-for="item in languageList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
              <Select class="spider-select-url" v-model="modelUrl" filterable>
                <Option
                  v-for="item in urlList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
              <Button type="primary" size="small">配置URL</Button>
            </div>
            <div class="spider-code-core">
              <div class="demo-split">
                <MonacoEditor
                  width="85.5%"
                  :height="editorHeight"
                  theme="vs-dark"
                  :language="currentLanguage"
                  :options="options"
                  @change="onChange"
                ></MonacoEditor>
                <Tabs style="width:80%; float: left;" v-if="consoleFlag">
                  <TabPane label="macOS" icon="logo-apple">标签1</TabPane>
                  <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
                </Tabs>
              </div>

              <Button
                style=" float: right;font-size:16px;margin-top:5px"
                @click="consoleFlag=!consoleFlag"
              >控制台 v</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
      <div class="spider-footer">
        <div class="spider-footer-btn">
          <Button type="info" size="small">保存</Button>
          <Button type="primary" size="small">运行</Button>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
// import MyEditor from "./components/MyEditor";
import "./static/css/index.css";
import MonacoEditor from "monaco-editor-vue";
export default {
  name: "App",
  components: {
    MonacoEditor
  },
  data() {
    return {
      split2: 0.5,
      consoleFlag: true,
      currentLanguage: "javascript",
      languageList: [
        {
          value: "javascript",
          label: "JavaScript"
        },
        {
          value: "html",
          label: "Html"
        },
        {
          value: "typescript",
          label: "TypeScript"
        },
        {
          value: "java",
          label: "Java"
        },
        {
          value: "css",
          label: "CSS"
        },
        {
          value: "json",
          label: "JSON"
        },
        {
          value: "xml",
          label: "XML"
        },
        {
          value: "markdown",
          label: "Markdown"
        },
        {
          value: "python",
          label: "Python"
        },
        {
          value: "golang",
          label: "Golang"
        }
      ],
      urlList: [
        {
          value: "http://baidu.com",
          label: "http://baidu.com"
        }
      ],
      modelLanguage: "javascript",
      modelUrl: "",
      editorHeight: window.innerHeight - 223,
      options: {
        //  selectOnLineNumbers: true,
        //   roundedSelection: false,
        //   readOnly: false, // 只读
        //   cursorStyle: "line", //光标样式
        //   automaticLayout: false, //自动布局
        //   glyphMargin: true, //字形边缘
        //   useTabStops: false,
        //   fontSize: 28, //字体大小
        //   autoIndent: true //自动布局
        //quickSuggestionsDelay: 500,   //代码提示延时
        //Monaco Editor Options
      }
    };
  },
  methods: {
    onChange(value) {
      window.console.log(this.editorHeight + "---" + value);
    },
    changeLanguage(value) {
      this.currentLanguage = value;
    }
  }
};
</script>