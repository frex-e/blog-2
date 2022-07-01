<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,600,0,0" />

  <div class="text-black">
    <SiteHeader />
    <main class="min-w-full max-w-full min-h-full 
    flex flex-col items-center text-md sm:text-lg">
      <NuxtPage class="min-h-full
      w-full" />
    </main>

  </div>
</template>

<style>
main {
  @apply font-sans;
}
</style>

<script setup>
import 'highlight.js/styles/atom-one-light.css'
useHead({
  title: "Indra Kusumah-kasim"
})
</script>
