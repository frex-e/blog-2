<template>
  <div class="max-w-5xl w-full px-4">
      <div v-for="page in pages" class="blog-preview px-5 pt-4 pb-8 h-fit first:border-t-2 border-b-2">
        <DynamicPage :page="page" class="max-h-[30rem] overflow-hidden" />
        <div class="mt-5">
        <NuxtLink
          class="p-3 px-8 text-red-600 border border-red-600 rounded-md
          hover:text-white hover:bg-red-500 transition-all"
          :to="`/blog/${page}`">

          See Post

        </NuxtLink></div>
      </div>
  </div>
</template>

<script setup lang='ts'>
useHead({
  title: 'Blog'
})

const pages = [
  'dfs'
]
</script>