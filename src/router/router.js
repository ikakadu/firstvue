import { createRouter  , createWebHistory   /*,createMemoryHistory*/ } from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Jisuanshuxing from "@/components/JisuanShuxing";
import MuBanYinYong from "@/components/MuBanYinYong";
import tjxr from "@/components/条件渲染";
import BaseCom from "@/components/BaseCom";

// import HelloWorld from 'src/components/HelloWorld.vue'
// import Jisuanshuxing from './components/JisuanShuxing.vue'

const routes = [
    { path: '/hw', component: HelloWorld },
    { path: '/jssx', component: Jisuanshuxing },
    { path: '/mbyy', component: MuBanYinYong },
    { path: '/tjxr', component: tjxr },
    { path: '/baseCom', component: BaseCom },
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