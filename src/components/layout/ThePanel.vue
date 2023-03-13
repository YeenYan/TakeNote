<template>
  <div class="panel-container">
    <the-header></the-header>

    <div class="label-menu__wrapper">
      <p class="label-text">Label</p>
    </div>

    <the-navigation></the-navigation>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheNavigation from "./TheNavigation.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheNavigation,
    TheFooter,
  },
};
</script>

<style lang="postcss" scoped>
.panel-container {
  @apply h-fit border-r-[.3px] border-solid border-neutral-300 md:flex md:flex-col w-full md:max-w-[23rem] md:h-screen;
}

.label-menu__wrapper {
  @apply flex items-center justify-between w-full px-9 py-5 border-b-[.3px] border-solid border-neutral-300;
}

.label-text {
  @apply text-base uppercase font-medium text-neutral-600;
}

/* The Navigation Container */
.panel-container > :nth-child(3) {
  @apply overflow-y-auto;
}

::-webkit-scrollbar {
  @apply md:w-2.5;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-neutral-100 rounded-xl;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 hover:bg-neutral-500 rounded-xl;
}

/* Footer Container */
.panel-container > :last-child {
  @apply pl-9 bg-shades-white absolute bottom-0 z-10 w-full text-center md:text-left md:relative;
}
</style>
