<template>
    <div>
        <button class="leave"@click.prevent="logout">Log Out</button>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js';
import { userStore } from '@/stores/store.js';
import { useRouter } from 'vue-router';

const store = userStore();
const router = useRouter();

async function logout() {
   try {
    store.isUserLoggedIn = true;
     const { error } = await supabase.auth.signOut();
     if (error) throw error;
     router.push('/');
   } catch (error) {
     if (error instanceof Error) {
       console.log(error)
     }
   } finally {
    store.isUserLoggedIn = false;
   }
 }
</script>

<style  scoped>
.leave{
  position: absolute;
  top: 20px; 
  right: 20px; 
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-self: center;
}
</style>