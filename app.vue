<template>
  <div class="min-h-screen flex flex-col items-center">
    <SiteHeader class="flex-none w-full" />
    <NuxtPage class="flex-grow" />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Indra Kusumah-Kasim` : 'Indra Kusumah-Kasim';
  },
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
  ]
})
</script>
