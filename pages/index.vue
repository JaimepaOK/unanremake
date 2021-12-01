<template>
  <div>
    <div>
      <MainSlider class="sliderx"> </MainSlider>
      <p id="noticias"></p>
    </div>
    
    <div class="homenoticias">
      <h2>NOTICIAS</h2>
      <h5>Sección de Noticias UNAN-León</h5>
      <div v-for="(item, index) in items" :key="index">
        <Noticias
          class="noticias"
          :title="item.titulo"
          :content="item.desc"
          :imgs="item.imgsrc"
          :invert="item.invert"
          :noticeref="item.ref"
        />
      </div>
    </div>

    <div class="redesslider">
      <Slidernoticias/>
    </div>
    <div v-if="maploaded" class="maps">
      <Mapas></Mapas>
    </div>
  </div>
</template>

<script>
import MainSlider from '../components/index/mainslider.vue'
import Noticias from '../components/index/noticias.vue'
import Mapas from '../components/index/googlemap.vue'
import Slidernoticias from '../components/index/slidernoticias.vue' 

export default {
  components: {
    MainSlider,
    Noticias,
    Mapas,
    Slidernoticias,
  },

  data() {
    return {
      maploaded: false,
      items: [
        {
          titulo: 'Admision 2022 UNAN-León',
          desc: 'Formulario de admisión estudiantil UNAN-León 2022',
          imgsrc:
            'https://unanleon.edu.ni/img/portada/UNANLEON_admision2022form.png',
          invert: false,
          ref: 'https://admision.unanleon.edu.ni/admision',
        },
        {
          titulo: 'Congreso de Investigacion Científica',
          desc: 'Congreso de investigación y progreso científico UNAN-León 2021',
          imgsrc: 'https://unanleon.edu.ni/img/portada/VCongreso-CONIC.png',
          invert: true,
          ref: 'https://drive.google.com/file/d/1sc0XDoRH7W_0kdX6uV7LmB6gCFoXsHzf/view',
        },
        {
          titulo: 'Maestria En Bioquímica Clínica',
          desc: 'Programa de posgrado en Bioquímica Clínica UNAN-León 2021',
          imgsrc: 'https://unanleon.edu.ni/img/portada/maestria-bioquimica.svg',
          invert: false,
          ref: 'https://drive.google.com/file/d/1X6ujNSKnYcCSncLmcHbagPO2xyYJecUQ/view',
        },
      ],
    }
  },
  computed: {
    loadstatus() {
      return this.$store.getters.getloadstate
    },
    loadedstatus() {
      return this.$store.getters.getloaded
    },
  },
  
  created() {
    this.falseone()
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleSCroll)
  },
  mounted() {
    this.rmbgcolor()
    this.maploader()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    trueone() {
      this.$store.dispatch('changetrue')
    },
    falseone() {
      setTimeout(() => this.$store.dispatch('changefalse'), 3000)
    },
    loaded() {
      this.$store.dispatch('trueloaded')
    },
    notloaded() {
      this.$store.dispatch('falseloaded')
    },
    maploader() {
      setTimeout(() => {
        this.maploaded = true
      }, 500)
    },
    handleSCroll(event) {
      const header = document.querySelector('#mainnavbar')
      

      if (window.scrollY > 50 && !header.className.includes('v-toolbar--bgchange')) {
        /* cambiamos el color  del background cuando sea mayor a 100px en scroll */
        header.classList.add('bg-info')
        header.classList.remove('bg-transparent')
      } else if (window.scrollY < 50) {
        header.classList.add('bg-transparent')   
      }
    },
    rmbgcolor(){
      const header = document.querySelector('#mainnavbar')
      const hd = document.querySelector('#headermain')
      header.classList.remove('bg-info')
      hd.classList.remove('navbarstick')
      hd.classList.add('navbarabsolute')
    }
  },
}
</script>

<style>
.homenoticias {
  position: relative;
  z-index: 4;
}
.homenoticias {
  padding-top: 20px;
  padding-bottom: 20px;
}
.homenoticias h2 {
  text-align: center;
  color: var(--redunan);
  text-shadow: 0.5px 0.5px 1px  #333;
}
.homenoticias h5 {
  text-align: center;
  color: var(--redunan);
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .noticias {
    margin: 40px 20px 20px 20px !important;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
  }

  .homenoticias h2 {
    text-align: center;
    font-size: 25px;
    color: var(--redunan);
    text-shadow: 1px 1px 2px #333;
  }
  .homenoticias h5 {
    font-size: 16px;
    text-align: center;
    color: var(--redunan);
  }
}
.noticias {
  margin: 40px 150px 10px 150px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
}
</style>