<template>
  <slot />
</template>

<script>
import { createCanvas } from 'algorithmx'
export default {
  props: {
    "uuid": String,
    "func": Function
  },
  mounted() {
    const canvas = createCanvas(this.uuid).zoomtoggle(true);
    this.func(canvas)
  }
}

</script>