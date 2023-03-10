<template>
  <nav class="nav-container">
    <ul class="list__wrapper">
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
    </ul>
  </nav>
</template>

<script>
import BaseNavList from "../labelList/navLabelList.vue";

export default {
  components: { BaseNavList },
};
</script>

<style lang="postcss" scoped>
.guide {
  @apply outline-1 outline-red-500 outline;
}
</style>
