<template>
  <div>uniapp+vue3+ts首页</div>
  <div class="button" @click="navigateTo('/pages/vue/vue')">vue页面</div>
  <div class="button" @click="navigateTo('/pages/ts/ts')">ts页面</div>
  <div class="button" @click="navigateTo('/pages/uni/uni')">uni页面</div>
  <div class="button" @click="navigateTo('/pages/pinia/pinia')">uni页面</div>
</template>

<script setup lang="ts">
const navigateTo = (url: string) => {
  uni.navigateTo({
    url: url
  })
}
</script>

<style>
.button {
  width: 300px;
  height: 50px;
  background: #07c160;
  color: #fff;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 6px;
}
</style>
