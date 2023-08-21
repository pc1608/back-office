<template>
  <component is="router-link" v-bind="linkProps(to)" @click="hideMenu" >
    <slot></slot>
  </component>
</template>

<script lang="js" setup>
import { defineComponent, computed } from 'vue'
import {useGlobalStore} from "@/stores/modules/global";
import {useMenuStore} from "@/stores/modules/menu";
const props = defineProps({
  to: {
    type: String,
    required:true
  }
})
const store = useGlobalStore();
const menuStore = useMenuStore()
const isCollapse = computed(() => store.isCollapse);
const linkProps = (to) => {
  return {
    to: to
  }
}
const hideMenu = () => {
  if (document.body.clientWidth <= 1000 && !isCollapse.value) {
    store.changeCollapse(true)
  }
};
</script>
<style lang="">

</style>