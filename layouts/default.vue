d<template>
  <div>
    <div>

    </div>
    <Sidebar></Sidebar>
      <Header class="navbarstick"></Header>
    <div>
      <Nuxt > </Nuxt>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/utils/header.vue'
import Footer from '../components/utils/footer.vue'
import Sidebar from '../components/utils/sidebar.vue'



export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
  data(){
    return{
      isactive: false,
    }
  },
  mounted(){
    
  },
  methods:{
    init(mensaje){
      
      alert(mensaje);
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

