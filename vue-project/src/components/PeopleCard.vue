<template>
    <div class="card">
      <h2>{{ user.Username || 'no username' }}</h2>
      <button class="button">Follow</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    user: Object,
  });
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 0.5rem;
  }
  
  .button {
    background-color: #3b5998;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #2d4373;
  }
  </style>