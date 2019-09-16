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
            <div class="spider-code-core" :style="domHeight">
              <div class="spider-split" :style="domHeight">
                <Split v-model="split2" mode="vertical" min="80">
                  <div slot="top" class="demo-split-pane">
                    <MonacoEditor
                      :width="editorWidth"
                      :height="editorHeight"
                      theme="vs-dark"
                      :language="currentLanguage"
                      :options="options"
                      @change="onChange"
                    ></MonacoEditor>
                  </div>
                  <div slot="bottom">
                    {"result":1,"callback":null,"data":{"count":3,"page_count":1,"floor_count":2,"list":[{"info":{"CommentId":"10066706","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-06-27 23:06:22","Content":"\u8d5e\u4e00\u4e2a\uff01","UserName":"sylfffffffff","Status":"1","IP":"112.94.188.245","IsBoleComment":"0","PKId":"0","Digg":"1","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":["itNewBoy"],"Avatar":"https:\/\/avatar.csdn.net\/1\/6\/B\/3_sylfffffffff.jpg","NickName":"sylfffffffff","date_format":"2\u4e2a\u6708\u524d"}},{"sub":[{"CommentId":"9317282","ArticleId":"83008749","BlogId":"7813532","ParentId":"9315613","PostTime":"2019-03-13 15:37:58","Content":"[reply]qq_42931952[\/reply]\n\u62a5\u9519\uff1f\u9519\u8bef\u4ee3\u7801\uff1f\u81ea\u5df1\u7a0d\u5fae\u5206\u6790\u4e0b\uff0c\u62ff\u6765\u4e3b\u4e49\u53ef\u4e0d\u597d","UserName":"xuquanxi1079","Status":"1","IP":"112.14.7.59","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"ParentUserName":"qq_42931952","ParentNickName":"\u5c0f\u7ef4\u5a05","Avatar":"https:\/\/avatar.csdn.net\/E\/1\/B\/3_xuquanxi1079.jpg","NickName":"TiHarper","date_format":"6\u4e2a\u6708\u524d"}],"info":{"CommentId":"9315613","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-03-13 11:40:50","Content":"\u62ff\u6765\u4e0d\u80fd\u7528","UserName":"qq_42931952","Status":"1","IP":"123.147.250.88","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"Avatar":"https:\/\/avatar.csdn.net\/D\/2\/C\/3_qq_42931952.jpg","NickName":"\u5c0f\u7ef4\u5a05","date_format":"6\u4e2a\u6708\u524d"}}]},"vote":0,"content":"success"}{"result":1,"callback":null,"data":{"count":3,"page_count":1,"floor_count":2,"list":[{"info":{"CommentId":"10066706","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-06-27 23:06:22","Content":"\u8d5e\u4e00\u4e2a\uff01","UserName":"sylfffffffff","Status":"1","IP":"112.94.188.245","IsBoleComment":"0","PKId":"0","Digg":"1","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":["itNewBoy"],"Avatar":"https:\/\/avatar.csdn.net\/1\/6\/B\/3_sylfffffffff.jpg","NickName":"sylfffffffff","date_format":"2\u4e2a\u6708\u524d"}},{"sub":[{"CommentId":"9317282","ArticleId":"83008749","BlogId":"7813532","ParentId":"9315613","PostTime":"2019-03-13 15:37:58","Content":"[reply]qq_42931952[\/reply]\n\u62a5\u9519\uff1f\u9519\u8bef\u4ee3\u7801\uff1f\u81ea\u5df1\u7a0d\u5fae\u5206\u6790\u4e0b\uff0c\u62ff\u6765\u4e3b\u4e49\u53ef\u4e0d\u597d","UserName":"xuquanxi1079","Status":"1","IP":"112.14.7.59","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"ParentUserName":"qq_42931952","ParentNickName":"\u5c0f\u7ef4\u5a05","Avatar":"https:\/\/avatar.csdn.net\/E\/1\/B\/3_xuquanxi1079.jpg","NickName":"TiHarper","date_format":"6\u4e2a\u6708\u524d"}],"info":{"CommentId":"9315613","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-03-13 11:40:50","Content":"\u62ff\u6765\u4e0d\u80fd\u7528","UserName":"qq_42931952","Status":"1","IP":"123.147.250.88","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"Avatar":"https:\/\/avatar.csdn.net\/D\/2\/C\/3_qq_42931952.jpg","NickName":"\u5c0f\u7ef4\u5a05","date_format":"6\u4e2a\u6708\u524d"}}]},"vote":0,"content":"success"}{"result":1,"callback":null,"data":{"count":3,"page_count":1,"floor_count":2,"list":[{"info":{"CommentId":"10066706","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-06-27 23:06:22","Content":"\u8d5e\u4e00\u4e2a\uff01","UserName":"sylfffffffff","Status":"1","IP":"112.94.188.245","IsBoleComment":"0","PKId":"0","Digg":"1","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":["itNewBoy"],"Avatar":"https:\/\/avatar.csdn.net\/1\/6\/B\/3_sylfffffffff.jpg","NickName":"sylfffffffff","date_format":"2\u4e2a\u6708\u524d"}},{"sub":[{"CommentId":"9317282","ArticleId":"83008749","BlogId":"7813532","ParentId":"9315613","PostTime":"2019-03-13 15:37:58","Content":"[reply]qq_42931952[\/reply]\n\u62a5\u9519\uff1f\u9519\u8bef\u4ee3\u7801\uff1f\u81ea\u5df1\u7a0d\u5fae\u5206\u6790\u4e0b\uff0c\u62ff\u6765\u4e3b\u4e49\u53ef\u4e0d\u597d","UserName":"xuquanxi1079","Status":"1","IP":"112.14.7.59","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"ParentUserName":"qq_42931952","ParentNickName":"\u5c0f\u7ef4\u5a05","Avatar":"https:\/\/avatar.csdn.net\/E\/1\/B\/3_xuquanxi1079.jpg","NickName":"TiHarper","date_format":"6\u4e2a\u6708\u524d"}],"info":{"CommentId":"9315613","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-03-13 11:40:50","Content":"\u62ff\u6765\u4e0d\u80fd\u7528","UserName":"qq_42931952","Status":"1","IP":"123.147.250.88","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"Avatar":"https:\/\/avatar.csdn.net\/D\/2\/C\/3_qq_42931952.jpg","NickName":"\u5c0f\u7ef4\u5a05","date_format":"6\u4e2a\u6708\u524d"}}]},"vote":0,"content":"success"}</TabPane>
                     
                    <!-- <Tabs style="width:95%; float: left;">
                      <TabPane label="JSON" style="overflow:hidden;height50px;white-space:nowrap;">{"result":1,"callback":null,"data":{"count":3,"page_count":1,"floor_count":2,"list":[{"info":{"CommentId":"10066706","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-06-27 23:06:22","Content":"\u8d5e\u4e00\u4e2a\uff01","UserName":"sylfffffffff","Status":"1","IP":"112.94.188.245","IsBoleComment":"0","PKId":"0","Digg":"1","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":["itNewBoy"],"Avatar":"https:\/\/avatar.csdn.net\/1\/6\/B\/3_sylfffffffff.jpg","NickName":"sylfffffffff","date_format":"2\u4e2a\u6708\u524d"}},{"sub":[{"CommentId":"9317282","ArticleId":"83008749","BlogId":"7813532","ParentId":"9315613","PostTime":"2019-03-13 15:37:58","Content":"[reply]qq_42931952[\/reply]\n\u62a5\u9519\uff1f\u9519\u8bef\u4ee3\u7801\uff1f\u81ea\u5df1\u7a0d\u5fae\u5206\u6790\u4e0b\uff0c\u62ff\u6765\u4e3b\u4e49\u53ef\u4e0d\u597d","UserName":"xuquanxi1079","Status":"1","IP":"112.14.7.59","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"ParentUserName":"qq_42931952","ParentNickName":"\u5c0f\u7ef4\u5a05","Avatar":"https:\/\/avatar.csdn.net\/E\/1\/B\/3_xuquanxi1079.jpg","NickName":"TiHarper","date_format":"6\u4e2a\u6708\u524d"}],"info":{"CommentId":"9315613","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-03-13 11:40:50","Content":"\u62ff\u6765\u4e0d\u80fd\u7528","UserName":"qq_42931952","Status":"1","IP":"123.147.250.88","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"Avatar":"https:\/\/avatar.csdn.net\/D\/2\/C\/3_qq_42931952.jpg","NickName":"\u5c0f\u7ef4\u5a05","date_format":"6\u4e2a\u6708\u524d"}}]},"vote":0,"content":"success"}{"result":1,"callback":null,"data":{"count":3,"page_count":1,"floor_count":2,"list":[{"info":{"CommentId":"10066706","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-06-27 23:06:22","Content":"\u8d5e\u4e00\u4e2a\uff01","UserName":"sylfffffffff","Status":"1","IP":"112.94.188.245","IsBoleComment":"0","PKId":"0","Digg":"1","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":["itNewBoy"],"Avatar":"https:\/\/avatar.csdn.net\/1\/6\/B\/3_sylfffffffff.jpg","NickName":"sylfffffffff","date_format":"2\u4e2a\u6708\u524d"}},{"sub":[{"CommentId":"9317282","ArticleId":"83008749","BlogId":"7813532","ParentId":"9315613","PostTime":"2019-03-13 15:37:58","Content":"[reply]qq_42931952[\/reply]\n\u62a5\u9519\uff1f\u9519\u8bef\u4ee3\u7801\uff1f\u81ea\u5df1\u7a0d\u5fae\u5206\u6790\u4e0b\uff0c\u62ff\u6765\u4e3b\u4e49\u53ef\u4e0d\u597d","UserName":"xuquanxi1079","Status":"1","IP":"112.14.7.59","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"ParentUserName":"qq_42931952","ParentNickName":"\u5c0f\u7ef4\u5a05","Avatar":"https:\/\/avatar.csdn.net\/E\/1\/B\/3_xuquanxi1079.jpg","NickName":"TiHarper","date_format":"6\u4e2a\u6708\u524d"}],"info":{"CommentId":"9315613","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-03-13 11:40:50","Content":"\u62ff\u6765\u4e0d\u80fd\u7528","UserName":"qq_42931952","Status":"1","IP":"123.147.250.88","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"Avatar":"https:\/\/avatar.csdn.net\/D\/2\/C\/3_qq_42931952.jpg","NickName":"\u5c0f\u7ef4\u5a05","date_format":"6\u4e2a\u6708\u524d"}}]},"vote":0,"content":"success"}{"result":1,"callback":null,"data":{"count":3,"page_count":1,"floor_count":2,"list":[{"info":{"CommentId":"10066706","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-06-27 23:06:22","Content":"\u8d5e\u4e00\u4e2a\uff01","UserName":"sylfffffffff","Status":"1","IP":"112.94.188.245","IsBoleComment":"0","PKId":"0","Digg":"1","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":["itNewBoy"],"Avatar":"https:\/\/avatar.csdn.net\/1\/6\/B\/3_sylfffffffff.jpg","NickName":"sylfffffffff","date_format":"2\u4e2a\u6708\u524d"}},{"sub":[{"CommentId":"9317282","ArticleId":"83008749","BlogId":"7813532","ParentId":"9315613","PostTime":"2019-03-13 15:37:58","Content":"[reply]qq_42931952[\/reply]\n\u62a5\u9519\uff1f\u9519\u8bef\u4ee3\u7801\uff1f\u81ea\u5df1\u7a0d\u5fae\u5206\u6790\u4e0b\uff0c\u62ff\u6765\u4e3b\u4e49\u53ef\u4e0d\u597d","UserName":"xuquanxi1079","Status":"1","IP":"112.14.7.59","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"ParentUserName":"qq_42931952","ParentNickName":"\u5c0f\u7ef4\u5a05","Avatar":"https:\/\/avatar.csdn.net\/E\/1\/B\/3_xuquanxi1079.jpg","NickName":"TiHarper","date_format":"6\u4e2a\u6708\u524d"}],"info":{"CommentId":"9315613","ArticleId":"83008749","BlogId":"7813532","ParentId":"0","PostTime":"2019-03-13 11:40:50","Content":"\u62ff\u6765\u4e0d\u80fd\u7528","UserName":"qq_42931952","Status":"1","IP":"123.147.250.88","IsBoleComment":"0","PKId":"0","Digg":"0","Bury":"0","SubjectType":"-1","WeixinArticleId":"0","digg_arr":[],"Avatar":"https:\/\/avatar.csdn.net\/D\/2\/C\/3_qq_42931952.jpg","NickName":"\u5c0f\u7ef4\u5a05","date_format":"6\u4e2a\u6708\u524d"}}]},"vote":0,"content":"success"}</TabPane>
                      <TabPane label="TextView"></TabPane>
                    </Tabs>
                    <div class="spider-text">控制台</div> -->
                  </div>
                </Split>
              </div>
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
      domHeight: { height: window.innerHeight - 207 + "px" },
      split2: 0.8,
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
      editorHeight: window.innerHeight - 247,
      editorWidth: window.innerWidth - 274,
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