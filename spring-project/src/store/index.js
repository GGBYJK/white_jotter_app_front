import { createStore } from 'vuex'

// 创建一个新的 store 实例
export const store = createStore({
    state () {
        return {
            user: {
                username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
            }
        }
    },
    mutations: {
        login (state, user) {
            state.user = user
            window.localStorage.setItem('user', JSON.stringify(user))
        },
        logout (state) {
            state.user = []
            window.localStorage.removeItem('user')
        }
    }
})