<template>
  <section class="w-full h-full py-6 px-8 md:px-10 md:py-[2.37rem]">
    <h2 class="heading-m font-bold text-dark-navy">Summary</h2> 

    <div class="flex flex-col gap-4 mt-6 md:mt-7">
      <SummaryItem class="bg-red/5 text-red" title="Reaction" :score="80">
        <Lightning />
      </SummaryItem>
      <SummaryItem class="bg-yellow/5 text-yellow" title="Memory" :score="92">
        <Brain />
      </SummaryItem>
      <SummaryItem class="bg-green/5 text-green" title="Verbal" :score="61">
        <Chat />
      </SummaryItem>
      <SummaryItem class="bg-blue/5 text-blue" title="Visual" :score="73">
        <Eye />
      </SummaryItem>
    </div>

    <Button class="mt-6 md:mt-[2.56rem]">Continue</Button>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import SummaryItem from './SummaryItem.vue'
import Brain from './icons/Brain.vue';
import Lightning from './icons/Lightning.vue';
import Eye from './icons/Eye.vue';
import Chat from './icons/Chat.vue';
import Button from './Button.vue'


///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
