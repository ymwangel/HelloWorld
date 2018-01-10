import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const Foo = { template: '<div id="foo">foo</div>'}
const Bar = { template: '<div id="bar">bar</div>'}

const router = new VueRouter({
  routes : [
  {
    path: '/',
    name: 'aa',
    component: App
  },{
    path: '/foo',
    name: 'foo',
    component: Foo,
    alias: '/c'
  },{
    path: '/bar',
    name: 'bar',
    component: Bar
  },{
    path: '/app/id',
    component: App,
    name: 'aa'
  },{
    path: '/app',
    redirect: 'bar'
    // redirect: { name: 'bar' }
    // redirect: to => {
    //   // 方法接收 目标路由 作为参数
    //   // return 重定向的 字符串路径/路径对象
    //   const { hash, params, query } = to
    //   // ES6结构图语法，执行后，hash=to.hash; params = to.params; query=to.query
    //   if (query.to === 'foo') {
    //     return { path: '/foo', query: null }
    //   }
    //   if (hash === '#baz') {
    //     return { name: 'baz', hash: '' }
    //   }
    //   if (params.id) {
    //     return '/with-params/:id'
    //   } else {
    //     return '/bar'
    //   }
    // }
  }]
})

new Vue({
  el: '#app',
  router
  // render: create=>create(App)
})
