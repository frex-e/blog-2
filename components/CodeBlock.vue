<template>
  <div class="prism">
    <pre class="line-numbers" :class="`language-${lang}`"><code> <slot /> </code> </pre>
  </div>
</template>

<script setup>
import Prism from 'prismjs'

const props = defineProps(['lang']);

onMounted(() => {
  Prism.highlightAll()
})
</script>