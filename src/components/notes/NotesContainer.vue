<template>
  <section>
    <div class="notes-header__container">
      <div class="notes-content notes-title__wrapper">
        <h2>Sample Title Notes</h2>
        <div>
          <span class="material-symbols-outlined"> edit </span>
          <span class="material-symbols-outlined"> delete </span>
        </div>
      </div>

      <div class="notes-content notes-actions__wrapper">
        <div class="notes-search__wrapper">
          <span class="material-symbols-outlined"> search </span>
          <input type="text" placeholder="search" />
        </div>
        <div class="notes-btn__wrapper">
          <base-button color="yellow">
            <template #icon
              ><span :show="true" class="material-symbols-outlined btn-icon">
                description
              </span>
            </template>
            Create Note
          </base-button>
          <base-button color="blue">
            <template #icon
              ><span :show="true" class="material-symbols-outlined btn-icon">
                description
              </span>
            </template>
            Create List
          </base-button>
        </div>
      </div>
    </div>

    <notes-item></notes-item>
  </section>
</template>

<script>
import NotesItem from "./NotesItem.vue";

export default {
  components: {
    NotesItem,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply w-full h-screen grid grid-rows-[auto,_1fr];
}

section > :last-child {
  @apply overflow-y-auto;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-neutral-100 rounded-xl;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 hover:bg-neutral-500 rounded-xl;
}

.notes-header__container {
  @apply py-10 px-9 border-b-[.3px] border-solid border-neutral-300 h-fit;
}

.notes-content {
  @apply max-w-[65rem];
}

.notes-title__wrapper {
  @apply flex justify-between pb-4 w-full relative;
}

.notes-title__wrapper h2 {
  @apply text-3xl font-medium text-neutral-600;
}

.notes-title__wrapper span {
  @apply text-neutral-400 p-2;
}

.notes-title__wrapper {
  @apply flex;
}

.notes-actions__wrapper {
  @apply lg:flex gap-3.5;
}

.notes-search__wrapper {
  @apply flex flex-1 items-center w-full h-[3rem] bg-neutral-100 px-2.5 rounded mb-2.5 lg:mb-0;
}

.notes-search__wrapper span {
  @apply mr-[1rem] text-neutral-500;
}

.notes-search__wrapper input {
  @apply w-full h-full px-3 bg-transparent;
}

.notes-btn__wrapper {
  @apply flex flex-col sm:flex-row md:flex gap-2;
}

.notes-btn__wrapper button {
  @apply w-full md:max-w-full lg:max-w-fit;
}
</style>
