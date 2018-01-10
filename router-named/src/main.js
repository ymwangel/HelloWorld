import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
// import list from './components/list.vue'
// import detail from './components/detail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { 
      name:'aa',
      path: '/app', 
      component: App 
    },
    {
      name: 'aa',
      path: '/app/:memberId',
      component: App
    }]
})

new Vue({
  el: '#app',
  router,
  components:{App}
  // render: create=>create(App)
})
