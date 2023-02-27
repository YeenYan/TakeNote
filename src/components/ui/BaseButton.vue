<template>
  <button :class="type">
    <slot name="icon" v-if="!show" class="btn-icon"></slot>
    <slot class="btn-text"></slot>
  </button>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style lang="postcss" scoped>
.purple {
  /* @apply ; */
}
</style>
