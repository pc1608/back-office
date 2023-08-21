import {defineStore} from "pinia";
import {ref} from "vue"

export const useMenuStore = defineStore("menu",()=>{
    const menuList = ref([])
    //增加一项
    const addMenu = (menu)=>{
        //判断menu的path是否重复
        const item = menuList.value.find(item=>item.path===menu.path)
        if (item){
            return
        }
        menuList.value.push(menu)
    }
    return{
        menuList,
        addMenu
    }
})