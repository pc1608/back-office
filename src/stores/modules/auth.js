import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth",()=>{
    const menuList = ref([])
    return{
        menuList
    }
});
