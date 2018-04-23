import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import list from './components/list.vue'
import detail from './components/detail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  // routes: [
  //   { path: '/app/:id', 
  //     component: App,
  //     children: [
        
  //       {
  //         path: 'list',
  //         component: list
  //       },
  //       {
  //         path: 'detail',
  //         component: detail
  //       }
  //     ]
  //   }
  // ]
  routes: [
    {
      path: '/',
      component: App
    },
    { 
      path: '/app', 
      component: App,
      children: [
        {
          path: 'list',
          component: list
        },{
          path: 'detail',
          component: detail
        }
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router
  // ,
  // render: create=>create(App)
})
