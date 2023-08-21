<template>
  <el-dropdown @command="handleCommand" size="medium">
    <span class="el-dropdown-link">
      <i class="sfont system-zuixiaohua"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="d in list"
          :key="d.size"
          :command="d.size"
          :disabled=" elementSize === d.size "
        >
          {{ d.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="js" setup>
import { defineComponent, computed, unref } from 'vue'
import { useRoute } from 'vue-router'
import {useGlobalStore} from "@/stores/modules/global";
const globalStore = useGlobalStore()
const elementSize = computed(() => globalStore.elementSize)
const list = [
  { size: 'large', name: '大' },
  { size: 'default', name: '默认' },
  { size: 'small', name: '小' },
]
const handleCommand = (command)=>{
  globalStore.changeSize(command)
}
</script>

<style lang="scss" scoped>
  
</style>