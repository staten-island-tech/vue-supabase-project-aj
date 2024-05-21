<script setup>

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
         <RouterLink class="" to="/"></RouterLink >

         <RouterLink class="navigate"to="/signup">Sign Up</RouterLink>
         <RouterLink class="navigate"to="/signin">Sign In</RouterLink>
   
      </nav>
  </header>
  <RouterView />

</template>

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
</style>
