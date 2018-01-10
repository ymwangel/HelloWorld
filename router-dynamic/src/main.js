import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

const User = {
  template: '<div>User {{ $route.params }}</div>',
  //使用watch监听活着使用beforeRouteUpdate()守卫
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
      // 对路由变化作出响应...
    }
  },
  // 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。
  // 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
  // 不过，这也意味着组件的生命周期钩子不会再被调用。
  // 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，
  // 你需要使用 beforeRouteUpdate 来响应这个变化 (比如抓取用户信息)。
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
  }
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User },
    { path: '/user/:id/post/:post_id', component: User}
  ]
})

new Vue({
  el: '#app',
  router
  // render: create=>create(App)
})
