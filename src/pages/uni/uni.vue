<template>
  <div></div>
</template>

<script setup lang="ts">
uni.setStorageSync("test", "test")
const test = uni.getStorageSync("test")

console.log(test)
</script>

<style></style>
