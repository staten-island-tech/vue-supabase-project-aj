<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
         <RouterLink class="navigate" to="/">Log In</RouterLink >

         <RouterLink class="navigate"to="/signup">Sign Up</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header{
  font-size: 3rem;
  align-items: center;
  text-align: center;
  flex: auto;
  font-family:Arial, Helvetica, sans-serif;
}
.navigate{
padding-left: 30px;
padding-right: 30px;
}
</style>
