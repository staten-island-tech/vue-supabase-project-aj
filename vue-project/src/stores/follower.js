import { defineStore } from 'pinia';
import {ref} from 'vue'

export let followStore = defineStore('followStore', () => {
  const isUserFollowed = ref(false)


  return {isUserFollowed}
})