<template>
  <div class="header-container">
    <div>
      <img src="../../assets/logo.png" alt="Logo" class="header-img" />
    </div>
    <div class="cta-wrapper">
      <base-button color="purple">
        <template #icon
          ><span :show="true" class="material-symbols-outlined btn-icon"> note </span>
        </template>
        New Note
      </base-button>

      <p>4 notes</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.header-container {
  @apply px-9 pt-4 pb-6 border-b-[.3px] border-solid border-neutral-300;
}

.header-img {
  @apply w-full max-w-[11.25rem];
}

.cta-wrapper {
  @apply flex items-center justify-between text-neutral-400 text-base font-medium mt-7;
}
</style>
