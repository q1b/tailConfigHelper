<template>
	<section class="flex items-center">
   	<div class="relative w-[268px] h-[268px]" ref="wrapper">
			<div role="button" :id="`${index}${unique_id}`" v-for="(entity,index) in x_yArray.reverse()" :key="index" :class="`${lineColor} absolute bg-rose-600 w-8 h-8 h-calc(100%/100)`" :style="{ top:entity.x+'px',left:entity.y+'px' }" @click="toggle"></div>
	 	</div>
	</section>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
	props:[
		'lineColor','startColor','endColor','unique_id'
	],
	setup(props) {
   	let wrapper = ref(null)
   	let checked = ref(true)
   	let x_yArray = reactive([])
		let resX = 10
		let resY = 10
		let size = 28
		var index = 0
		for (let i = 0; i < resX; i++) {
   	   for (let j = 0; j < resY; j++) {
				index++
				x_yArray = [{id:`${index+1}${props.unique_id}`,x:i*size,y:j*size},...x_yArray]
			}
		}
		function toggle(targetEntity) {
        checked = !checked
		  let targetEntityID =`${targetEntity.path[0].id}`
			// console.log(targetEntityID)
		  	x_yArray.forEach(function (entity) {
         //  var dx = x_yArray[targetEntityID.split('a')[0]].x - entity.x
          var dx = x_yArray[targetEntityID.split(props.unique_id)[0]].x - entity.x
         //  var dy = x_yArray[targetEntityID.split(props.unique_id)[0]].y - entity.y
          var dy = x_yArray[targetEntityID.split(props.unique_id)[0]].y - entity.y
          var distance = Math.sqrt(dx * dx + dy * dy)
			 var elementID =`${entity.id.split(props.unique_id)[0]-2}${props.unique_id}`
          var element = document.getElementById(elementID)
			 setTimeout(function () {
            if (checked === true) {
					element.className = 'tile';
					element.offsetWidth;
					element.className = `absolute w-4 h-4 tile grow ` + props.startColor
            } else {
					element.className = 'tile';
					element.offsetWidth;
            	element.className = `absolute tile w-4 h-4 grow ` + props.endColor
            }
          }, Math.round(distance * 1.8))
        })
      }
		// console.log(x_yArray)
	 	return {
      	wrapper,
    		x_yArray,
			toggle
		}
  	},
}
</script>

<style>
.tile.grow {
  animation: grow 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

@keyframes grow {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

</style>