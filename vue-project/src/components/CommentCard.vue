<template>
    <div class="comment-card">
      <div class="comment-header">
        <img class="profile-pic" src="https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg" alt="Profile Picture">
        <p class="comment-id">Posted by {{ username || 'no username'}} </p>
      </div>
      <h2 class="comment-text">{{ comment.Comment }}</h2>
    </div>
  </template>
  
  <script setup>
   import { supabase } from '@/lib/supabaseClient.js'
   import { onMounted, ref } from 'vue'

   const username = ref(null)

  const props = defineProps({
    comment: Object,
    
  });

onMounted(async ()=> {
  let userid = props.comment.id
  let user = await supabase.from('profiles').select('*').eq('id', userid)
  user = user.data[0]
  username.value = user.Username
})
  </script>
  
  <style scoped>
  .comment-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .comment-header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .profile-pic {
    border-radius: 50%;
    margin-right: 0.5rem;
    width: 4rem;
  }
  
  .comment-id {
    font-weight: bold;
  }
  
  .comment-text {
    font-size: 1.2rem;
    text-align: center;
  }
  </style>