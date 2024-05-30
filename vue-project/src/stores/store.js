export const { data: { user } } = await supabase.auth.getUser()

`<div class="header">
<form @submit.prevent="Submit" class="form">

<div class="form1">
<label for="namee">Username</label>
<input type="text" required v-model="user.Username" id="namee" class="form2">
</div>

<button type="submit" class="button">Submit</button>
</form>`