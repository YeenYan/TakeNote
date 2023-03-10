<template>
  <header class="header-container">
    <div class="img__wrapper">
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
  </header>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.header-container {
  @apply md:max-md:flex md:max-md:flex-col md:max-md:justify-center lg:items-center px-9 py-4 lg:pb-6 border-b-[.3px] border-solid border-neutral-300;
}

.img__wrapper {
  @apply flex justify-center lg:justify-start;
}

.header-img {
  @apply w-full max-w-[13rem] md:max-w-[11.25rem];
}

.cta-wrapper {
  @apply text-neutral-400 text-base font-medium mt-7 lg:flex lg:items-center lg:justify-between;
}

.cta-wrapper button {
  @apply w-full mb-4 lg:mb-0;
}
</style>
