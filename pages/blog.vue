<template>
  <div class="blog-content p-4 max-w-5xl pt-24">
    <NuxtPage></NuxtPage>
  </div>
</template>

<style lang="less">
.page-title{
  @apply text-5xl font-bold;
}

.preview-title {
  @apply text-4xl font-bold;
}

.graph-wrapper,
.code-block
{
  @apply bg-white rounded-lg border-2 border-zinc-400 max-w-full;
}

.code-block {
  @apply text-xs font-light font-mono py-2 pl-4 pr-2;
}

.blog-content,
.blog-preview {

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
</style>