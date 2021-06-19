<template>
  <section class="flex items-center">
    <div class="relative w-[268px] h-[268px]" ref="wrapper">
      <div
        role="button"
        :id="`${index}${unique_id}`"
        v-for="(entity, index) in x_yArray.reverse()"
        :key="index"
        :class="[
          shape === 'circle' ? 'rounded-full w-6 h-6' : 'rounded-none w-8 h-8',
          `${lineColor} absolute bg-rose-600 w-6 h-6 h-calc(100%/100)`,
        ]"
        :style="{
          top: entity.x + 'px',
          left: entity.y + 'px',
          transitionProperty: 'background-color',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
        }"
        @click="toggle"
      ></div>
    </div>
  </section>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  props: ['lineColor','unique_id','shape','colors'],
  setup(props) {
    let wrapper = ref(null)
    let checked = ref(true)
    let x_yArray = reactive([])
	 let colorIndex = ref(null)
	 colorIndex = 0
    let resX = 10
    let resY = 10
    let size = 28
    var index = 0
    for (let i = 0; i < resX; i++) {
      for (let j = 0; j < resY; j++) {
        index++
        x_yArray = [
          { id: `${index + 1}${props.unique_id}`, x: i * size, y: j * size },
          ...x_yArray,
        ]
      }
    }
    function toggle(targetEntity) {
      checked = !checked
      let targetEntityID = `${targetEntity.path[0].id}`
		if(colorIndex>= 0 && colorIndex < props.colors.length-1 ) {
			colorIndex++
		}else{
			colorIndex = 0
		}
      // console.log(targetEntityID)
      x_yArray.forEach(function (entity) {
        //  var dx = x_yArray[targetEntityID.split('a')[0]].x - entity.x
        var dx = x_yArray[targetEntityID.split(props.unique_id)[0]].x - entity.x
        //  var dy = x_yArray[targetEntityID.split(props.unique_id)[0]].y - entity.y
        var dy = x_yArray[targetEntityID.split(props.unique_id)[0]].y - entity.y
        var distance = Math.sqrt(dx * dx + dy * dy)
        var elementID = `${entity.id.split(props.unique_id)[0] - 2}${
          props.unique_id
        }`
		  console.log(props.colors[colorIndex])
        var element = document.getElementById(elementID)
			let  startColor = props.colors[colorIndex].start
			let	endColor = props.colors[colorIndex].end				
        setTimeout(function () {
          if (checked === true) {
            element.className = 'tile'
            element.offsetWidth;
            props.shape === 'circle'
              ? (element.className =
                  `absolute rounded-full tile w-4 h-4 grow ` + endColor)
              : (element.className =
                  `absolute tile w-4 h-4 grow ` + endColor)
            // element.className = `absolute w-4 h-4 tile grow ` + props.startColor
          } else {
            element.className = 'tile'
            element.offsetWidth
            props.shape === 'circle'
              ? (element.className =
                  `absolute rounded-full tile w-4 h-4 grow ` + startColor)
              : (element.className =
                  `absolute tile w-4 h-4 grow ` + startColor)
          }
        }, Math.round(distance * 1.8))
      })
    }
    // console.log(x_yArray)
    return {
      wrapper,
      x_yArray,
      toggle,
    }
  },
}
</script>

<style>
.tile.grow {
  animation: grow 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

@keyframes grow {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
