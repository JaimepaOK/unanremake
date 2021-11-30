<template>
  <div>
    <div>
      <b-tabs id="internal" content-class="mt-3">
        <!-- This tabs content will always be mounted -->
        <b-tab title="Reseña Historica" lazy
          ><b-alert show><Resumen/></b-alert
        ></b-tab>

        <!-- This tabs content will not be mounted until the tab is shown -->
        <!-- and will be un-mounted when hidden -->
        <b-tab title="Misión y Visión" lazy
          ><b-alert show><Misionvision/></b-alert></b-tab
        >
        <b-tab title="Gaceta Universitaria" lazy
          ><b-alert show><Gaceta/></b-alert></b-tab
        >
        <b-tab title="Pensamiento Estratégico" lazy
          ><b-alert show><Pensamiento/></b-alert></b-tab
        >
        <b-tab title="Estatutos UNAN-León" lazy
          ><b-alert show><Estatutos/></b-alert></b-tab
        >
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Resumen from '../components/institucion/resumenhistorico.vue'
import Misionvision from '../components/institucion/misionyvision.vue'
import Gaceta from '../components/institucion/gaceta.vue'
import Pensamiento from '../components/institucion/pensamiento.vue'
import Estatutos from '../components/institucion/estatutos.vue'
export default {
  components: {
    Resumen,
    Misionvision,
    Gaceta,
    Pensamiento,
    Estatutos,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    loadstatus() {
      return this.$store.getters.getloadstate
    },
  },
  created() {},
  mounted() {
    this.loaded()
  },
  methods: {
    trueone() {
      this.$store.dispatch('changetrue')
    },
    falseone() {
      setTimeout(() => this.$store.dispatch('changefalse'), 650)
    },
    loaded() {
      this.$store.dispatch('trueloaded')
    },
  },
}
</script>

<style>
#internal .text-yellow {
  color: var(--yellowunan);
}



#internal .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: var(--yellowunan);
  background-color: #080a75;
    border-color: #dee2e6 #dee2e6 #fff;
}

#internal .nav-item:hover .nav-link {
  color: #00027ea2;
  background-color: rgba(24, 24, 87, 0.897);
}
#internal .alert-info {
    color: #0c5460;
    background-color: #e0e0e0;
    border-color: #e0e0e0;
}
#internal a {
  color: rgb(0, 0, 148);
}
#internal .nav-link {
  margin: 5px 0px 0px 5px;
  font-weight: 500;
}
</style>