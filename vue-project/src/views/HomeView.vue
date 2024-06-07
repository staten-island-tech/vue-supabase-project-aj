
<template>
   <header>
      <nav>
      

         <RouterLink class="navigate"to="/signup">Sign Up</RouterLink>
         <RouterLink class="navigate"to="/signin">Sign In</RouterLink>
   
      </nav>
  </header>
  <RouterView />
  <div class="poop">
  <div class="headerr">
    <h1>You need to log in first!</h1>
  </div>
</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  font-size: 2rem;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 10px 20px; 

}
.headerr{
  flex: auto;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  padding-top: 20rem;
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

