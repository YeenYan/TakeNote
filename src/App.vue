<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap");

body {
  @apply font-sans;
}
</style>
