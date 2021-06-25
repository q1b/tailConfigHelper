<template>
  <div class="grid grid-cols-12 place-items-center bg-blueGray-900">
    <section
      class="
        flex
        col-span-9
        justify-center
        flex-col
        items-center
        bg-[#000716]
        sm:p-4
        px-2
        py-8
        sm:py-12
        rounded-3xl
        w-[90%]
        max-w-[400px]
        h-[90vh]
      "
    >
      <article
        :key="value"
        v-for="value in range(10, 1, -1)"
        class="rounded-xl w-3/4 h-10 my-1"
        :style="{ backgroundColor: `hsl(${selectedColor},100%,${value}0%)` }"
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
        items-center
        justify-center
        place-content-center
        col-start-10 col-end-13
        bg-blueGray-900
        w-full
      "
    >
      <div class="inline-block w-[20px] h-[300px] rounded-full mt-auto">
        <input
          v-model.number="selectedColor"
          class="absolute m-0 h-[20px] w-[300px] origin-t -rotate-90"
          type="range"
          min="0"
          max="360"
        />
      </div>
      <div
        class="
          w-full
          h-20
          flex
          items-center
          justify-center
          bg-blueGray-900
          p-2
          self-end
          mt-auto
          mb-5
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
            sm:mb-2
            mb-20
          "
          @click="modelOpen = true"
        >
          Copy
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
              <pre class="select-all text-black">{{
                JSON.stringify(
                  ReturnTailwindColorsObject(selectedColor),
                  null,
                  3
                )
              }}</pre>
            </template>
          </copied-color-palette-model>
        </teleport>
      </div>
    </section>
  </div>
</template>
<script>
import { ref } from 'vue'
import CopiedColorPaletteModel from './components/AnouncementModel.vue'

export default {
  components: {
    CopiedColorPaletteModel,
  },
  setup() {
    const selectedColor = ref(340)
    let modelOpen = ref(false)
    // let selectedColorName = ref('Uniy')
    let colors
    function range(start, stop, step) {
      return Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      )
    }
    function ReturnTailwindColorsObject(color) {
      let index = 13
      colors = {}
      colors.ColorName = {}
      for (let i = 1; i < 13; i++) {
        if (index === 13) {
          colors.ColorName[25] = `hsl(${color},100%,100%)`
          index--
        } else if (index === 12) {
          colors.ColorName[50] = `hsl(${color},100%,90%)`
          index--
        } else if (i <= 10) {
          colors.ColorName[parseInt(`${i - 2}00`)] = `hsl(${color},100%,${
            index - 3
          }0%)`
          index--
        } else if (i === 11) {
          colors.ColorName[900] = `hsl(${color},100%,5%)`
          index--
        } else {
          colors.ColorName[1000] = `hsl(${color},100%,2.5%)`
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
      range,
    }
  },
}
</script>

<style>
.origin-t {
  transform-origin: 160px 160px;
}
</style>
