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
import {supabase} from '@/lib/supabaseClient.js'
export default {
  data() {
    return {
      users: [],

      user: {
        Username: '',
      }
    };
  },
  methods: {

    Submit() {
      this.users.push(this.user)
      this.user = {Username:'',};
      console.log(this.users)
      this.users.forEach(async(user) => {
          let { data, error } = await supabase.from('profiles')
          .update({Username: user})
          .select().eq('id',1)    
          if (error) {
  console.error(error.message);
   } else {
      console.log(data);        
     }});
    }}}
         


</script>

<style scoped>

</style>
<!-- 
this.users.forEach((user) => {
    supabase.from('profiles').update({Username: user})
        .then(({ data, error }) => {
            if (error) {
                console.error(error.message);
            } else {
                console.log(data);
            }
        }); -->