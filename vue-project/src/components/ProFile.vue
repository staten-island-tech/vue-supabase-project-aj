<template>
  <div class="profile-page">
    <div class="nav-container">
      <br>
      <header class="header">
        <nav>
          <RouterLink class="navigate" to="/fyp">FYP</RouterLink>
          <RouterLink class="navigate" to="/friends">Friends</RouterLink>
          <RouterLink class="navigate" to="/profile">Profile</RouterLink>
          <RouterLink class="navigate" to="/home">Home</RouterLink>
        </nav>
      </header>
    </div>
    <div class="profile-content">
      <div class="profile-avatar">
        <img :src="imageUrl" alt="User Avatar" class="avatar" />
      </div>
      <form class="upload-form">
        <label for="upload" class="upload-label">Upload a profile picture</label>
        <input type="file" id="upload" accept="image/*" class="upload-input" @change="uploadFile" />
      </form>
      <h1 class="page">Profile</h1>
      <h3></h3>
      <div class="form-container">
        <form @submit.prevent="Submit" class="profile-form">
          <div class="form-group">
            <label for="namee" class="form-label">Username</label>
            <input type="text" required v-model="user.Username" id="namee" class="form-input">
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { useAuthStore } from '@/stores/counter'
import { ref, onMounted } from 'vue'

const authStore = useAuthStore()

export default {
  data() {
    return {
      imageUrl: ref(''),
      imageUrlWithTimestamp: ref(''),
      user: ref({
        Username: ''
      })
    }
  },
  methods: {
    async getUser() {
      const { data, error } = await supabase.auth.getUser()
      if (error) {
        console.error('Error getting user:', error)
        return null
      }
      return data.user
    },
    async uploadFile(event) {
      const file = event.target.files[0]
      if (!file) return

      const user = await this.getUser()
      if (!user) return

      try {
        await supabase.storage.from('avatars').remove([user.id])
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(user.id, file, { contentType: file.type })

        if (error) throw error
        console.log('File uploaded successfully:', data)

        const { data: publicUrlData, error: publicUrlError } = supabase.storage.from('avatars').getPublicUrl(user.id)
        if (publicUrlError) throw publicUrlError

        this.imageUrl = publicUrlData.publicUrl
        this.imageUrlWithTimestamp = this.imageUrl + '?timestamp=' + new Date().getTime()

      
        localStorage.setItem('userAvatar', this.imageUrl)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    },
    async fetchProfileImage() {
      const user = await this.getUser()
      if (!user) return

      try {
        const { data: publicUrlData, error: publicUrlError } = supabase.storage.from('avatars').getPublicUrl(user.id)
        if (publicUrlError) throw publicUrlError

        this.imageUrl = publicUrlData.publicUrl
        this.imageUrlWithTimestamp = this.imageUrl + '?timestamp=' + new Date().getTime()
      } catch (error) {
        console.error('Error fetching profile image:', error)
      }
    },
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
          document.querySelector("h3").textContent = ("Username updated successfully");
        }
      } catch (error) {
        console.log('Unexpected error:', error)
      }
    }
  },
  async mounted() {
    const storedImageUrl = localStorage.getItem('userAvatar')
    if (storedImageUrl) {
      this.imageUrl = storedImageUrl
    }

    await this.fetchProfileImage()
  }
}
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

.page {
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

.submit-button:hover {
  background-color: rgb(138, 198, 218);
}
</style>
