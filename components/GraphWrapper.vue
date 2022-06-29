<template>

  <!-- LORD HAVE MERCY ON WHOEVER IS TASKED WITH FIXING THIS SHIT UP
      (so like, the joke is funny, cause i'm the one who'll have to fix it in 1 year) -->
  <div class="wrapper relative flex flex-col">
    <GraphTest :func="func" :uuid="uuid" :key="a">
      <div :id="uuid"></div>
    </GraphTest>
    <button @click="reboot" class="text-black 
    material-symbols-rounded absolute bottom-2 left-2">
      Refresh
    </button>
  </div>
</template>

<style lang="less">
</style>

<script setup>
const props = defineProps({ "func": Function, "uuid": String })
const a = ref(2)

const reboot = () => {
  a.value += 1;
}
</script>