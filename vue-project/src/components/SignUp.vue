<template>
    <div class="header">
        <form name="login-form" @submit.prevent="login(username, password)">
      <div>
          <label for="username">Username: </label>
          <input id="username" type="text" v-model="username">
      </div>
      <div>
          <label for="password">Password: </label>
          <input id="password" type="text" v-model="password">
      </div>
          <!-- <button @click=" add(username)"class="submit-button" type="submit"> Login </button> -->
  </form>
    </div>
</template>

<script setup>
// import { reactive } from 'vue'
// const add = function(x){
//   form.username.push(x)
// }
// const form = reactive({
//     username: "",
//     password: "",
// })
// import supabase from '@/lib/supabaseClient.js'
// const { error } = await supabase
//   .from('Users')
//   .insert({ id: 1, Username: username.value})
// error
</script>

<style scoped>
.header{
    font-size: 2rem;
  align-items: center;
  text-align: center;
  flex: auto;
  padding-top: 50px;
}
</style>