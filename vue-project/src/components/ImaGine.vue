<template>
    <div>
      <img :src="imageUrlWithTimestamp" alt="User Avatar" />
    </div>
    <header class="header">
      <nav>
        <RouterLink class="navigate" to="/fyp">FYP</RouterLink>
        <RouterLink class="navigate" to="/friends">Friends</RouterLink>
        <RouterLink class="navigate" to="/profile">Profile</RouterLink>
      </nav>
    </header>
  
    <form>
      <label for="upload" class="upload">Upload a profile picture</label>
      <input type="file" id="upload" accept="image/*" class="class" @change="uploadFile" />
    </form>
    
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';

const imageUrl = ref('');
const imageUrlWithTimestamp = ref('');

const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error getting user:', error);
    return null;
  }
  return data.user;
};

const uploadFile = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const user = await getUser();
  if (!user) return;

  try {
    await supabase.storage.from('avatars').remove([user.id]);
    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(user.id, file, { contentType: file.type });

    if (error) throw error;
    console.log('File uploaded successfully:', data);

    const { data: publicUrlData, error: publicUrlError } = supabase.storage.from('avatars').getPublicUrl(user.id);
    if (publicUrlError) throw publicUrlError;

    imageUrl.value = publicUrlData.publicUrl;
    imageUrlWithTimestamp.value = imageUrl.value + '?timestamp=' + new Date().getTime();


  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

onMounted(async () => {
  await getUser();
});
</script>
   <style scoped>


 
 </style>