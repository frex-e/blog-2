<template>
  <a :href="to" :class="
  `text-${color} border-b-2 border-${color} hover:bg-slate-200`
  "><slot></slot></a>
</template>

<script setup lang="ts">
const props = defineProps({
  color : {
    type: String,
    required: true
  },
  to : {
    type: String,
    required: true
  }
})
</script>