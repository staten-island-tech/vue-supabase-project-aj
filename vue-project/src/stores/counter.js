// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'


// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     user: null
//   }),
//   actions: {
//     setUser(newUser) {
//       this.user = newUser
//     },
//     clearUser() {
//       this.user = null
//     }
//   }
// })

// import { mande } from 'mande'

// const api = mande('/api/users')

// export const useUsers = defineStore('users', {
//   state: () => ({
//     userData: null,
//     // ...
//   }),

//   actions: {
//     async registerUser(login, password) {
//       try {
//         this.userData = await api.post({ login, password })
//         showTooltip(`Welcome back ${this.userData.name}!`)
//       } catch (error) {
//         showTooltip(error)
//         // let the form component display the error
//         return error
//       }
//     },
//   },
// })