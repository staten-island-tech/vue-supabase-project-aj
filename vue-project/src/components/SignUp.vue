<template>
 <header>
      <nav>
         <RouterLink class="" to="/"></RouterLink >

         <RouterLink class="navigate"to="/signup">Sign Up</RouterLink>
         <RouterLink class="navigate"to="/signin">Sign In</RouterLink>
   
      </nav>
  </header>
  <div class="header">
    <form @submit.prevent="Submit" class="form">
      <h1> Sign Up </h1>
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
  import { RouterLink } from 'vue-router'
import {supabase} from '@/lib/supabaseClient.js'

  export default {
    data() {
      return {
        users: [],
        user: {
          Email:'',
          Password: '',
        }
      };
    },
    methods: {
  
     Submit() {
        this.users.push(this.user)
        this.user = {Email:'', Password:'',};
        console.log(this.users)
        this.users.forEach(async(user) => {
          let { data, error } = await supabase.auth.signUp({
  email: user.Email,
  password: user.Password,
 });
if (error) {
  console.error(error.message);
   } else {
      console.log(data);        
     }
     },
    )
    document.querySelector("h3").textContent = ("You have signed up! Click login in to open app");
  }
}}
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
  border-radius: 4px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(163, 207, 221);
}
  </style>
