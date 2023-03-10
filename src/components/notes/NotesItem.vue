<template>
  <div class="notesItem__container">
    <ul class="notesItem__wrapper">
      <note-list></note-list>
      <note-list></note-list>
      <note-list></note-list>
      <note-list></note-list>
      <note-list></note-list>
      <note-list></note-list>
    </ul>
  </div>
</template>

<script>
import NoteList from "./NoteList.vue";
export default {
  components: {
    NoteList,
  },
};
</script>

<style lang="postcss" scoped>
.notesItem__container {
  @apply py-10 px-9;
}
.notesItem__wrapper {
  @apply flex flex-wrap gap-6;
  /* @apply grid grid-cols-[repeat(auto-fit,_minmax(18.5rem,_1fr))] gap-6; */
}
</style>
