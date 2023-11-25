<template>
  <div>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="email@example.com"
      class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4 text-black"
      required
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['label']);
</script>