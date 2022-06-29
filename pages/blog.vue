<template>
  <div class="blog-content max-w-2xl px-6 py-10">
    <div class="display-title">{{ route.meta.title }}</div>
    <div class="display-date">{{ route.meta.date }}</div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.meta)
</script>

<style lang="less">
.display-title {
  @apply text-white text-5xl font-bold border-b pb-1;
}

.display-date {
  @apply text-zinc-400;
}

.blog-content {

  /* GRAPHS */
  // svg.algorithmx {
  //   @apply bg-gray-300 w-full rounded-lg border-gray-00 border-4 h-80;
  // }

  /* TITLE */
  .title {
    @apply text-6xl font-bold border-b;
  }

  /* DATE */
  .date {
    @apply text-base text-gray-300;
  }

  /* PARAGRAPHS */
  p {
    @apply my-2;
  }

  /*HEADINGS*/
  h1,
  h2,
  h3 {
    @apply font-bold min-w-full mb-1 mt-8;
  }

  h1::before,
  h2::before,
  h3::before {
    content: "# ";
    @apply text-highlight;
  }

  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-2xl;
  }

  h3 {
    @apply text-xl;
  }
}
</style>