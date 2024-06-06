<template>
  <div>
    <header>
      <nav>
        <RouterLink class="" to="/"></RouterLink>
        <RouterLink class="navigate" to="/signup">Sign Up</RouterLink>
        <RouterLink class="navigate" to="/signin">Sign In</RouterLink>
      </nav>
    </header>
    <RouterView />
    <div class="header">
      <form @submit.prevent="submit" class="form">
        <div class="form1">
          <label for="email">Email</label>
          <input type="email" required v-model="user.Email" id="email" class="form2">
        </div>
        <div class="form1">
          <label for="password">Password</label>
          <input type="password" required v-model="user.Password" id="password" class="form2">
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/lib/supabaseClient.js'
import { userStore } from '@/stores/store.js'

export default {
  data() {
    return {
      user: {
        Email: '',
        Password: ''
      },
    }
  },
  methods: {
    async login() {
      try {
        const store = userStore
        const { user, session, error } = await supabase.auth.signInWithPassword({
          email: this.user.Email,
          password: this.user.Password
        })

        if (error) {
          console.error(error.message)
          alert('Wrong password or email')
        } else {
          store.isUserLoggedIn = true
          this.$router.push('/home')
        }
      } catch (error) {
        console.error(error.message)
      }
    },
    submit() {
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