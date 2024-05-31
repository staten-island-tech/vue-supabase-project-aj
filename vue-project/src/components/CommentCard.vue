<template>
    <div>
        <p>Posted by  :</p>
        <h2>{{ comment.Comment }}</h2>
    </div>
</template>

<script setup>

const props = defineProps({
    comment: Object,
})
</script>

<style scoped>

</style>