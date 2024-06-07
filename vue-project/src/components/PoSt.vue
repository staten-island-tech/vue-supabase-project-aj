<template>
    <div>
      <div v-if="images.length > 0">
        <img v-for="image in images" :key="image.url" :src="image.url" alt="User Avatar" @error="handleImageError(image.url)" />
      </div>
      <div v-else>
        No images found.
      </div>
      <div v-if="imageLoadError">
        {{ imageLoadError }}
      </div>
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
  
  const images = ref([]);
  const imageLoadError = ref(null);
  
  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error getting user:', error);
      return null;
    }
    return data.user;
  };
  
  const getImages = async (user) => {
    try {
      const { data: imagesData, error: imagesError } = await supabase.storage
        .from('posts')
        .list(`${user.id}`);
  
      if (imagesError) throw imagesError;
      
      console.log('Images data:', imagesData); // Log the retrieved images data
  
      // Construct image URLs
      const urls = imagesData.map(image => ({
        url: image.url,
        name: image.name
      }));
  
      console.log('Image URLs:', urls); // Log the constructed image URLs
  
      images.value = urls;
    } catch (error) {
      console.error('Error getting images:', error);
    }
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
  
      await getImages(user); // Refresh images after upload
  
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  const handleImageError = (imageUrl) => {
    imageLoadError.value = `Error loading image at ${imageUrl}.`;
  };
  
  onMounted(async () => {
    const user = await getUser();
    if (user) {
      await getImages(user); // Load images on component mount
    }
  });
  </script>
  