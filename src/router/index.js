import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login-reg/login'
import Reg from '@/components/login-reg/reg'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/reg',
            component: Reg
        }, {
            path: '/reg',
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            },
            component: Reg
        },
        {
            path: '/',
            component: Login
        }
    ]
})
// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
        window.console.log(router.app.$cookies.get("token"))
        let token = router.app.$cookies.get("token")
        if (token != '' && token != null) { // 判断是否登录
            next()
        } else { // 没登录则跳转到登录界面
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})
export default router