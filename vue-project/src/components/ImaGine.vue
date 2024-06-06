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
  
  // Create refs for the image URL and timestamp
  const imageUrl = ref('');
  const imageUrlWithTimestamp = ref('');
  
  // Retrieve the current user's ID
  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error getting user:', error);
      return null;
    }
    return data.user;
  };
  
  // Function to upload the file
  const uploadFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const user = await getUser();
    if (!user) return;
  
    try {
      // First, delete the existing file if it exists
      await supabase.storage.from('avatars').remove([user.id]);
  
      // Upload the new file
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(user.id, file, { contentType: file.type });
  
      if (error) throw error;
      console.log('File uploaded successfully:', data);
  
      // Update the imageUrl to reflect the new upload
      const { data: publicUrlData, error: publicUrlError } = supabase.storage.from('avatars').getPublicUrl(user.id);
      if (publicUrlError) throw publicUrlError;
  
      imageUrl.value = publicUrlData.publicUrl;
      updateImageUrlWithTimestamp();
  
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  // Function to update the image URL with a timestamp to avoid caching issues
  const updateImageUrlWithTimestamp = () => {
    imageUrlWithTimestamp.value = `${imageUrl.value}?timestamp=${new Date().getTime()}`;
  };
  
  // Function to initialize the image URL
  const initializeImageUrl = async () => {
    const user = await getUser();
    if (!user) return;
  
    const { data: publicUrlData, error: publicUrlError } = supabase.storage.from('avatars').getPublicUrl(user.id);
    if (publicUrlError) {
      console.error('Error getting public URL:', publicUrlError);
      return;
    }
  
    imageUrl.value = publicUrlData.publicUrl;
    updateImageUrlWithTimestamp();
  };
  
  // Call the initialize function when the component mounts
  onMounted(async () => {
    await initializeImageUrl();
  });
  </script>
  