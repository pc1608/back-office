<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="用户名：" prop="name">
        管理员
      </el-form-item>
      <el-form-item label="原密码：" prop="old">
        <el-input v-model="form.old" placeholder="请输入原密码" show-password></el-input>
      </el-form-item>
			<el-form-item label="新密码：" prop="new">
			  <el-input v-model="form.new" placeholder="请输入新密码" show-password></el-input>
			</el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="js" setup>
import { defineComponent, ref } from 'vue'
import Layer from '@/components/layer/index.vue'
const props = defineProps({
  layer: {
    type: Object,
    default: () => {
      return {
        show: false,
        title: '',
      }
    }
  }
})
const ruleForm = ref(null)
const layerDom = ref(null)
let form = ref({
  userId: '123465',
  name: '',
  old: '',
  new: ''
})
const rules = {
  old: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
  new: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
}
function submit() {
  if (ruleForm.value) {
    ruleForm.value.validate((valid) => {
      if (valid) {
        let params = {
          id: form.value.userId,
          old: form.value.old,
          new: form.value.new
        }
      } else {
        return false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
  
</style>