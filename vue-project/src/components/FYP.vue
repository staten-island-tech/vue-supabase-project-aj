<template>
    <div>
        <header>
      <nav>
         <RouterLink class="" to="/"></RouterLink >

         <RouterLink class="navigate"to="/FYP">FYP</RouterLink>
         <RouterLink class="navigate"to="/Friends">Friends</RouterLink>
         <RouterLink class="navigate"to="/Profile">Friends</RouterLink>
   
      </nav>
  </header>
    </div>
    <div>
        <h1>FYP</h1>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
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
</style>
  