<template>
    <section
    class="
      bg-[#000716]
      h-screen
      w-full
      flex flex-col
      items-center		
		pt-10
		pl-10
    "
  >
		<article class="group bg-white rounded-l-full w-full h-24 sm:h-28 flex items-center">
			<div class="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#000716] ml-4 flex items-center">
				<div class="h-6 pl-2 ml-2 sm:h-8 sm:pl-4 sm:ml-4 rounded-l-full bg-white flex items-center justify-center">
					<span class="w-max font-bold text-base sm:text-lg text-sky-400 ">
						Tiles Project
					</span>
				</div>
			</div>
			<div class="h-24 sm:h-24 sm:pl-28 pl-10 w-full xss:text-xl xs:text-2xl sm:text-4xl flex items-center">
				<span>Don't Click These Boxes</span>
			</div>
		</article>
		<tiles/>
  </section>
  
</template>

<script>
import Tiles from './Projects/Tiles.vue'
export default {
	components:{
		Tiles
	}
}
</script>

<style>

</style>