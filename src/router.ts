import {createRouter, createWebHistory} from "vue-router";
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from "./pages/Home.vue";
import Demo from "./pages/Demo.vue";
import AboutUs from "./pages/AboutUs.vue";
import GroupTeam from "./pages/GroupTeam.vue";
import Motion from "./pages/Motion.vue";
import JoinUs from "./pages/JoinUs.vue";
import Info from "./pages/Info.vue";
import Setting from "./pages/Setting.vue";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const routes = [
    { path: '/', name:'index',component: JoinUs },
    { path: '/demo', name:'demo',component: Demo },
    { path: '/about', name:'about',component: AboutUs },
    { path: '/team', name:'team',component: GroupTeam },
    { path: '/motion', name:'motion',component: Motion },
    { path: '/join', name:'join',component: JoinUs },
    { path: '/home', name:'home',component: Home },
    { path: '/setting', name:'setting',component: Setting },
    { path: '/info', name:'info',component: Info },
]
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
