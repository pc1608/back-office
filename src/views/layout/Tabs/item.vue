<template>
  <div class="tags-view-item" :class="active ? 'active' : ''" v-if="menu1.path!=='/dashboard'&&menu1.path!=='/'">
    <router-link :to="{ path: menu1.path, query: menu1.query }" v-if="menu1.meta.title">
      {{ menu1.meta.title }}
    </router-link>
    <el-icon @click.stop="reload" v-if="active"><refresh-right /></el-icon>
    <el-icon @click.stop="closeTab" v-if="!menu1.meta.hideClose" alt="del"><close /></el-icon>
  </div>
</template>

<script lang="js" setup>
import { onMounted,defineProps,toRef } from 'vue'
import { RefreshRight, Close } from '@element-plus/icons-vue'
import {onBeforeRouteUpdate} from "vue-router";
const props = defineProps({
  menu: {
    type: Object,
    default: () => {
      return {
        path: '',
        meta: {
          label: '',
          hideClose: false,
        },
      }
    },
  },
  active: {
    type: Boolean,
    default: false
  }
})
const active = toRef(props.active)
console.log("active",active.value)
const menu1 = props.menu
const emit = defineEmits(['close', 'reload'])
function closeTab() {
  emit('close')
}
// 刷新按钮
function reload() {
  emit('reload')
}
onMounted(()=>{
  console.log("menu1231",menu1)
  console.log("actibe",active)
})
onBeforeRouteUpdate((to)=>{
  console.log(to)
  if (menu1.path===to.path){
    active.value = true
  }
  else {
    active.value = false
  }
})
</script>

<style lang="scss" scoped>
  .tags-view-item {
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid var(--system-header-border-color);
    color: var(--system-header-text-color);
    background: var(--system-header-tab-background);
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    border-radius: 2px;
    a {
      color: var(--system-header-text-color);
      height: 26px;
      display: inline-block;
      padding-left: 8px;
      padding-right: 8px;
    }
    .el-icon-refresh-right {
      display: inline-block;
      margin-right: 5px;
    }
    .el-icon-close {
      display: inline-block;
      height: 26px;
    }
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background: var(--system-primary-color);
      border-color: var(--system-primary-color);
      color: var(--system-primary-text-color);
      a {
        color: var(--system-primary-text-color);
      }
      &:hover {
        background: var(--system-primary-color);
      }
    }
    &:hover {
      background-color: var(--system-header-item-hover-color);
    }
  }
</style>