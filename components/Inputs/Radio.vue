<template>
    <div>
      <label class="mr-4">
        <input type="radio" name="gender" v-model="radioGender" value="male" />
        Male
      </label>
      <label class="mr-4">
        <input type="radio" name="gender" v-model="radioGender" value="female" />
        Female
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const radioGender = ref(null);
  </script>