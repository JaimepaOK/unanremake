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
  },
  computed:{
    loadstatus(){
      return this.$store.getters.getloadstate
    },
    loadedstatus(){
      return this.$store.getters.getloaded
    }
  },
  created(){
    this.falseone();
  },
  mounted(){
    this.loaded();
  },
    methods:{
        trueone(){
            this.$store.dispatch('changetrue');
        },
        falseone(){
          setTimeout(() => this.$store.dispatch('changefalse'), 6500);
        },
        loaded(){
          this.$store.dispatch('trueloaded')
        },
        notloaded(){
          this.$store.dispatch('falseloaded')
        }
    }

}
</script>