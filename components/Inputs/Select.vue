<template>
    <div>
      <label for="medusas" class="pr-2">Choose a medusa :</label>
      <select id="medusas" name="medusa" v-model="selectedMedusa" class="text-black">
        <option value="tentacle">Tentacle</option>
        <option value="jellyfish">Jellyfish</option>
        <option value="lion's-mane">Lion's Mane</option>
        <option value="box-jellyfish">Box Jellyfish</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedMedusa = ref(null);
  </script>