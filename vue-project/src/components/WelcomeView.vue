<template>
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
import { supabase } from '@/lib/supabaseClient.js'
import { RouterLink, RouterView } from 'vue-router'
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
          this.$router.push('/homee')
        }
      } catch (error) {
        console.error(error.message)
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
</style>
