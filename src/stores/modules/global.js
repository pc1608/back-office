import { defineStore } from "pinia"
import { ref } from "vue"
export const useGlobalStore = defineStore("global",()=>{
    //是否全屏
    const maxSize = ref(false)
    //深色模式
    const isDark = ref(true)
    //是否显示logo
    const showLogo = ref(true)
    //是否显示导航历史
    const showTabs = ref(true)
    //一次只打开一个菜单
    const expandOneMenu = ref(true)
    //element默认尺寸
    const elementSize = ref("big")
    //折叠菜单
    const isCollapse = ref(false)
    //是否显示面包屑
    const breadcrumb = ref(true)
    //通过切换该属性实现重新加载
    const routerActive = ref(true)
    const theme = ref({
        style: 'default',
        primaryColor: '#409eff',
        menuType: 'side'
    })
    const changeCollapse = (bool)=>{
        isCollapse.value = bool
    }
    const changeMaxSize = ()=>{
        maxSize.value = !maxSize.value
    }
    /**
     * 切换
     */
    const toggleCollapse = ()=>{
        isCollapse.value = !isCollapse.value
    }
    const changeTheme = (obj)=>{
        theme.value = obj
    }
    /**
     * 切换属性
     * @param index 1 showLogo 2 showTabs 3 expandOneMenu  4 isDark 5 breadcrumb
     */
    const changeOther = (index)=>{
        switch (index){
            case 1:
                showLogo.value = !showLogo.value
                break
            case 2:
                showTabs.value = !showTabs.value
                break
            case 3:
                expandOneMenu.value = !expandOneMenu.value
                break
            case 4:
                isDark.value = !isDark.value
                break
            case 5:
                breadcrumb.value = !breadcrumb.value
                break
        }
    }
    const changeSize = (val)=>{
        elementSize.value = val
    }
    /**
     * 重新加载
     */
    const toggleActive = ()=>{
        routerActive.value = false
        setTimeout(()=>{
            routerActive.value = true
        },500)
    }
    return{
        maxSize,
        isDark,
        showTabs,
        showLogo,
        expandOneMenu,
        elementSize,
        isCollapse,
        breadcrumb,
        theme,
        routerActive,
        changeCollapse,
        changeMaxSize,
        changeTheme,
        toggleCollapse,
        changeOther,
        changeSize,
        toggleActive,
    }
})