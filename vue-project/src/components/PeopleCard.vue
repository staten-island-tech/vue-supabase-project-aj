<template>
  <div v-if="props.user" class="card">
    <h2>{{ props.user.Username || 'no username' }}</h2>
    <button class="button" @click="toggleFollow">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';

const props = defineProps({
  user: Object,
});

const currentUser = ref(null)

const isFollowing = ref(false);
const buttonText = ref('Follow');

onMounted(async()=>{
  const { data: { user } } = await supabase.auth.getUser()
  let { data: ppl, error } = await supabase.from('profiles').select('*').eq( 'id', user.id ).limit(1);
  currentUser.value = ppl[0]
})

async function followUser(username) {
  if (currentUser.value) {
    const { data, error } = await supabase
      .from('follows')
      .insert([{ follower_id: currentUser.value.ID, following_id: props.user.ID }]);
    console.log(error)
  } else {
    console.error('Current user is not defined.');
  }
}

async function getFollowers(userId) {
  try {
    const { data, error } = await supabase
      .from('follows')
      .select('follower_id')
      .eq('following_id', userId);
    if (error) {
      throw error;
    }
    console.log('Followers:', data);
  } catch (error) {
    console.error('Error fetching followers:', error.message);
  }
}

async function unfollowUser(currentUser, followedUserId) {
  try {
    const { error } = await supabase
      .from('follows')
      .delete()
      .eq('follower_id', currentUser.id)
      .eq('following_id', followedUserId);
    if (error) {
      throw error;
    }
    console.log('Successfully unfollowed user');
  } catch (error) {
    console.error('Error unfollowing user:', error.message);
  }
}

async function toggleFollow() {
  if (props.user) {
    isFollowing.value = !isFollowing.value;
    buttonText.value = isFollowing.value ? 'Following' : 'Follow';
    if (isFollowing.value) {
      followUser(props.user.Username);
    } else {
    }
  }
}



</script>


<style scoped>
.card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 0.5rem;
  }
  
  .button {
    background-color: #3b5998;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #2d4373;
  }
</style>
