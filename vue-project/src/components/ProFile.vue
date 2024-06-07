 <template>
  <div>
  <img :src="imageUrl" alt="User Avatar" />
</div>
      <form>
      <label for="upload" class="upload">Upload a profile picture</label>
      <input type="file" id="upload" accept="image/*" class="class" @change="uploadFile" />
    </form>
  <div>
    <br>
      <header class="header">
    <nav>

       <RouterLink class="navigate"to="/fyp">FYP</RouterLink>
       <RouterLink class="navigate"to="/friends">Friends</RouterLink>
       <RouterLink class="navigate"to="/profile">Profile</RouterLink>
       <RouterLink class="navigate" to="/home">Home</RouterLink>

    </nav>
</header>
  </div>
  <div>
  <h1 class="page">Profile</h1>
    </div>
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
<script>
  import { RouterLink } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient.js'
  import { useAuthStore } from '@/stores/counter'; 
  import { ref, onMounted } from 'vue';

  const authStore = useAuthStore();

  export default {
    data() {
      const imageUrl = ref('');
      const imageUrlWithTimestamp = ref('');
      const user = ref({
        Username: ''
      });

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

          // Store the image URL in localStorage
          localStorage.setItem('userAvatar', imageUrl.value);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

      onMounted(async () => {
        const storedImageUrl = localStorage.getItem('userAvatar');
        if (storedImageUrl) {
          imageUrl.value = storedImageUrl;
        }

        await getUser();
      });

      return {
        imageUrl,
        imageUrlWithTimestamp,
        uploadFile,
        user
      };
    },
    methods: {
      async Submit() {
        try {
          const { data: { user } } = await supabase.auth.getUser()

          let { error } = await supabase
            .from('profiles')
            .update({ Username: this.user.Username })
            .eq('id', user.id)

          if (error) {
            console.log(error.message)
          } else {
            authStore.$patch({
              username: user.Username
            })
            console.log('Username updated successfully')
            this.user.Username = ''
          }
        } catch (error) {
          console.log('Unexpected error:', error)
        }
      }
    }
  }
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
