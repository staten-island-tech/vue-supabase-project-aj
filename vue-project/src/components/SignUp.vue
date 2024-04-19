<template>
    <div class="header">
      <form @submit.prevent="Submit">
        <label>Email</label>
        <input type="text" required v-model="user.Email" id="namee">
        <label>Username</label>
        <input type="text" required v-model="user.Username" id="name">
        <label>Password</label>
        <input type="password" required v-model="user.Password" id="pass">
      </form>
  
      <button type="submit" class=buttonSignup @click="Submit">Submit</button>
      <br/>
      You typed:<br/>
      Username: {{user.Username}}<br/>
      Password: {{user.Password}}<br/>
      <h3></h3>
  
    </div>
  </template>
  
  <script>
  
import {supabase} from '@/lib/supabaseClient.js'

  export default {
    data() {
      return {
        users: [],
  
        user: {
          Email:'',
          Username: '',
          Password: '',
        }
      };
    },
    methods: {
  
     Submit() {
        this.users.push(this.user)
        this.user = {Email:'',Username:'', Password:'',};
        console.log(this.users)
        this.users.forEach(async(user) => {
          let { data, error } = await supabase.auth.signUp({
  email: user.Email,
  password: user.Password,
  options: {
    data: {
      Username: user.Username,
    }}});
if (error) {
  console.error(error.message);
   } else {
      console.log(data);
      
                    
     }
     },
    )
  
    document.querySelector("h3").textContent = ("You have signed up! Click login in to open app");
 
  }
}}
Submit.then();{

}
// -- inserts a row into public.profiles
// create function public.handle_new_user()
// returns trigger
// language plpgsql
// security definer set search_path = public
// as $$
// begin
//   insert into public.profiles (id, first_name, age)
//   values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data['age']::integer);
//   return new;
// end;
// $$;

// -- trigger the function every time a user is created
// create trigger on_auth_user_created
//   after insert on auth.users
//   for each row execute procedure public.handle_new_user();

  //       supabase.from('Users').insert([user])
  //           .then(({ data, error }) => {
  //               if (error) {
  //                   console.error(error.message);
  //               } else {
  //                   console.log(data);
                    
  //               }
  //           });
  //   });
  
  //     },
  //   }
  // }
  

  </script>

  
  <style scoped>
  .header{
    flex: auto;
    align-items: center;
    font-size: 2rem;
    text-align: center;
    padding-top: 10rem;
  }
  
  </style>