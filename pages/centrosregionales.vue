<template>
  <b-container fluid="md">
    <div id="cardsgeneral">
      <b-card class="text-dark regionalcard">
        <b-card-text>
          <h4>
            <b
              >Existen 3 Centros Universitarios Regionales (CUR) y el Proyecto
              Interuniversitario del CNU, sede "Rigoberto Sampson" In Memóriam,
              Río San Juan, donde participa la UNAN-León y UNAN-Managua.</b
            >
          </h4>
          <b-img-lazy src="~/static/img/mapa_nic_cur.png" center fluid alt="Fluid image"/>
              
          
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  components: {},
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

<style scoped>
.regionalcard {
  background-color: #eeee;
  padding: 45px;
  margin: 10px;
  
}
</style>