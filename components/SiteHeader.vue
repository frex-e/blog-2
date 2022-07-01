<template>
  <nav class="flex flex-row items-center py-2 border-b-2 border-red-500 header px-4">
    <div class="text-lg sm:text-2xl font-semibold flex-grow items-baseline">
      <NuxtLink to="/">Indra Kusumah-kasim <span class="font-mono text-green-500 font-normal">{frex-e}</span></NuxtLink>
    </div>
      <NuxtLink to="/blog" class="aa text-2xl font-bold text-zinc-500 hover:text-highlight transition-all"> Blog </NuxtLink>
  </nav>
</template>

<style scoped>
.aa.router-link-active {
  @apply text-highlight;
}
</style>
