<template>
    <div>
      <br>
        <header class="header">
      <nav>
  
         <RouterLink class="navigate"to="/fyp">FYP</RouterLink>
         <RouterLink class="navigate"to="/friends">Friends</RouterLink>
         <RouterLink class="navigate"to="/profile">Profile</RouterLink>
   
      </nav>
  </header>
</div>

  <div>
    <h1 class="page">Profile</h1>
    <br>

    <div class="box">

<v-card  id="rounded-card">
  <v-img  src="image.jpg" height="300"></v-img>
     <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
             style="z-index: 0"
          >
            <h1>Circle Card</h1>
          </v-overlay>
        </v-fade-transition>       
  </v-card>

      <div class="header">
        <form @submit.prevent="Submit" class="form">
      <div class="form1">
        <label for="namee">Username</label>
        <input type="text" required v-model="user.Username" id="namee" class="form2">
      </div>
      <button type="submit" class="button">Submit</button>
    </form>
    </div>
  </div>

      <div>
        <h3 class="doe"></h3>
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
    .box {
  justify-content:space-around;
  position: center;
  align-items:baseline;
  text-align: center;
  offset-distance: 50%;
  display: flex;
  width: 600px;
  height: 600px;
  border-radius: 5px;
  border:1px solid black;
  margin: 0 auto;
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
  .doe{
    align-items: center;
    justify-content: center; 
  }

  .rounded-card{
    border-radius:50px;
}
.form1{
  align-items: center;
  justify-content: center;
}
#rounded-card {
  border-radius: 50%; 
  min-height: 100px;
  min-width: 100px;
  border:1px solid black;
  align-items:baseline;
}

  </style>