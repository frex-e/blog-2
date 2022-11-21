<template>
  <div class="code-block">
    <pre class="code" v-html="hljs.highlight(
      props.code,
      { language: props.lang }
    ).value"></pre>
  </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  }
})
</script>
