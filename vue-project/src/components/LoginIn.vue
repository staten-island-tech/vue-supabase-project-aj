

<template>
    <div>
      <div>
        <form name="login-form" @submit.prevent>
          <div>
            <label class="username" ref="input-user" for="username">Username: </label>
            <input id="username" type="text" v-model="username">
          </div>
          <div>
            <label class="password" ref="input-pass" for="password">Password: </label>
            <input id="password" type="password" v-model="password">
          </div>
          <button onclick="document.getElementById('username').value = ''
            document.getElementById('password').value = ''
          " type="submit"> Login </button>
        </form>
      </div>
    </div>
  </template>
  <script setup>
  </script>
  
  
  <style></style>