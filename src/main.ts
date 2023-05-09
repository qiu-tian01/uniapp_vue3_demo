import { createSSRApp } from "vue"
import App from "./App.vue"
import Test from "@/component/Test/Test.vue"
import { createPinia } from "pinia"
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia() // 导入插件
  app.config.globalProperties.$token = "xxxx" // 创建全局变量
  app.component("Test", Test) // 注册全局组件
  app.use(pinia)
  return {
    app
  }
}
