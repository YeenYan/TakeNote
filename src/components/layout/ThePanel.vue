<template>
  <div class="panel-container">
    <the-header></the-header>
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
  @apply flex flex-col w-full max-w-[23rem] h-screen border-r-[.3px] border-solid border-neutral-300 relative;
}

.panel-container > :nth-child(2) {
  @apply overflow-y-auto;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey; */
  @apply bg-neutral-200 rounded-xl;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-neutral-400 hover:bg-neutral-500 rounded-xl;
}

.panel-container > :last-child {
  @apply pl-9;
}
</style>
