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
    </header>
  </div>
  <h1 class="poop">Friends</h1>
  <div class="card-container">
    <PeopleCard
      v-for="user in users"
      :key="user.id"
      :user="user"
    />
  </div>
<div class="poopy">
  <h2>Your Following:</h2>
  <h3> 
  </h3>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PeopleCard from '@/components/PeopleCard.vue';
import AboutView from '@/views/AboutView.vue';
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

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}
.poop{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.poopy{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>