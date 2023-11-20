<script setup>

const isOpen = ref(false);

</script>


<template>
  <nav>
  <div class="flex items-center justify-between flex-wrap bg-black h-20 px-4 border-b border-white">
    <div>
      <nuxt-link to="/">
        <slot name="logo"> </slot>
      </nuxt-link>
    </div>
    <div>
    <ul class="hidden md:flex items-center justify-between space-x-8">
      <slot name="links"></slot>
    </ul>
    <ul>
      <li class="flex md:hidden">
        <button @click="isOpen = !isOpen">
          <i v-if="!isOpen" class="ri-menu-line text-2xl"></i>
          <i v-else class="ri-close-line text-2xl"></i>
        </button>


      </li>
    </ul>
    </div>
</div>

<ul
v-show="isOpen"
class="md:hidden flex flex-col space-y-2 px-4 py-8 border-b border-white bg-gray-900">
<slot name="links"></slot>
</ul>

</nav>
</template>
