<template>
    <br>
    <div>
        <header class="header">
      <nav>
  
         <RouterLink class="navigate"to="/fyp">FYP</RouterLink>
         <RouterLink class="navigate"to="/friends">Friends</RouterLink>
         <RouterLink class="navigate"to="/profile">Profile</RouterLink>
   
      </nav>
  </header>
    </div>
      <div>
          <h1 class="page">FYP</h1>
          <div class="header">
      <form @submit.prevent="Submit" class="form">
        <div class="form1">
          <label for="namee">Comment</label>
          <input type="text" required v-model="user.comment" id="comment" class="form2">
        </div>
        <button type="submit" class="button">Submit</button>
        </form>
          </div>
      </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient.js'

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
        supabase.from('Users').insert([user])
            .then(({ data, error }) => {
                if (error) {
                    console.error(error.message);
                } else {
                    console.log(data);
                }
            });
    });
    
  },
    }
  }

  </script>
  
  <style >
  .body{
      align-items: center;
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
      align-items: center;
      justify-content: center;
      margin: 50px;
    }
    .navigate:hover {
      background-color: rgb(138, 198, 218); 
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
  }
  .page{
    align-items: center;
    justify-content: center;
  }
  </style>