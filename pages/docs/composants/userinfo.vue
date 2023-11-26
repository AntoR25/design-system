<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <TextesCitation><TextesParagraphe>La curiosité est un vilain défaut</TextesParagraphe></TextesCitation>
      <button @click="revenirEnArriere" class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
        Revenir en arrière
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const revenirEnArriere = () => {
    router.go(-1); // Revenir à la page précédente
  };
  </script>