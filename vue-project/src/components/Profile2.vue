<template>
    <div class="popup">
        <div class="popup-inner"></div>

        <div class="header">
        <form @submit.prevent="Submit" class="form">

      <div class="form1">
        <label for="namee">Username</label>
        <input type="text" required v-model="user.Username" id="namee" class="form2">
      </div>

      <button type="submit" class="button">Submit</button>
        </form>
        <button class="popup-close">
            Close
        </button>
    </div>
</div>
</template>
<script>
  import { RouterLink } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient.js'

  export default {
  data() {
    return {
      user: {
        Username: ''
      }
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
          console.log('Username updated successfully')
          document.querySelector("h3").textContent = (this.user.Username);
        }
      } catch (error) {
        console.error('Unexpected error:', error)
      }
      this.user.Username;
    }
  }
}
const { data, error } = await supabase
  .storage
  .updateBucket('avatars', {
    public: false,
    allowedMimeTypes: ['image/png'],
    fileSizeLimit: 1024,
  })
  </script>
<style  scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  }
.popup{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:99;
    background-color: rgba(0,0,0, 0.2);
    display: flex;
    align-items: cetner;
    justify-content: center;
}

.popup-inner{
    background-color: white;
    padding: 32px;
}
</style>

