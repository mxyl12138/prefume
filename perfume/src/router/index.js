import Vue from 'vue'
import Router from 'vue-router'
import TabBar from '@/view/TabBar'
import CartAll from '@/view/cartpage/CartAll'
import Test from '@/view/test/Test'
import ClassNav from '@/view/test/ClassNav'
import User from '@/view/mypage/myson/User'
// import Ad from '@/view/firstpage/firstson/Ad'
// 路由懒加载
const Ad = ()=> import('@/view/firstpage/firstson/Ad')
import Order from '@/view/mypage/myson/Order'
import Product from '@/view/classpage/classson/Product'

Vue.use(Router)

//配置路由映射关系
export default new Router({
  routes: [
    { path: '/product/:id', component: Product,props:true},
    { path: '/ad', component: Ad},
    // { path: '/ad', component: Ad, meta:{title: '广告'}},
    { path: '/order', component: Order },
    { path: '/user', component: User },
    { path: '/CartAll', component: CartAll },
    { path: '/', component: TabBar },

    //默认显示
    // { path: '', redirect: 'tabbar'},
    { path: '/test',component: Test },
    { path: '/classnav', component: ClassNav },
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

//从from跳转到to
// Router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   next()
// })