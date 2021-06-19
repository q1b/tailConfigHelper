<template>
    <section
    class="
      bg-[#000716]
      w-full
      flex flex-col
      items-center
		pt-10
		pb-96
		pl-4
    "
  >
		<article class="group bg-white rounded-l-full w-full h-20 xss:h-24 sm:h-28 flex items-center">
			<div class="h-16 w-16 xss:h-20 xss:w-20 sm:h-24 sm:w-24 rounded-full bg-[#000716] ml-4 flex items-center">
				<div class="h-4 xss:h-6 pl-1 xss:pl-2 ml-1 xss:ml-2 sm:h-8 sm:pl-4 sm:ml-4 rounded-l-full bg-white flex items-center justify-center">
					<span class="w-max font-bold text-base xss:text-base sm:text-lg text-sky-400 ">
						Tiles Project
					</span>
				</div>
			</div>
			<div class="h-24 sm:h-24 sm:pl-28 pl-10 w-full font-jetMono font-extrabold text-[#ff0030] xss:text-xl xs:text-2xl sm:text-4xl flex items-center">
				<span class="hidden sm:flex">Don't Click These Boxes</span>
			</div>
		</article>
		<section class="grid sm:scale-100 sm:grid-cols-2 gap-4 mt-28 sm:mt-40 scale-100 md:scale-125">
			<grow-boxes unique_id="a" lineColor="!bg-sky-100" startColor="bg-rose-600" endColor="bg-white"/>
			<grow-boxes unique_id="b" lineColor="!bg-sky-100" startColor="bg-blueGray-600" endColor="bg-cyan-400"/>
			<grow-boxes unique_id="c" lineColor="!bg-teal-500" startColor="bg-green-500" endColor="bg-teal-600"/>
			<grow-boxes unique_id="d" lineColor="!bg-sky-900" startColor="bg-blueGray-600" endColor="bg-[#ff0030]"/>
		</section>
  </section>
  
</template>

<script>
import GrowBoxes from './Projects/GrowBoxes.vue'
export default {
	components:{
		GrowBoxes
	}
}
</script>

<style>

</style>