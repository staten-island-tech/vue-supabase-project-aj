<template>
  <div>
    <div>
      <form name="login-form" @submit.prevent="login(username, password)">
        <div>
          <label ref="input-user" for="username">Username: </label>
          <input id="username" type="text" v-model="username">
        </div>
        <div>
          <label ref="input-pass" for="password">Password: </label>
          <input id="password" type="text" v-model="password">
        </div>
        <button @click="clear()" type="submit"> Login </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const password = ref ("");
const username = ref ("");
const input = ref("");

console.log(input)
async function login(username,){

}
</script>

<style></style>