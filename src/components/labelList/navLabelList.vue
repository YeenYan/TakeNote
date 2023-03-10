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
  @apply w-max max-w-[18.75rem] flex-1 px-5 py-9 bg-shades-white rounded drop-shadow-md md:w-full md:max-w-full lg:max-w-full md:flex md:items-center md:rounded-none md:drop-shadow-none md:px-9 md:py-5 md:border-b-[.3px] md:border-solid md:border-neutral-300;
}

.nav-icon-left {
  @apply text-neutral-500 mr-5 hidden md:inline-block;
}

.label-title {
  @apply text-lg font-semibold text-neutral-600;
}
</style>
