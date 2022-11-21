<template>
  <div v-if="useRoute().name != 'blog'" class="page-title" ref="mySlot">
    <slot />
  </div>
  <NuxtLink v-else :to="`/blog/${props.pageName}`" class="preview-title"> 
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