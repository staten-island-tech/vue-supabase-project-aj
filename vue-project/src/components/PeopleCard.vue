<template>
    <div>
        <h2>{{ ppl.Username }}</h2>
    </div>
</template>

<script setup>

const props = defineProps({
    ppl: Object,
})
</script>

<style scoped>

</style>