<template>
    <div class="header">
      <form @submit.prevent="Submit">
        <div>
        <label>Username: </label>
        <input type="text" required v-model="user.Username" id="name">
        </div>
        <div>
        <label>Password: </label>
        <input type="password" required v-model="user.Password" id="pass">
        </div>
      </form>
  
      <button type="submit" class=buttonSignup @click="Submit">Submit</button>
      <br/>
      You typed:<br/>
      Username- {{user.Username}}<br/>
      Password- {{user.Password}}<br/>

      <h3></h3>
    </div>
  </template>
  
  <script>
 import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://dctworfsniezubogathx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdHdvcmZzbmllenVib2dhdGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMzk3ODEsImV4cCI6MjAyNzgxNTc4MX0.3TNwmbvfuxmSan_Ma7J7SyF7X100nqkxp5v_DNimGGo')

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
        this.users.forEach((user) => {
          let { data, error } = supabase.auth.signUp({
  email: user.Username,
  password: user.Password
    });
if (error) {
  console.error(error.message);
   } else {
      console.log(data);
                    
     }
     },
    )}}}

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
