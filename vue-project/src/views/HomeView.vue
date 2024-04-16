<template>
  <div class="header">
<div>
  <form name="login-form" @submit.prevent="login(username, password)">
      <div>
          <label for="username">Username: </label>
          <input id="username" type="text" v-model="username">
      </div>
      <div>
          <label for="password">Password: </label>
          <input id="password" type="text" v-model="password">
      </div>
          <button class="submit-button" type="submit"> Login </button>
  </form>
</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header{
  font-size: 2rem;
  align-items: center;
  text-align: center;
  flex: auto;
}
</style>