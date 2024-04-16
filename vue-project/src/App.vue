
<template>
  <div>
    <div>
      <form name="login-form" @submit.prevent="clear">
        <div>
          <label class= "username" ref="input-user" for="username">Username: </label>
          <input id="username" type="text" v-model="username">
        </div>
        <div>
          <label class= "password" ref="input-pass" for="password">Password: </label>
          <input id="password" type="password" v-model="password">
        </div>
        <button  type="submit"> Login </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const password = ref ("");
const username = ref ("");
const input = ref("");

function clear(){
console.log("hi");
password.innerHTML= "";

}
</script>


<style></style>