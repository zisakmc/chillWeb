<script setup>
import mainCom from "./mainCom.vue";
import { Howl, Howler } from "howler";

const sound = new Howl({
  src: ["/kiki delivery.mp3"],
});

function play() {
  sound.play();
}

function pause() {
  sound.pause();
}
</script>

<template>
  <div class="flex flex-col bg-bg-image h-screen w-auto">
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
    <div class="mt-40 flex flex-row gap-4 justify-center">
      <button class="text-gray-300 hover:text-blue-800" :onclick="play">
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
      <button class="bg-red-300 p-2 rounded-md" :onclick="pause">pause</button>
    </div>
  </div>
</template>
