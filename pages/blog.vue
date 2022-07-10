<template>
  <div class="max-w-4xl w-full px-4">
    <div v-if="!isList" class="blog-content py-10 w-full max-w-full px-5">
      <!-- <div class="display-date">{{ route.meta.date }}</div> -->
      <NuxtPage />
    </div>
    <div :key="kk" v-else v-if="display" class="mt-10">
      <div v-for="page in pages" class="blog-preview px-5 pt-4 pb-8 h-fit first:border-t-2 border-b-2">
        <!-- <div> {{ page.meta.title }}</div> -->
        <DynamicPage :page="page.name" class="max-h-[30rem] overflow-hidden" />
        <div class="mt-5">
        <NuxtLink
          class="p-3 px-8 text-red-600 border border-red-600 rounded-md
          hover:text-white hover:bg-red-500 transition-all"
          :to="page.path">

          See Post

        </NuxtLink></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
const display = ref(false)
const isList = computed(() => route.name == "blog")
const pages = ref([])
const kk = ref(0)

const router = useRouter();
pages.value = router.getRoutes().filter(route => route.path.toString().startsWith("/blog/")).sort((a, b) => {
  return a.meta.date < b.meta.date ? 1 : -1;
});

pages.value.forEach(page => page.name = page.name.toString().replace("blog-", ""))
onMounted(() => {
  display.value = true;
})
</script>

<style lang="less">
.display-title {
  @apply text-5xl font-bold border-b-2 pb-1 border-zinc-400 block;
}

.display-date {
  @apply text-zinc-400;
}


.blog-content,
.blog-preview {
  /* GRAPHS */
  // svg.algorithmx {
  //   @apply bg-gray-300 w-full rounded-lg border-gray-00 border-4 h-80;
  // }

  /* TITLE */
  .title {
    @apply block;
  }

  /* DATE */
  .date {
    @apply text-base text-gray-300;
  }

  /* PARAGRAPHS */
  p {
    @apply my-2;
  }

  /*Links*/
  a {
    @apply hover:border-b;
  }

  /*HEADINGS*/
  h1,
  h2,
  h3 {
    @apply font-bold min-w-full mb-1 mt-4;
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
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }
}

.blog-content .title {
  @apply text-4xl sm:text-6xl font-bold w-full;
}

.blog-preview .title {
  @apply text-5xl font-bold pb-1 border-zinc-400 hover:border-b-0;
}
</style>