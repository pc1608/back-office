<template>
  <el-container style="height: 100vh">
    <div
      class="mask"
      v-show="!isCollapse && !contentFullScreen"
      @click="hideMenu"
    ></div>
    <el-aside
      :width="isCollapse ? '60px' : '250px'"
      :class="isCollapse ? 'hide-aside' : 'show-side'"
      v-show="!contentFullScreen"
    >
      <Logo v-if="showLogo" />
      <Menu />
    </el-aside>
    <el-container>
      <el-header v-show="!contentFullScreen">
        <Header />
      </el-header>
      <Tabs v-show="showTabs" />
      <el-main>
        <router-view v-slot="{ Component, route }" v-if="globalStore.routerActive">
          <transition
            :name="route.meta.transition || 'fade-transform'"
            mode="out-in"
          >
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="js" setup>
import { onBeforeMount,computed  } from "vue";
import { useEventListener } from "@vueuse/core";
import Menu from "./Menu/index.vue";
import Logo from "./Logo/index.vue";
import Header from "./Header/index.vue";
import Tabs from "./Tabs/index.vue";
import {useGlobalStore} from "@/stores/modules/global";
const globalStore = useGlobalStore()
// computed
const isCollapse = computed(() => globalStore.isCollapse)
const contentFullScreen = computed(()=>globalStore.maxSize)
const showLogo = computed(()=>globalStore.showLogo)
const showTabs = computed(()=>globalStore.showTabs)
// const keepAliveComponentsName = computed(() => store.getters['keepAlive/keepAliveComponentsName']);
// 页面宽度变化监听后执行的方法
const resizeHandler = () => {
  if (document.body.clientWidth <= 1000 && !isCollapse.value) {
    globalStore.changeCollapse(true)
  } else if (document.body.clientWidth > 1000 && isCollapse.value) {
    globalStore.changeCollapse(false)
  }
};
// 初始化调用
resizeHandler();
// beforeMount
onBeforeMount(() => {
  // 监听页面变化
  useEventListener("resize", resizeHandler);
});
// methods
// 隐藏菜单
const hideMenu = () => {
  globalStore.changeCollapse(true)
};
</script>

<style lang="scss" scoped>
.el-header {
  padding-left: 0;
  padding-right: 0;
}
.el-aside {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: 0.3s;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}
.el-main {
  background-color: var(--system-container-background);
  height: 100%;
  padding: 0;
  overflow-x: hidden;
}
:deep(.el-main-box) {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
@media screen and (max-width: 1000px) {
  .el-aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    &.hide-aside {
      left: -250px;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>