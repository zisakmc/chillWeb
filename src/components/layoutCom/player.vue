<script setup>
import { ref, computed } from "vue";
import { Howl, Howler } from "howler";
import { AVLine } from "vue-audio-visual";

const sound = new Howl({
  src: ["/kiki delivery.mp3"],
});

function play() {
  sound.play();
  isActive = true;
}

function pause() {
  sound.pause();
  isActive = false;
}
</script>
<template>
  <div class="flex justify-center items-center">
    <div
      class="mt-10 lg:mt-0 flex flex-col gap-4 justify-center items-center h-auto w-[20vh] p-2 rounded-md"
    >
      <div class="flex justify-center items-center">
        <img
          class="aspect-square object-cover h-40 lg:h-50 rounded-md"
          src="/makima.jpg"
        />
      </div>
      <div class="p-4 h-auto">
        <AVLine
          :line-color="['#FFF', '#0fff']"
          :canv-width="300"
          :canv-height="90"
          :line-width="1"
          src="/zerogravity.mp3"
          audio-controls="false"
        />
      </div>
    </div>
  </div>
</template>
