//程序的入口
//加载vue模块 CommomJS的模块语法
//const Vue = require('vue)

//ES6中的模块化语法，是导入模块
import Vue from 'vue'






import VueRouter from 'vue-router'

Vue.use(VueRouter)
import HeroList from './views/hero/HeroList.vue'
import HeroWeapon from './views/weapon/HeroWeapon.vue'
import HeroEquip from './views/equip/HeroEquip.vue'

const router = new VueRouter({
    //选项
    //当url和router里的a标签精确匹配时改变类名
    linkActiveClass:'active',
    routes:[
        {path:'/',redirect:{name:'hero'}},
        {name:'hero',path:'/hero',component:HeroList},
        {name:'weapon',path:'/weapon',component:HeroWeapon},
        {name:'equip',path:'/equip',component:HeroEquip},
    ]
})


//导出router
export default router