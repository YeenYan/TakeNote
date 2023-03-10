<template>
  <li class="list__wrapper">
    <div class="top-bar"></div>
    <div class="list-content">
      <div class="note-header__wrapper">
        <p class="note-title">Lorem Ipsum</p>
        <p class="note-date">February 1, 2023 4:00 PM Wed</p>
      </div>
      <div class="note-body__wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis rem.
          Ullam, magni. Nisi quam earum et officia, veritatis ducimus.
        </p>
      </div>
    </div>
  </li>
</template>

<style lang="postcss" scoped>
.list__wrapper {
  @apply w-full max-w-[18.5rem] bg-shades-white rounded-lg drop-shadow-lg overflow-hidden;
}

.top-bar {
  @apply w-full h-5 bg-yellow-500;
}

.list-content {
  @apply p-4;
}

.note-header__wrapper {
  @apply pb-6;
}

.note-title {
  @apply text-2xl font-semibold text-neutral-700;
}

.note-date {
  @apply text-[0.563rem] text-neutral-500;
}

.note-body__wrapper {
  @apply text-sm text-neutral-600 pb-24;
}
</style>
