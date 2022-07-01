<template>
  <div class="code-block" v-html="code.value"></div>
</template>

<style lang="less" scoped>
.code-block {
  @apply p-2 font-mono text-gray-700 overflow-scroll;
  white-space: pre-wrap;
}
</style>

<script setup lang="ts">
import hljs from 'highlight.js'
const props = defineProps({ "code": String, "lang": String });

const code = hljs.highlight(props.lang, props.code);
</script>