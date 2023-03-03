<template>
  <li class="nav-header__menu">
    <span class="material-symbols-outlined nav-icon-left"> label </span>
    <p class="label-title">
      <slot></slot>
    </p>
  </li>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.guide {
  @apply outline-1 outline-red-500 outline;
}

.nav-header__menu {
  @apply flex items-center w-full px-9 py-5 border-t-[.3px] border-solid border-neutral-300;
}

.nav-icon-left {
  @apply text-neutral-500 mr-5;
}

.label-title {
  @apply text-lg font-semibold text-neutral-600;
}
</style>
