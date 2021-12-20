import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import {store} from "@/store";

router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            if (store.state.user) {
                axios.get('/authentication').then(resp => {
                    if (resp) next()
                })
            } else {
                next({
                    path: 'login',
                    query: {redirect: to.fullPath}
                })
            }
        } else {
            next()
        }
    }
)
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080/api'
const app = createApp(App);
app.config.productionTip = false;
app.config.globalProperties.$axios=axios;
/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(router, axios);
app.use(ElementPlus);
app.use(store);
app.mount('#app');
