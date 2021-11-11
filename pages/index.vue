<template>
<div>
  <div class="slider">
    <MainSlider ></MainSlider>
  </div>
  
  <Calendario/>
</div>
</template>

<script>
import MainSlider from '../components/index/mainslider.vue'
import Calendario from '../components/academica/calendario.vue'
export default{
  components:{
    MainSlider,
    Calendario,
  }
}
</script>

<style>
.slider{
  
  margin: 0px 100px 0px 100px;
  background-color: violet;
}
</style>