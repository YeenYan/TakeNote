<template>
  <div>
    <img src="../../assets/logo.png" alt="Logo" class="header-img" />
  </div>
  <div>
    <base-button>
      <template #icon
        ><span :show="true" class="material-symbols-outlined"> note </span>
      </template>
      New Note
    </base-button>
  </div>
</template>

<script>
// import img from '../../assets/logo.png'
export default {};
</script>

<style lang="postcss" scoped>
.header-img {
  @apply w-full max-w-[11.25rem];
}
</style>
