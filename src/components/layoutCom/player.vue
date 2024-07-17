<script setup>
import { ref, computed } from "vue";
import { Howl, Howler } from "howler";

let isActive = ref(true);

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
      class="mt-10 lg:mt-40 flex flex-col gap-4 justify-center items-center bg-green-900 h-auto w-[20vh] p-2 rounded-md"
    >
      <div class="flex justify-center items-center">
        <img class="aspect-square object-cover h-40" src="/makima.jpg" />
      </div>
      <div>
        <canvas id="canvas" class="h-5"> </canvas>
      </div>
      <div class="flex justify-center items-center">
        <button
          class="static text-gray-300 hover:text-blue-800"
          :onclick="play"
          :class="{ active: isActive }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          class="static active bg-red-300 p-2 rounded-md"
          :onclick="pause"
          :class="{ active: !isActive }"
        >
          pause
        </button>
      </div>
    </div>
  </div>
</template>
