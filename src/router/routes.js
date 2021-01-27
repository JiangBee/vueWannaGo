// import HelloWorld from '@/pages/HelloWorld.vue'
// 路由的懒加载
const Home = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Home')
const Kind = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Kind')
const Cart = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Cart')
const User = () => import(/* webpackChunkName: "group-footer" */ '@/pages/User')
const Search = () => import(/* webpackChunkName: "group-search" */ '@/pages/Search')
const Detail = () => import(/* webpackChunkName: "group-detail" */ '@/pages/Detail')
const Footer = () => import(/* webpackChunkName: "group-footer" */ '@/components/Footer')
const Register = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Register')
const Login = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Login')
// 也可以写成：
// components： {
// default：() => import(/* webpackChunkName: "group-footer" */'@/pages/Home')
// }

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: Footer
    }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: Kind,
      footer: Footer
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: User,
      footer: Footer
    }
  },
  {
    path: '/search',
    name: 'search',
    components: {
      default: Search,
      footer: Footer
    }
  },
  {
    path: '/detail/',
    name: 'detail',
    components: {
      default: Detail
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      default: Register
    }
  },
  {
    path: '/city',
    name: 'city',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/City.vue'),
      footer: Footer
    }
  },
  {
    path: '/brand',
    name: 'brand',
    components: {
      default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Brand.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    }
  }
]

export default routes
