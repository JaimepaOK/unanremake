d<template>
  <div>
    <div class="loading">
      <LoadScreen v-if="loadstatus"/>
    </div>
    <Sidebar v-if="!loadstatus" ></Sidebar>
      <Header v-if="!loadstatus" class="navbarstick" ></Header>
    <div v-if="!loadstatus">
      <Nuxt > </Nuxt>
    </div>
    <Footer v-if="!loadstatus"/>
  </div>
</template>

<script>
import Header from '../components/utils/header.vue'
import Footer from '../components/utils/footer.vue'
import Sidebar from '../components/utils/sidebar.vue'
import LoadScreen from '../components/utils/Loading.vue'



export default {
  components: {
    Header,
    Footer,
    Sidebar,
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
      setTimeout(() => this.$store.dispatch('changefalse'), 6500);
    },
    falseone(){
       this.$store.dispatch('changefalse');
    }
  },
  
}
</script>

<style>
.navbarstick{
  position: sticky;
  top: 0;
  z-index: 9;
  box-shadow: 0 3px 3px rgba(0,0,0,0.2);
}


</style>

