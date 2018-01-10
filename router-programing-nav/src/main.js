import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)


// 必须定义router，需要注入到Vue实例中，new VueRouter的实例中的内容，就是定义路由（路径）
const router = new VueRouter({
  routes: [{ 
      name:'aa',
      path: '/app', 
      component: App 
    }]
})

new Vue({
  el: '#app',
  data:function () {
    return {}
  },
  router,   //使用路由，必须注入router
  methods:{
    goApp(){
      var vm = this
      //字符串
      vm.$router.push('App')

      //对象
      // vm.$router.push({ path: 'app'})

      //命名路由，仍是 /app
      // vm.$router.push({ name: 'aa', params: {memberId: '46lr452', id: '123'}})

      // 带查询参数，变成 /app?memberId=46lr452&id=123
      // vm.$router.push({ path: 'App', query: {memberId: '46lr452', id: '123'}})

      // var userId = '46lr452'
      // 因为是路由：/user/46lr452,不是参数，所以，只能传一个
      // vm.$router.push({ path: `/App/${userId}` }) // -> /user/46lr452

      // 这里的 params 不生效 :name与params配对使用，而path与query配对使用
      // vm.$router.push({ path: '/user', params: { userId }}) // -> /user
    }
  }
})
