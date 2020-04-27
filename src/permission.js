/* eslint-disable no-unused-vars */
import { asyncRoutes } from '@/router'
import router from './router'
import store from './store'

var hasRole = false

router.beforeEach(async(to, from, next) => {
    if (hasRole) {
        next()
    } else {
        hasRole = true

        // generate accessible routes map based on roles
        const accessRoutes = await store.dispatch('generateRoutes')

        router.addRoutes(accessRoutes)

        next({ ...to, replace: true })
    }
})
