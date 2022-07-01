<template>
  <div v-if="useRoute().name != 'blog'" class="title" ref="mySlot">
    <slot />
  </div>
  <NuxtLink v-else :to="`/blog/${props.pageName}`" class="title"> 
    <slot />
  </NuxtLink>
</template>

<script setup>

const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
})
</script>