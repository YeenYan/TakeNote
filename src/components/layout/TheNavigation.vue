<template>
  <nav class="nav-container">
    <ul class="list__wrapper">
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes something </base-nav-list>
      <base-nav-list>Sample Notes lorem impsum dolor </base-nav-list>
      <base-nav-list
        >Sample Notes Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vitae.
      </base-nav-list>
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

.list__wrapper {
  @apply w-fit flex md:w-full md:flex-col gap-6 md:gap-0 px-9 py-7 md:px-0 md:py-0;
}
</style>
