import { defineStore } from 'pinia';
import {ref} from 'vue'

export let userStore = defineStore('loginStore', () => {
  const isUserLoggedIn = ref(false)


  return {isUserLoggedIn}
})
