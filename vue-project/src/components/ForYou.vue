<template>
  <br>
  <div>
    <header class="header">
      <nav>
        <RouterLink class="navigate" to="/fyp">FYP</RouterLink>
        <RouterLink class="navigate" to="/friends">Friends</RouterLink>
        <RouterLink class="navigate" to="/profile">Profile</RouterLink>
      </nav>
    </header>
  </div>
  <div>
    <h1 class="page">FYP</h1>
    <div class="header">
      <form @submit.prevent="submit" class="form">
        <div class="form1">
          <label for="comment">Comment</label>
          <input type="text" required v-model="user.Comment" id="comment" class="form2">
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
      <CommentCard
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CommentCard from "@/components/CommentCard.vue";
import { supabase } from '@/lib/supabaseClient.js';

const comments = ref([]);
const user = ref({ Comment: '' });

const get = async () => {
  let { data: comment, error } = await supabase.from('posts').select('*');
  if (error) {
    console.log(error);
  } else {
    comments.value = comment;
  }
};

const submit = async () => {
  const { data, error } = await supabase.from('posts').insert([user.value]);
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
    get(); 
    user.value.Comment = ''; 
  }
};

onMounted(() => {
  get();
});
</script>
  
  <style >
  .body{
      align-items: center;
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
      align-items: center;
      justify-content: center;
      margin: 50px;
    }
    .navigate:hover {
      background-color: rgb(138, 198, 218); 
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
  }
  .page{
    align-items: center;
    justify-content: center;
  }
  </style>