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
  font-size: 2rem;
  align-items: center;
  text-align: center;
  flex: auto;
}
.navigate{
padding-left: 30px;
padding-right: 30px;
}
</style>
