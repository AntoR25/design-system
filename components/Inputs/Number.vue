<template>
  <div>
    <input
      v-model="quantity"
      type="number"
      id="quantity"
      name="quantity"
      class="ring-2 ring-gray-200/75 focus:ring-gray-100 focus:outline-none focus:ring-2 px-4 py-2 w-1/4 bg-black/50 text-gray-100"
      min="0"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(0);
</script>