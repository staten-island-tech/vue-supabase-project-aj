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
      <h1 class="page">Friends</h1>
       <PeopleCard
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import PeopleCard from '@/components/PeopleCard.vue'
import { supabase } from '@/lib/supabaseClient.js';

const users = ref([]);

const get = async () => {
  let { data: ppl, error } = await supabase.from('profiles').select('*');
  if (error) {
    console.log(error);
  } else {
    users.value = ppl;
  }
};

onMounted(() => {
  get();
});
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