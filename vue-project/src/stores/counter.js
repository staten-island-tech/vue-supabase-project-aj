import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    profilePicture: null,
    username: '',
    user: null,
  }),
  getters: {

  },
  
  actions: {
    setUser(newUser) {
      this.user = newUser
    },
    clearUser() {
      this.user = null
    }
  }
})