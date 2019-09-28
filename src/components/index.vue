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
<template>
  <div class="layout">
    <Layout>
      <Header class="spider-header">
        <div>
          <div class="spider-logo">Spider Robot</div>
          <div class="spider-login">
            <Button type="info" @click="showLoginModal">登录</Button>
          </div>
        </div>
      </Header>
      <Layout class="spider-border">
        <Sider hide-trigger class="spider-sider">
          <FTab></FTab>
        </Sider>
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
              <Button type="primary" size="small" @click="urlModal=true">配置URL</Button>
            </div>
            <div class="spider-code-core">
              <div class="spider-split" :style="domHeight" style="overflow:hidden;">
                <Split v-model="split2" mode="vertical" @on-move-end="changeConsoleSize">
                  <div slot="top">
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
                    <Tabs>
                      <TabPane label="执行结果">
                        <Scroll :height="scrollHeight" class="spider-console-content">
                          <pre>{{resultValue}}</pre>
                        </Scroll>
                      </TabPane>
                      <TabPane label="输出日志">
                        <Scroll :height="scrollHeight" class="spider-console-content">
                          <pre>{{consoleValue}}</pre>
                        </Scroll>
                      </TabPane>
                    </Tabs>
                    <!-- <div class="spider-text">控制台</div> -->
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
          <Button type="primary" size="small" @click="runCode()">运行</Button>
        </div>
      </div>
    </Layout>
    <Modal
      :title="loginModalTitle"
      v-model="loginModal"
      class-name="vertical-center-modal"
      width="320"
      @on-visible-change="modalCancel"
      :mask-closable="false"
    >
      <!-- <div slot="header"></div> -->
      <Login v-if="loginIsShow"></Login>
      <Reg v-if="!loginIsShow" @regValue="updateRegShow"></Reg>
      <div slot="footer">
        <div v-if="loginIsShow">
          <a type="text" class="layout-left spider-login-text" @click="goReg">注册</a>
          <a type="text" class="spider-login-text">忘记密码</a>
        </div>
      </div>
    </Modal>
    <Modal
      title="配置URL"
      v-model="urlModal"
      class-name="vertical-center-modal"
      width="580"
      :mask-closable="false"
    >
      <!-- <div slot="header"></div> -->
      <Select v-model="modelLanguage" class="spider-select-language" @on-change="changeLanguage">
        <Option
          class="spider-select-option"
          v-for="item in languageList"
          :value="item.value"
          :key="item.value"
        >{{ item.label }}</Option>
      </Select>
      <Input class="spider-select-url" placeholder="请输入URL" width="100%" />
      <div slot="footer">
        <Button type="primary">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script src="./index.js"/>