<template>
  <div class="wrapper relative">
    <GraphTest :func="func" :uuid="uuid" :key="a">

    </GraphTest>
    <button @click="reboot" class="text-black 
    material-symbols-rounded absolute bottom-2 left-2">
      Refresh
    </button>
  </div>
</template>

<style lang="less">
.wrapper svg.algorithmx,
.prism {
  @apply w-full;
  @apply bg-gray-50 rounded-lg my-4;
}
</style>

<script setup>
import { Canvas } from 'algorithmx';
import { ref } from 'vue';

const props = defineProps({
  "func": Function,
  "uuid": String
})

const a = ref(2)

const reboot = () => {
  a.value += 1;
}
</script>