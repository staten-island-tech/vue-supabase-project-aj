import { defineStore } from 'pinia';
import {ref} from 'vue'

export let userStore = defineStore('loginStore', () => {
  const isUserLoggedIn = ref(false)
  const username = ref('')
  let cart = ref([])

  return {isUserLoggedIn, username, cart}
})