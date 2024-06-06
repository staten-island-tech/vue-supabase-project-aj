<template>
  <div class="card">
    <h2>{{ user.Username || 'no username' }}</h2>
    <button
      class="button"
      :class="{ followed: isFollowed }"
      @click="isFollowed = !isFollowed"
    >
      {{ isFollowed ? 'Followed' : 'Follow' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  user: Object,
});

const isFollowed = ref(false);
</script>

<style scoped>
.button {
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.button.followed {
  background-color: green;
  color: white;
  border: 1px solid green;
}
</style>
