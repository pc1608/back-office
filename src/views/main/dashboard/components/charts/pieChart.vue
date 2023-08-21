<template>
  <div class="box">
    <Chart :option="options" />
  </div>
</template>

<script lang="js" setup>
import { defineComponent, reactive } from 'vue'
import Chart from '@/components/charts/index.vue'
import option from './modules/pie'
const options = reactive(option)
</script>

<style lang="scss" scoped>
  .box {
    margin: 20px auto 0;
    width: calc(100% - 40px);
    height: 400px;
    background: var(--system-page-background);
    padding: 20px 20px 10px;
    overflow: hidden;
  }
</style>