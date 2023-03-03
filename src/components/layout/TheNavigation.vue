<template>
  <div class="nav-container">
    <div class="label-menu__wrapper">
      <p class="label-text">Label</p>
      <span class="material-symbols-outlined nav-icon-right"> expand_more </span>
    </div>
    <ul>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
      <base-nav-list>Sample Notes </base-nav-list>
    </ul>
  </div>
</template>

<script>
import BaseNavList from "../label list/navLabelList.vue";

export default {
  components: { BaseNavList },
};
</script>

<style lang="postcss" scoped>
.guide {
  @apply outline-1 outline-red-500 outline;
}

.nav-container {
  @apply h-full;
}

.label-menu__wrapper {
  @apply flex items-center justify-between w-full px-9 py-5;
}

.nav-icon-right {
  @apply text-neutral-500 mr-5 hidden;
}

.label-text {
  @apply text-base uppercase font-medium text-neutral-600;
}
</style>
