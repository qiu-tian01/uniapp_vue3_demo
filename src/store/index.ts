import { defineStore } from "pinia"

interface State {
  count: number
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      count: 0
    }
  },
  actions: {
    updateName() {
      this.count++
    }
  }
})
