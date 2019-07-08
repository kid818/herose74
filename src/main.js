//程序的入口
//加载vue模块 CommomJS的模块语法
//const Vue = require('vue)

//ES6中的模块化语法，是导入模块
import Vue from 'vue'

//根组件
import App from './App.vue'


//引入外部样式
import './assets/css/bootstrap/css/bootstrap.css'
import './assets/css/css/index.css'


// import VueRouter from 'vue-router'

// Vue.use(VueRouter)
// import HeroList from './views/hero/HeroList.vue'

// const router = new VueRouter({
//     routes:[
//         {path:'/hero',component:HeroList}
//     ]
// })
import router from './router'

//提示当前处在开发模式下，false 不提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
