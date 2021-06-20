<template>
  <div class="grid grid-cols-12 place-items-center">
    <section
      class="
        flex
        col-span-9
        justify-center
        flex-col
        items-center
        bg-[#000716]
        p-4
        h-screen
        w-full
      "
    >
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,100%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,90%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,80%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,70%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,60%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,50%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,40%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,30%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,20%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,10%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,5%)` }"
      ></article>
      <article
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,2.5%)` }"
      ></article>
    </section>
    <section
      class="
        place-items-center
        h-screen
        flex flex-col
        justify-center
        place-content-center
        col-start-10 col-end-13
        bg-blueGray-900
        w-full
      "
    >
      <div class="inline-block w-[20px] h-[300px] rounded-full">
        <input
          v-model.number="selectedColor"
          class="absolute m-0 h-[20px] w-[300px] origin-t -rotate-90"
          type="range"
          min="0"
          max="360"
          step="10"
        />
      </div>
      <div
        class="
          w-full
          h-20
          flex
          items-center
          justify-center
          bg-white
          self-end
          mt-auto
        "
      >
        <button
          type="button"
          class="
            focus:outline-none
            focus:ring-4
            ring-blueGray-700
            focus:border-none
            border-2
            px-3
            py-1.5
            rounded-lg
            bg-blueGray-900
            text-blueGray-400
            focus:bg-blueGray-500
            hover:bg-blueGray-500
            focus:text-white
            hover:text-white
            transition-colors
            duration-300
            ease-in-out
            mb-2
          "
          @click="modelOpen = true"
        >
          Open Model
        </button>
        <teleport to="body">
          <copied-color-palette-model
            v-model:show="modelOpen"
            :preventBackgroundScrolling="true"
          >
            <template #header>
              You can Copy this,And paste it into tailwindcss config file
            </template>
            <template #content>
              <pre class=" select-all text-black">{{JSON.stringify(ReturnTailwindColorsObject(selectedColor),null,3)}}</pre>
            </template>
          </copied-color-palette-model>
        </teleport>
      </div>
    </section>
  </div>
  <div class="">
    <router-view />
  </div>
</template>
<script>
import { onMounted, onUpdated, reactive, ref, watch } from 'vue'
import CopiedColorPaletteModel from './pages/Projects/anouncementModelEx/components/AnouncementModel.vue'

export default {
  components: {
    CopiedColorPaletteModel,
  },
  setup() {
    const selectedColor = ref(340)
    let modelOpen = ref(false)
    // let selectedColorName = ref('Uniy')
    let colors;
    function ReturnTailwindColorsObject(color) {
      let index = 13
      colors = {}
      colors.ColorName = {}
      for (let i = 1; i < 13; i++) {
        if (index === 13) {
          colors.ColorName[25] = `hsl(${color},100%,2.5%)`
          index--
        } else if (index === 12) {
          colors.ColorName[50] = `hsl(${color},100%,5%)`
          index--
        } else {
          colors.ColorName[parseInt(`${i - 2}00`)] = `hsl(${color},100%,${
            index - 1
          }0%)`
          index--
        }
      }
      return colors
    }
    // // const { text, isSupported, copy } = useClipboard()
    return {
      selectedColor,
      modelOpen,
      ReturnTailwindColorsObject,
    }
  },
}
</script>

<style>
.origin-t {
  transform-origin: 160px 160px;
}
</style>
