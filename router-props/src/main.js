import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import App from './App.vue'
// import list from './components/list.vue'
// import detail from './components/detail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const Foo = { 
  props: [ 'id' ],
  template: '<div>{{ $route.params.id }}</div>'
}
const Bar = { template: '<div>bar</div>'}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Foo
    },
    {
      path : '/foo/:id',
      component: Foo,
      props: true
    },
    {
      path: '/bar/:id',
      component: Foo,
      props: true
    }]
})

new Vue({
  el: '#app',
  router
})
