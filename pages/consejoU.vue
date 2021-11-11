<template>
  <div>
      <div v-for="(per,index) in peoples" :key="index" class="cards">
        <Cards :persona="per.ctname" :puesto="per.rank"/>
      </div>
  </div>
  
</template>

<script>
import Cards from '../components/institucion/CUcards.vue';

export default{
  components:{
    Cards,
  },
  data(){
    return{
      peoples:[
        {ctname:'Rectora',rank:'Dra. Flor de Maria Valle Espinoza'},
        {ctname:'Vicerrector',rank:'Dr. Wilber Salazar Anton'},
        {ctname:'Secretario General',rank:'M.Sc. Francisco Isabel Valladares Castillo'},
        {ctname:'Secretario General',rank:'M.Sc. Francisco Isabel Valladares Castillo'},
      ],
      
    }
  }

}
</script>