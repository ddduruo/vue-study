import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const List = () => import(/* webpackChunkName: "list" */ "../views/List.vue");
const Detail = () =>
    import(/* webpackChunkName: "detail" */ "../views/Detail.vue");

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: 'home',
        component: Home,
        meta: {
            depth: 1
        }
    },
    {
        path: "/list",
        name: 'list',
        component: List,
        meta: {
            depth: 2
        }
    },
    {
        path: "/detail/:id",
        name: 'detail',
        component:Detail,
        meta: {
            depth: 3
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
