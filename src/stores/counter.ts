import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //State
  const count = ref(0)

  //Getters
  //ใช้ computed เพื่อสร้างค่าที่ได้จากการคำนวณ
  const doubleCount = computed(() => count.value * 2)

  //Actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
