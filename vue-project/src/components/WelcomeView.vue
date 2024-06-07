<template>
  <br>
  <div>
    <header class="header">
      <nav>
        <RouterLink class="navigate" to="/fyp">FYP</RouterLink>
        <RouterLink class="navigate" to="/friends">Friends</RouterLink>
        <RouterLink class="navigate" to="/profile">Profile</RouterLink>
      </nav>
      <AboutView/>
      <div>
      </div>
    </header>
  </div>
  <div>
    <h1 class="page"> Welcome, {{ authStore.user.username }}!</h1>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/counter'; 
import { RouterLink } from 'vue-router';
import { supabase } from '@/lib/supabaseClient.js';
import AboutView from '@/views/AboutView.vue';

const authStore = useAuthStore();

const submit = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    const { data: store, error } = await supabase
      .from('profiles')
      .select('Username')
      .eq('id', user.id)
      .single();

    if (error) {
      console.log(error.message);
    } else {
      authStore.setUser({ username: store.Username }); 
    }
  } catch (error) {
    console.log('Unexpected error:', error);
  }
};

submit(); 
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
    flex: auto;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  padding-top: 20rem;
  }
  
  
  </style>
    
