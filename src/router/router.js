import {createRouter, createWebHistory   /*,createMemoryHistory*/} from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Jisuanshuxing from "@/components/JisuanShuxing";
import MuBanYinYong from "@/components/MuBanYinYong";
import tjxr from "@/components/条件渲染";
import BaseCom from "@/components/BaseCom";
import MuBanYuFan from "@/components/MuBanYuFan";
import ZhenTingQi from "@/components/ZhenTingQi";
import ZhenTingQi2 from "@/components/ZhenTingQi2";
import Home from "@/views/Home";
import Blog from "@/views/Blog";
import Alert from "@/views/Alert";
import Dtzj from "@/views/动态组件";

// import HelloWorld from 'src/components/HelloWorld.vue'
// import Jisuanshuxing from './components/JisuanShuxing.vue'

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/hw', component: HelloWorld},
    {path: '/jssx', component: Jisuanshuxing},
    {path: '/mbyy', component: MuBanYinYong},
    {path: '/tjxr', component: tjxr},
    {path: '/baseCom', component: BaseCom},
    {path: '/mbyf', component: MuBanYuFan},
    {path: '/ztq', component: ZhenTingQi},
    {path: '/ztq2', component: ZhenTingQi2},
    {path: '/home', component: Home},
    {path: '/blog', component: Blog},
    {path: '/alert', component: Alert},
    {path: '/dtzj', component: Dtzj},
]

const router = createRouter({
    // history: createMemoryHistory(), //不能记录浏览器的上一页或下一页
    history: createWebHistory(),
    routes,
})

//记录上一页 下一页信息
router.beforeEach(((to, from, next) => {
    next()
}))

export default router;