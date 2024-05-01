<script setup>

</script>

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
