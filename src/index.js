import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import app from './app.vue'

import './styles/wui.css'


Vue.use(VueRouter)
new Vue({
  el: '#app',
  router: new VueRouter({
    routes
  }),
  render: h => h(app)
})

var $mount = Vue.prototype.$mount
Vue.prototype.$mount = function () {
  if (!this.$options._componentTag) {
    window.vm = window.vue = this
  }
  $mount.apply(this, arguments)
}