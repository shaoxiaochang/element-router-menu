import Vue from 'vue'
import Vuex from 'vuex'
import { asyncRoutes, constantRoutes } from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        routes: [],
    },
    getters: {
        permission_routes: state => state.routes,
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        generateRoutes({ commit }) {
            return new Promise(resolve => {
                // ignore permission control
                let accessedRoutes = asyncRoutes
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
})

export default store
