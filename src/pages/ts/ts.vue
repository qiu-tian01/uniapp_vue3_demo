<template>
  <div></div>
</template>

<script setup lang="ts">
// 泛型的使用
type Print = <T>(data: T) => T
const print: Print = (data) => {
  console.log(data)
  return data
}

print("string")
print(10)

// 泛型的约束接口
interface IProps<T, U> {
  key: T
  value: U
}

const k: IProps<number, string> = { key: 10, value: "18" }
console.log(k)

//泛型约束后端接口参数
interface API {
  "/user": {
    id: number
  }
  "/confirm": {
    id: number
    info: string
  }
}

function request<T extends keyof API>(url: T, data: API[T]) {
  return uni.request({
    url,
    data
  })
}
</script>

<style></style>
