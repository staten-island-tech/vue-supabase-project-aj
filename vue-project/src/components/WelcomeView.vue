<template>
  <br>
  <div>
    <header class="header">
      <nav>
        <RouterLink class="navigate" to="/fyp">FYP</RouterLink>
        <RouterLink class="navigate" to="/friends">Friends</RouterLink>
        <RouterLink class="navigate" to="/profile">Profile</RouterLink>
      </nav>
      <div>
      </div>
    </header>
  </div>
  <div>
    <h1 class="page"> Welcome, {{ username}}!</h1>
  </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';
// import { supabase } from '@/lib/supabaseClient.js';

// const username = ref('');

// const getUserDetails = async () => {
//   const { data: { user }, error } = await supabase.auth.getUser();
//   if (error) {
//     console.error('Error fetching user details:', error.message);
//     return;
//   }

//   if (user) {
//     const { data: userDetails, error: userDetailsError } = await supabase
//       .from('users')
//       .select('username')
//       .eq('id', user.id)
//       .single();

//     if (userDetailsError) {
//       console.error('Error fetching user details:', userDetailsError.message);
//     } else {
//       username.value = userDetails.username;
//     }
//   }
// };

// onMounted(() => {
//   getUserDetails();
// });
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
    
