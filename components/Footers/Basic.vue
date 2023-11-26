<template>
  <footer
    class="mt-auto flex items-center justify-between space-x-5 h-15 border-t border-white p-2"
  >
    <div class="flex-grow">AR design - {{ new Date().getFullYear() }}</div>
    <div>クラゲは嫌い</div>
    <div class="mr-auto pt-2 pb-2">
      <button
    @click="handleDonation"
    class="mr-5 flex bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse"
  >
    Donation
  </button>
    </div>
  </footer>
</template>

<script setup>
const handleDonation = () => {
  alert("Vous n'aimez pas encore assez les méduses pour pouvoir effectuer une donation.");
};
</script>
