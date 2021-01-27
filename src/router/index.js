import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
// import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes
})

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
