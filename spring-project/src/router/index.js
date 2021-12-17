import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home";
import LibraryIndex from "@/components/library/LibraryIndex";

const routes = [
    {
        path: '/',
        name: '',
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: AppIndex,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/library',
                name: 'Library',
                component: LibraryIndex,
                meta: {
                    requireAuth: true
                }
            }
        ]
    }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;