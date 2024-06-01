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
    <div class="post-section">
      <form @submit.prevent="submit" class="form">
        <div class="form-group">
          <label for="comment">Comment</label>
          <input type="text" required v-model="user.Comment" id="comment" class="form-input">
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
      <div class="comments-container">
        <CommentCard
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
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

<style scoped>
.page {
  text-align: center;
  margin-top: 1rem;
}

.post-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.button {
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-self: center;
}

.button:hover {
  background-color: #2d4373;
}

.comments-container {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>