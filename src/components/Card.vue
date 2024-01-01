<template>
  <main class="max-w-[46rem] w-full md:h-[32rem] rounded-[0] md:rounded-[2rem] md:[box-shadow:0px_30px_60px_0px_rgba(61,108,236,0.15)] bg-white grid grid-rows-[max-content,1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-[368px,1fr]">
    <Result /> 
    <Summary />
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Result from './CardResult.vue';
import Summary from './CardSummary.vue';

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
