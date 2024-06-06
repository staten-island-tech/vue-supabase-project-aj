 <script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { useAuthStore } from '@/stores/counter';
const userAuth = useAuthStore();

import { v4 as uuidv4 } from 'uuid';


    const uploadFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload( 'avatar1', file, { contentType: 'image/png' });

      if (error) throw error;
      console.log('File uploaded successfully:', data);
      
    } catch (error) {
      console.error('Error uploading file:');
      
    }
  };   
  const { data } = supabase.storage.from('avatars').getPublicUrl('avatar1.png');

  const imageUrl = ref('https://givenxncncbjahyqmfpn.supabase.co/storage/v1/object/public/avatars/avatar1');

 /*  const removeFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .remove( 'avatar1', file, { contentType: 'image/png' });

      if (error) throw error;
      console.log('File removed successfully:', data);
      
    } catch (error) {
      console.error('Error removed file:');
      
    }
  };  */



</script>

<template>
  <div>
    <img :src="imageUrl" alt="User Avatar" />
  </div>
        <header class="header">
      <nav>
  
         <RouterLink class="navigate"to="/fyp">FYP</RouterLink>
         <RouterLink class="navigate"to="/friends">Friends</RouterLink>
         <RouterLink class="navigate"to="/profile">Profile</RouterLink>
   
      </nav>
  </header>
  
  <form>
    <label for="upload" class="upload">Upload a profile picture</label>
    <input type="file" id="upload" accept="image/*" class="class" @change="uploadFile" />
<!--     <label for="remove" class="remove">Remove profile picture</label>
    <Button @change="removeFile">Remove</Button> -->
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
.upload{
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
.class{
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
</style> 





