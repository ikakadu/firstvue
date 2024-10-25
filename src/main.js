import {createApp} from 'vue'
import App from './App.vue'
// import router from '/src/router/router.js'; // 引入router
// import router from '/src/router/router'; // 引入router
import router from './router/router.js'; // 引入router
// import router from './router/router'; // 引入router


// import {ref, reactive} from 'vue' // 配置自动导入，用来省略这句手动引入
// import { initDb } from './database.js'
// initDb()


// createApp(App).use(router).mount('#app')


const app = createApp(App)
app.component()
app.use(router)
app.mount('#app')

