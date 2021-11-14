<template>
  <div class="contenido">
    <div class="c-in">
    <b-card 
      overlay
      class="b-card"
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      :title="puesto"
      
      
    >
      <b-card-text>
        {{persona}}
      </b-card-text>
      <Netsocial></Netsocial>
    </b-card>
    </div>
    
  </div>
</template>


<script>
import Netsocial from '../utils/subcomponets/socialnetworks.vue' 
export default {
  components:{
    Netsocial,
  },
  props:{
    persona:{
      default:'Nombres Apellidos',
      type: String,
    },
    puesto:{
      default:'Puesto Default',
      type: String,
    },
  },
  data() {
    return {
      
    }
  },
  
}
</script>


<style scoped>


.c-in{
    padding: 1px;
    margin: 30px;
}
.b-card{
    background-color: #000;
    padding: 10px;
}
</style>