<template>
  <div>
    <br>
    <header class="header">
      <nav>
        <RouterLink class="navigate" to="/fyp">FYP</RouterLink>
        <RouterLink class="navigate" to="/friends">Friends</RouterLink>
        <RouterLink class="navigate" to="/profile">Profile</RouterLink>
        <RouterLink class="navigate" to="/home">Home</RouterLink>
      </nav>
      <AboutView/>
    </header>
    
  </div>
  <div>
    <h1 class="pagee">Profile</h1>
  </div>
  <div v-if="imageUrl" class="profile-avatar">
        <img :src="imageUrl" alt="User Avatar" @error="handleImageError(imageUrl)" class="avatar" />
      </div>
      <div class="img" v-else>
        No image found.
      </div>
      <div v-if="imageLoadError">
        {{ imageLoadError }}
      </div>
  
      <form class="upload-form"> 
        <label for="upload" class="upload-label">Upload a profile picture</label>
        <input type="file" id="upload" accept="image/*" class="upload-input" @change="uploadFile" />
      </form>
  <div class="header">
    <form @submit.prevent="Submit" class="form">
      <div class="form1">
        <label for="namee">Username</label>
        <input type="text" required v-model="user.Username" id="namee" class="form2">
      </div>
      <button type="submit" class="button">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { supabase } from '@/lib/supabaseClient.js';
import { useAuthStore } from '@/stores/counter';
import { ref, onMounted } from 'vue';
import { useImageStore } from '@/stores/image.js';
import AboutView from '@/views/AboutView.vue';

const authStore = useAuthStore();
const imageStore = useImageStore();
  const imageUrl = ref(imageStore.imageUrl);
  const imageLoadError = ref(null);
  

let user = { Username: '' };

const Submit = async () => {
  try {
    const { data: { user: currentUser } } = await supabase.auth.getUser();
 
    let { error } = await supabase
      .from('profiles')
      .update({ Username: user.Username })
      .eq('id', currentUser.id);

    if (error) {
      console.log(error.message);
    } else {
      authStore.$patch({
        username: user.Username
      });
      console.log('Username updated successfully');
      alert('Username updated successfully')
    }
  } catch (error) {
    console.log('Unexpected error:', error);
  }
};
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
      const filePath = `${user.id}/${file.name}`;
  
      const { data, error } = await supabase.storage
        .from('posts')
        .upload(filePath, file, { contentType: file.type });
  
      if (error) throw error;
      console.log('File uploaded successfully:', data);
  
  
      const imageUrlValue = URL.createObjectURL(file);
      imageUrl.value = imageUrlValue;
  
      imageStore.setImageUrl(imageUrlValue);
  
    } catch (error) {
      console.error('Error uploading file:', error);
      imageLoadError.value = `Error uploading file: ${error.message}`;
    }
  };
  
  const handleImageError = (imageUrl) => {
    imageLoadError.value = `Error loading image at ${imageUrl}.`;
  };
  
  onMounted(async () => {
    const user = await getUser();
    if (user) {
      imageUrl.value = imageStore.imageUrl;
    }
  });
</script>


<style scoped>

.profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .profile-content {
    margin-top: 40px; 
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-avatar {
    margin-bottom: 20px;
    text-align: center;
  }
  .img{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .avatar {
    max-width: 200px;
    border-radius: 50%;
  }
  
  .upload-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .upload-label {
    cursor: pointer;
    background-color: rgb(57, 188, 231);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .upload-input {
    display: none;
  }
  
  .pagee {
    margin-top: 20px;
    font-size: 2rem;
    text-align: center;
  }
  
  .form-container {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
  }
  
  .profile-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 100%;
  }
  
  .form-label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-button {
    background-color: rgb(57, 188, 231);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .img{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .submit-button:hover {
    background-color: rgb(138, 198, 218);
  }
</style>
