import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const AuthStore = defineStore('user', () => {
  const user = ref('')
  return {user}
 
})
