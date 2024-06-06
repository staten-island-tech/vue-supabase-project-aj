<!-- <script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { useAuthStore } from '@/stores/counter';
const userStore = useAuthStore();

 async function upload(e) {
  const file = e.target.files[0]
  const { data } = await supabase.storage.from('avatars').upload(file) 
}
upload(); 
   const uploadFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(file, { contentType: 'image/png' });

      if (error) throw error;
      console.log('File uploaded successfully:', data);
      
    } catch (error) {
      console.error('Error uploading file:');
      
    }
  }; 



</script>

<template>
        <header class="header">
      <nav>
  
         <RouterLink class="navigate"to="/fyp">FYP</RouterLink>
         <RouterLink class="navigate"to="/friends">Friends</RouterLink>
         <RouterLink class="navigate"to="/profile">Profile</RouterLink>
   
      </nav>
  </header>
  
  <form>
    <label for="upload" class="upload">Upload a profile picture</label>
    <input type="file" id="upload" accept="image/*" @change="uploadFile" />
  </form>
</template>
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
</style> -->
<template>
  <div>
    <input type="file" @change="handleFileChange" ref="fileInput" />
    <button @click="uploadProfilePicture">Upload</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from the 'uuid' library

const fileInput = ref(null);

const handleFileChange = () => {
  // Handle file selection (if needed)
};

const uploadProfilePicture = async () => {
  const file = fileInput.value.files[0];
  if (!file) {
    console.error('No file selected.');
    return;
  }

  const filename = `${uuidv4()}-${file.name}`;
  try {
    const { data, error } = await supabase.storage.from('avatars').upload(filename, file);
    if (error) {
      console.error('Error uploading profile picture:', error.message);
    } else {
      console.log('Profile picture uploaded successfully:', data.Key);
      // Update user's profile picture URL in your database
      // Example: supabase.from('users').update({ profile_picture_url: data.Key }).eq('user_id', userId);
    }
  } catch (err) {
    console.error('An error occurred during upload:', err);
  }
};
</script>




