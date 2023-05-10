<template>
  <div class="page_main">
    <div>vue页面</div>
    <h3>引入组件</h3>
    <Test />
    <div>--------------------------------------------------</div>
    <h3>计算属性&侦听器</h3>
    <div class="add_button" @click="updateCount">点击</div>
    <div>count值:{{ count }}</div>
    <div>countPlus值: {{ countPlus }}</div>
    <div>reactive: {{ obj.count }}</div>
    <div>--------------------------------------------------</div>
    <h3>循环渲染和条件渲染</h3>
    <div v-for="(item, index) in list" :key="index" class="list_item">
      {{ item }}
    </div>
    <div @click="changeTips">点击{{ tips.title }}</div>
    <div v-if="tips.show === true">{{ tips.title }}</div>
    <div>--------------------------------------------------</div>
    <h3>动态class与style</h3>
    <div :class="count === 2 ? 'active' : ''">count为2时变红</div>
    <div :style="{ color: count === 2 ? 'red' : '' }">count为2时变红</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch, watchEffect, getCurrentInstance } from "vue"

const count = ref(0)
const obj = reactive({ count: 1 })

const list = ref([1, 2, 3, 4, 5, 6])
const tips = reactive({
  title: "展示",
  show: false
})

const countPlus = computed(() => count.value + 1)

watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

const stop = watchEffect(() => {
  console.log(`watchEffect`, count.value)
})
stop() // 停止监听

const changeTips = () => {
  tips.show = !tips.show
  tips.title = tips.show === true ? "隐藏" : "展示"
}

const token = getCurrentInstance()?.appContext.config.globalProperties.$token
console.log(`token值`, token)

const updateCount = () => {
  count.value += 1
  obj.count += 1
}
</script>

<style>
.page_main {
  display: flex;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add_button {
  width: 100px;
  height: 50px;
  border: 1px solid #eee;
}

.active {
  color: red;
}
</style>
