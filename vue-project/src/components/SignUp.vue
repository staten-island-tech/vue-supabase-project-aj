<template>
    <div class="header">
      <form @submit.prevent="Submit">
        <label>Username</label>
        <input type="text" required v-model="user.Username" id="name">
        <label>Password</label>
        <input type="password" required v-model="user.Password" id="pass">
      </form>
  
      <button type="submit" class=buttonSignup @click="Submit">Submit</button>
      <br/>
      You typed:<br/>
      Username: {{user.Username}}<br/>
      Password: {{user.Password}}<br/>
      <h3></h3>
  
    </div>
  </template>
  
  <script>
import {supabase} from '@/lib/supabaseClient.js'

  export default {
    data() {
      return {
        users: [],
  
        user: {
          Username: '',
          Password: '',
        }
      };
    },
    methods: {
  
     Submit() {
        this.users.push(this.user)
        this.user = {Username:'', Password:'',};
        console.log(this.users)
        this.users.forEach(async(user) => {
          let { data, error } = await supabase.auth.signUp({
  email: user.Username,
  password: user.Password
    });
if (error) {
  console.error(error.message);
   } else {
      console.log(data);
                    
     }
     },
    )
    document.querySelector("h3").textContent = ("You have signed up! Click login in to open app");
  }}}

  //       supabase.from('Users').insert([user])
  //           .then(({ data, error }) => {
  //               if (error) {
  //                   console.error(error.message);
  //               } else {
  //                   console.log(data);
                    
  //               }
  //           });
  //   });
  
  //     },
  //   }
  // }
  

  </script>

  
  <style scoped>
  .header{
    flex: auto;
    align-items: center;
    font-size: 2rem;
    text-align: center;
    padding-top: 10rem;
  }
  
  </style>