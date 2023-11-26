<template>
    <blockquote class="border-l-4 border-gray-500 pl-4 italic my-4">
      <slot></slot>
    </blockquote>
  </template>

<script>
export default {
  name: 'Citation',
  props: {
    citation: {
      type: String,
      required: true,
    },
  },
};
</script>