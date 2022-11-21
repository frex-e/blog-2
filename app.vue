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
})
</script>
