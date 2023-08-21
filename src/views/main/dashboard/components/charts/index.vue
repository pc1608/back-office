<template>
  <div>
    <barChart />
    <el-row :gutter="20">
      <el-col :lg="12" :md="24">
        <pieChart />
      </el-col>
      <el-col :lg="12" :md="24">
        <circleChart />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="js" setup>

import CircleChart from "@/views/main/dashboard/components/charts/circleChart.vue";
import PieChart from "@/views/main/dashboard/components/charts/pieChart.vue";
import BarChart from "@/views/main/dashboard/components/charts/barChart.vue";
</script>

<style lang="scss" scoped>
  
</style>