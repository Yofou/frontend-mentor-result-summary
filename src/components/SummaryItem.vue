<template>
  <div class="w-full px-4 py-[1.12rem] rounded-[.75rem] h-[56px] flex items-center justify-between gap-1">
    <div class="flex gap-3 items-center">
      <slot />
      <p class="text-body font-medium truncate">{{ props.title }}</p>
    </div>

    <p class="body font-bold text-dark-navy/50 text-right flex gap-2 truncate">
      <span class="text-dark-navy">{{ props.score }}</span>
      / 100
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

///// props/emits /////
const props = defineProps<{
  title: string,
  score: number;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
