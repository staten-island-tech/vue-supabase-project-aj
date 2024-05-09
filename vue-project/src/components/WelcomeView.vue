<template>
    <div>
<h1>Hi</h1>
    </div>
<input type="file">
</template>

<script>
  import { supabase } from '@/lib/supabaseClient.js'
  

  const { data, error } = await supabase
  .storage
  .updateBucket('avatars', {
    public: false,
    allowedMimeTypes: ['image/png'],
    fileSizeLimit: 1024
  })


</script>

<style scoped>

</style>