<template>
  <div class="logo-container">
     <!--<img src="@/assets/logo.png" alt="">-->
    <h1 v-if="!isCollapse">后台管理系统</h1>
  </div>
</template>

<script lang="js" setup>
import { computed } from 'vue'
import {useGlobalStore} from "@/stores/modules/global";
const globalStore = useGlobalStore()
const isCollapse = computed(() => globalStore.isCollapse)
</script>

<style lang="scss" scoped>
  .logo-container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--system-logo-background);
    h1 {
      font-size: 18px;
      white-space: nowrap;
      color: var(--system-logo-color);
    }
  }
</style>