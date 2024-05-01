<script setup>
<<<<<<< HEAD
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
=======
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
>>>>>>> 7d2f815d3ea21372074993d3b256fb824d3dd9a8
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
  background-color: lightblue;
  color: white; 
  border-radius: 5px; 
  cursor: pointer; 
  text-decoration: none; 
  transition: background-color 0.3s; 
}
.navigate:hover {
  background-color: lightskyblue; 
}
</style>
