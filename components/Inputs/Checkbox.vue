<template>
    <div :class="{ 'dark:bg-black/10': darkMode }">
        <input
          class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
          type="checkbox"
          v-model="isChecked"
        >
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['label']);
  const darkMode = ref(false);
  const isChecked = ref(false);
  
  // Fonction pour basculer entre le mode sombre et clair
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
  };
  </script>


