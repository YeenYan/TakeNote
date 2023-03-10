<template>
  <footer class="footer-container">
    <p>Copyright: © {{ getCurrentYear }}</p>
    <p>Design & Built by Mark Ian Reyes</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: "",
    };
  },
  computed: {
    getCurrentYear() {
      return (this.year = new Date().getFullYear());
    },
  },
};
</script>

<style lang="postcss" scoped>
.footer-container {
  @apply py-[2rem];
}

p {
  @apply text-sm text-neutral-500 font-medium;
}
</style>
