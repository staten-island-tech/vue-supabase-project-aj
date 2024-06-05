import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      username: '',
    }
  }),
  actions: {
    setUser(newUser) {
      this.user = newUser;
    },
    clearUser() {
      this.user = { username: '' };
    }
  }
});
