<template>
  <the-panel></the-panel>
</template>

<script>
import ThePanel from "./components/layout/ThePanel.vue";

export default {
  components: {
    ThePanel,
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

body {
  @apply font-sans;
}
</style>
