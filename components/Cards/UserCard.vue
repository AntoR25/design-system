<script setup>
defineProps({
  name: {
    type: String,
    default: 'John Doe',
  },
  description: {
    type: String,
    default: 'User Card',
  },
});

</script>

<template>
  <div class="flex items-center justify-start pt-4">
    <div class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
      <figure class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
        <figcaption class="sr-only">{{ name }}, User Card</figcaption>
      </figure>
      <h2 class="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">{{ name }}</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-300">{{ description }}</p>
      <div class="flex items-center justify-center">
        <router-link
    to="/docs/composants/userinfo" 
    class="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
  >
    Portfolio
  </router-link>
  <router-link
      to="/docs/composants/userinfo" 
      class="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      Contact
    </router-link>
      </div>
    </div>
  </div>
</template>