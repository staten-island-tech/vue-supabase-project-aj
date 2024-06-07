<template>

</template>

<script>
  import { RouterLink } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient.js'
  import { useAuthStore } from '@/stores/counter'; 
  import { ref, onMounted } from 'vue';// Initialize Supabase client
  const authStore = useAuthStore();

</script>



  
  