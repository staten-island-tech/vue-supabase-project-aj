import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      username: ref(''),
      
    }
  }),
  actions: {
    setUser(newUser) {
      this.user = newUser
    },
    clearUser() {
      this.user = null
    }
  }
})
