<template>
  <section class="w-full h-full pt-6 pb-10 md:py-[2.38rem] px-10 rounded-t-[0] md:rounded-t-[2rem] rounded-[2rem] bg-gradient-1">
    <h2 class="heading-m text-light-blue font-bold text-center w-full">Your Result</h2>

    <div class="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] bg-gradient-2 grid place-items-center rounded-full mx-auto mt-6 md:mt-[2.19rem]">
      <div class="flex flex-col gap-1 items-center">
        <h3 class="heading-xl font-extrabold text-white text-center">76</h3>
        <p class="body font-bold text-light-blue opacity-[0.5168]">of 100</p>
      </div>
    </div>

    <h4 class="heading-l text-white font-bold text-center w-full mt-6 md:mt-7">Great</h4>

    <p class="body text-light-blue font-medium text-center w-full mt-2 md:mt-[0.87rem] max-w-[16.25rem] mx-auto">
      Your performance exceed 65% of the people conducting the test here!
    </p>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
