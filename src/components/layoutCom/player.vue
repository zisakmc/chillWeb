<script setup>
import { ref, computed } from "vue";
import { DynamicIslandPlayer } from "vue-dynamic-island-player";
import "../../../node_modules/vue-dynamic-island-player/style.css";

const playList = ref([
  {
    // song of title
    title: "Kiki Devivery",
    // sound file
    file: "/kiki delivery.mp3",
    // howler instance
    howl: null,
    // song of author
    author: "Gibli studio",
    // song of cover
    cover: "/kiki2.jpg",
  },
  {
    // song of title
    title: "Zero Gravity",
    // sound file
    file: "/zerogravity.mp3",
    // howler instance
    howl: null,
    // song of author
    author: "quiet.b studio",

    // song of cover
    cover: "/zerogra.jpg",
  },
]);

const player = ref();
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="px-5">
      <DynamicIslandPlayer
        :play-list="playList"
        :html5="true"
        theme="#11502a"
      />
    </div>
  </div>
</template>
