<template>
  <div>
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
          <button class="sign-in" type="submit"> Sign In</button>
  </form>
</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>