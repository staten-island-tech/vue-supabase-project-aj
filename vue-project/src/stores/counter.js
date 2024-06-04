import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userId: null,
    username: null,
    email: null
  }),
  actions: {
    setUser(user) {
      this.userId = user.id
      this.username = user.username
      this.email = user.email
    },
    clearUser() {
      this.userId = null
      this.username = null
      this.email = null
    }
  }
})