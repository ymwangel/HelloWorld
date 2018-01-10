import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import App from './App.vue'
// import list from './components/list.vue'
// import detail from './components/detail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

// 1.定义路由组件（也可以是从其他文件import进来，即注视部分：list.vue、detail.vue）
const Foo = { template: '<div>foo</div>'}
const Bar = { template: '<div>bar</div>'}

// 2.定义路由
const routes = [
  {
    path: '/',
    component: Foo
  },
  {
    path : '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  }
]

// 3.创建router实例，然后传routes配置
const router = new VueRouter({
  routes : routes
})

// const router = new VueRouter({
//   routes: [{ 
//       name:'list',
//       path: '/', 
//       component: list 
//     },
//     { 
//       name:'detail',
//       path: '/detail', 
//       component: detail 
//     },
//     {
//       name:'detail',
//       path: '/detail/:id/:companyName',
//       component: detail
//     }]
// })

new Vue({
  el: '#app',
  router
  // render: create=>create(App)
})
