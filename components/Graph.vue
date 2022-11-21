<template>
  <div class="graph-wrapper relative border-black" v-if="show">
    <div :id="uuid" class="graph"></div>
    <button @click="reset" class="
    hover:animate-spin
    font-2xl text-zinc-500 material-symbols-rounded
    absolute bottom-0 left-0 m-2 font-2xl">
      refresh
    </button>
  </div>
</template>

<style lang="less" scoped>
.graph {
  @apply w-full max-h-fit;
}

.graph-wrapper {
  @apply my-4 overflow-hidden;
}

svg.algorithmx {
  @apply flex-auto;
  @apply w-full rounded-lg;
}
</style>

<script setup lang="ts">
import { Graph } from 'algoNext';

const show = useRoute().name != "blog"

const props = defineProps({
  uuid: {
    type: String,
    required: true
  },
  animation: {
    type: Function,
    default: (graph: Graph) => {
      graph.addNode(1);
    }
  },
  height: {
    type: Number,
    default: 500,
  },
})

const graph = ref<Graph | null>(null);

onMounted(() => {
  console.log(show)
  if (!show) {
    return;
  }
  if (graph.value == undefined) {
  graph.value = new Graph(props.uuid, [
    Math.min(1152,
      Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      ) - 100), props.height])
  }
  props.animation(graph.value);
});

onBeforeUnmount(() => {
  if (graph.value) {
    graph.value.reset()
  }
})

const reset = () => {
  graph.value?.reset()
  graph.value?.pause(250)
  props.animation(graph.value);
}

</script>