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
        console.error('Unexpected error:', error)
      }
    }
  }
}
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