import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
// import list from './components/list.vue'
// import detail from './components/detail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

// 1.定义路由组件（也可以是从其他文件import进来，即注视部分：list.vue、detail.vue）
const Foo = { template: '<div>foo</div>'}
const Bar = { template: '<div>bar</div>'}

const router = new VueRouter({
  routes : [{
    path: '/app',
    components: {
      default: Foo,
      a: Bar,
      b: App
    }
  }]
})

new Vue({
  el: '#app',
  router
  // render: create=>create(App)
})
