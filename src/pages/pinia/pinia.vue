<template>
  <div></div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/index"
import { storeToRefs } from "pinia"
const userStore = useUserStore()
const { count } = storeToRefs(userStore)
userStore.updateName()
console.log(`store`, count.value)
</script>

<style></style>
