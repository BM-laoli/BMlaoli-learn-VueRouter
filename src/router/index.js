/**
 * 配置路由相关的信息
 */
// 1. 导入
import Router from 'vue-router'

// 2.1 导入vue实例
import Vue from 'vue'

// 导入组件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User'
const Home = () => import ('../components/Home.vue')
const About = () => import ('../components/About.vue')
const User = () => import ('../components/User')


const HomeNews = () => import ('../components/HomeNews')
const HomeMessage = () => import ('../components/HomeMessage')


// 2.2使用路由（插件），安装插件，vue的插件，都是这样安装，Vue.use
Vue.use(Router)

// 3. 创建路路由对象，这个就是在Router里面配置映射和对象等东西

// 4. 抽离配置项出来
const routes = [{
        path: '/',
        redirect: '/home'

    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [{
                path: 'news',
                component: HomeNews,
            },
            {
                path: 'message',
                component: HomeMessage,
            },

        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: "/user/:usermsg",
        component: User,
        meta: {
            title: '用户'
        }
    }
]

const router = new Router({
    routes,
    mode: "history"
})

// 前置钩子hook
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
        // console.log(to);
    next()
})



//4. 导出

export default router

//6. 去main里面挂载