<script setup>
import mainCom from "./mainCom.vue";
import player from "./layoutCom/player.vue";
</script>

<template>
  <div class="flex flex-col bg-bg-image lg:h-screen w-auto">
    <div class="mt-20 px-6 lg:mt-40">
      <h1 class="font-bold text-5xl text-gray-300 capitalize">Hello, There</h1>
    </div>
    <div class="mt-6 px-6">
      <h1 class="font-bold text-5xl text-gray-300 capitalize">
        stay here and chill
      </h1>
    </div>
    <div class="mt-6 px-6 flex lg:justify-end">
      <mainCom />
    </div>
    <player />
  </div>
</template>
