<template>
  <div class="header">
    <form @submit.prevent="Submit">
      <div> <label>Username </label>
        <input type="text" required v-model="user.Username" id="name">
      </div>
      <div> <label>Password </label>
        <input type="password" required v-model="user.Password" id="pass">
      </div>
    </form>

    <button type="submit" class=buttonSignup @click="Submit">Submit</button>

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
        Password: '',
      }
    };
}}


</script>


<style scoped>
.header{
  flex: auto;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  padding-top: 10rem;
  font-family:Arial, Helvetica, sans-serif;
}

</style>