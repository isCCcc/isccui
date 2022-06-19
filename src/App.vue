<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth; // 获取屏幕宽度
    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible', asideVisible) // set
  }

}
</script>
