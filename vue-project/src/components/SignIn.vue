<template>
   <header>
      <nav>
         <RouterLink class="" to="/"></RouterLink >

         <RouterLink class="navigate"to="/signup">Sign Up</RouterLink>
         <RouterLink class="navigate"to="/signin">Sign In</RouterLink>
   
      </nav>
  </header>
  <RouterView />
    <div class="header">
      <form @submit.prevent="Submit" class="form">
        <div class="form1">
          <label for="namee">Email</label>
          <input type="text" required v-model="user.Email" id="namee" class="form2">
        </div>
        <div class="form1">
          <label for="pass">Password</label>
          <input type="password" required v-model="user.Password" id="pass" class="form2">
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
  <h3></h3>
    </div>
  </template>
  
  <script>
  import { supabase } from '@/lib/supabaseClient.js'
  import { RouterLink, RouterView } from 'vue-router'
  import { AuthStore } from '@/stores/counter.js'
/*   export const authStore = defineStore('auth',{
  state:() => {
    return {
      currentUser: null,
      location: null
    };
  },
  actions: {
    loadUser(){
      this.currentUser = supabase.auth.user();
    },
    clearUser(){
      this.currentUser = null;
    },
  },
  getters:{
    isAuthenticated(){
      return !!this.currentUser;
    },
  },
}); */
  export default {
    data() {
      return {
        user: {
          Email: '',
          Password: ''
        },
        loggedIn: false
      }
    },
    methods: {
      async login() {
        try {
          const { user, session, error } = await supabase.auth.signInWithPassword({
            email: this.user.Email,
            password: this.user.Password
          }) 
          if (error) {
            console.error(error.message)
            document.querySelector("h3").textContent = ("Wrong password or email")
          } else {
            this.loggedIn = true; 
            document.querySelector("h3").textContent = ("Yay you logged in successfully!");
            this.$router.push('/home')
            AuthStore.user.push(user)
          console.log(AuthStore.user)
          }
        } catch (error) {
          console.log(error.message)
        }
      },
      Submit() {
        this.login()
      }
    }
  }
  </script>
  
  
  <style scoped>
  header {
  font-size: 2rem;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 10px 20px; 
}
.navigate{
  padding: 10px 20px;
  margin-right: 10px; 
  background-color:rgb(57, 188, 231);
  color: white; 
  border-radius: 5px; 
  cursor: pointer; 
  text-decoration: none; 
  transition: background-color 0.3s; 
}
.navigate:hover {
  background-color: rgb(138, 198, 218); 
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.form {
  width: 500px;
  padding: 40px;
  padding-right: 54px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.form1 {
  margin-bottom: 20px;
}
.form2 {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.button {
  padding: 10px 20px;
  background-color:rgb(57, 188, 231);
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(163, 207, 221);
}

</style>