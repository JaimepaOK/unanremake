<template>
    <div>
        <div class="white">
            <div class="center">
                <h3>Calendario Académico</h3>
                <h4>Año Lectivo 2021</h4>
                <img  class="imglogo" src="https://admision.unanleon.edu.ni/views/inc/images/logos/logo.png" alt="">
                <Calendario class="calendarp"></Calendario>
            </div>
        </div>
    </div>
</template>

<script>
import Calendario from '../components/academica/calendario.vue'
export default{
    components:{
        Calendario,
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

<style scoped>
    :root {
    --blueunan: #2a3686;
    --yellowunan: #f0c803;
    --redunan: #930a18;
    }
    
    h3{
        color:var(--redunan);
        text-shadow: 1px 1px 2px #333;
    }
    h4{
        color:var(--blueunan);
        text-shadow: 1px 1px 2px #333;
    }
    
    .imglogo{
        width: 160px;
        height: auto;
        padding-top:20px;
        padding-bottom: 20px;
        
    }
    .white{
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        text-align: center;
    }
    .center{
        background-color: #cecece;
        padding: 60px 0px 60px 0px;
        
    }
    .calendarp{
        margin: 10px 40px 10px 40px;
        background-color: #dbdada;
        box-shadow: 0 8px 10px rgba(0,0,0,0.2);
    }   
</style>