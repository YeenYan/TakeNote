<template>
  <main>
    <the-panel></the-panel>
    <notes-container></notes-container>
  </main>
</template>

<script>
import ThePanel from "./components/layout/ThePanel.vue";
import NotesContainer from "./components/notes/NotesContainer.vue";

export default {
  components: {
    ThePanel,
    NotesContainer,
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

body {
  @apply font-sans p-0 m-0 box-border;
}

main {
  @apply md:flex relative;
}
</style>
