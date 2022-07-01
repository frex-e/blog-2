<template>
  <component :is="comp">
  </component>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "DynamicPage",
  props: {
    page: {
      type: String,
      required: true
    }
  },
  computed: {
    comp () {
      return defineAsyncComponent(() => import(`../pages/blog/${this.page}.vue`));
    }
  }
}
</script>