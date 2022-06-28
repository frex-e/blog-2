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

  }
}
</script>