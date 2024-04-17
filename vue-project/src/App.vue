<template>
  <div>
    <form @submit.prevent="Submit">
      <label>Username</label>
      <input type="text" required v-model="user.name" id="name">
      <label>Password</label>
      <input type="password" required v-model="user.pass" id="pass">
    </form>

    <button type="submit" class=buttonSignup @click="Submit">Submit</button>
    <br/>
    You typed:<br/>
    Username: {{user.name}}<br/>
    Password: {{user.pass}}<br/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],

      user: {
        name: '',
        pass: '',
        number: ''
      }
    };
  },
  methods: {

    Submit() {
      // do some checking here
      this.users.push(this.user)
      this.user = {name:'', pass:'',};
      console.log(this.users)

    },


  }
}
</script>