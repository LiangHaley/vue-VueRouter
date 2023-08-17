import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export const routes = [{ 
    path: '/', 
    name:'Login', 
    // @ts-ignore
    component: () => import('../views/LoginView.vue')
},{ 
path: '/home', 
name:'home', 
// @ts-ignore
component: () => import('../views/HomeView.vue')
}]
const router = new VueRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    mode:'history',
    base: process.env.BASE_URL,
    routes, // `routes: routes` 的缩写
  })
  export default router