    // import MyEditor from "./components/MyEditor";
    import "../static/css/index.css";
    import MonacoEditor from "monaco-editor-vue";
    import FTab from "./tabs";
    import Login from "./login-reg/login";
    import Reg from "./login-reg/reg";
    export default {
        name: "App",
        components: {
            MonacoEditor,
            FTab,
            Login,
            Reg
        },
        data() {
            return {
                loginModalTitle: "登录",
                loginIsShow: true,
                loginModal: false,
                spiderTabShow: true,
                scrollHeight: 80, //控制台滚动区域高度
                domHeight: {
                    height: window.innerHeight - 207 + "px"
                },
                split2: 0.8,
                currentLanguage: "javascript",
                languageList: [{
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
                urlList: [{
                    value: "http://baidu.com",
                    label: "http://baidu.com"
                }],
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
            },
            changeConsoleSize() {
                var he = document.getElementsByClassName("bottom-pane")[0].offsetHeight; //控制台的高度
                this.scrollHeight = he - 50; //控制台滚动区域高度
            },
            showLoginModal() {
                this.loginModal = !this.loginModal;
            },
            goReg() {
                this.loginModalTitle = "注册";
                this.loginIsShow = !this.loginIsShow;
            },
            //关闭模态框
            modalCancel(value) {
                if (value)
                    this.loginIsShow = true;
            },
            updateRegShow(data) {
                this.loginIsShow = data;
            }
        },
        mounted() {}
    };