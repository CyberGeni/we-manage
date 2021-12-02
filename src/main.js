import Vue from 'vue'
import App from './App.vue'

//router components

// import About from './assets/components/About.vue'
import Blog from './assets/components/Blog.vue'
// import Contact from './assets/components/Contact.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    {path: '/', component: Shop},
    {path: '/about', component: About},  
    {path: '/blog', component: Blog},
    {path: '/contact', component: Contact},
  ],
  mode : 'history'
})
