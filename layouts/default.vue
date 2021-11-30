d<template>
  <div>
    <div class="loading">
      <LoadScreen v-if="loadstatus"/>
    </div>
      <Header v-if="!loadstatus" id="headermain" class="navbarstick showcondition"  ></Header>
    <div v-if="!loadstatus">
      <Nuxt></Nuxt>
      
    </div>
    <Footer v-if="!loadstatus"/>
  </div>
</template>

<script>
import Header from '../components/utils/header.vue'
import Footer from '../components/utils/footer.vue'
import LoadScreen from '../components/utils/Loading.vue'



export default {
  components: {
    Header,
    Footer,
    LoadScreen,
  },
  
  data(){
    return{
      isactive: false,
      isLoading: false,
      loadedpages: false,
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

  mounted(){
    if(!this.loadedstatus){
      this.trueone();
    }else{
      this.falseone();
    }
  },
  
  methods:{
    
    trueone(){
      this.$store.dispatch('changetrue');
    },
    falseonedelay(){
      setTimeout(() => this.$store.dispatch('changefalse'), 7500);
    },
    falseone(){
       this.$store.dispatch('changefalse');
    }
  },
  
}
</script>

<style>
.navbarstick {
    position: sticky;
    top: 0;
    z-index: 9;
    width: 100%;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    transition: 0.3s all ease;      
}

.navbarabsolute {
    position: fixed;
    top: 0px;
    z-index: 9;
    width: 100%;
    transition: 0.3s all ease;      
}

.showside{
  display: none;
}

@media only screen and (max-width: 991px) {
    .showside {
        display: inline;
    }
    .showcondition{
    display: none;
    }
}

</style>

