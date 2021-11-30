<template>
  <div>
    <div class="headercu">
      <h2 class="text-center mt-5 text-uppercase">
        <b-img src="~/static/img/escudovector2.png"></b-img> Honorable Consejo
        Universitario <b-img src="~/static/img/escudovector2.png"></b-img>
      </h2>
    </div>


      <div class="wraper">
         <Cartas
      v-for="(persona, index) in peoples"
      :key="index"
      :persona="persona.ctname"
      :puesto="persona.rank"
      />
      </div>
    
     
   
    
  </div>
</template>

<script>
import Cartas from '../components/institucion/CUcards.vue'
export default {
  components: {
    Cartas,
  },
  data() {
    return {
      peoples: [
        { rank: 'Rectora', ctname: 'Dra. Flor de Maria Valle Espinoza' },
        { rank: 'Vicerrector General', ctname: 'Dr. Wilber Salazar Anton' },
        {
          rank: 'Secretario General',
          ctname: 'M.Sc. Francisco Valladares Castillo',
        },
        {
          rank: 'Decana Facultad de Ciencias Médicas',
          ctname: 'Dra. Ninoska Delgado Baldizón.',
        },
        {
          rank: 'Decano Facultad de Odontología',
          ctname: 'Dr. Domingo Pichardo López.',
        },
        {
          rank: 'Decana Facultad de Ciencias Químicas',
          ctname: 'M.Sc. Ana Valeria Cisne Zambrana',
        },
        {
          rank: 'Decano Facultad de Ciencias y Tecnología',
          ctname: 'M.Sc. Felipe Santiago Campos.',
        },
        {
          rank: 'Decano Facultad de Ciencias de la Educación y Humanidades',
          ctname: 'M.Sc. Martha Lorena Guido.',
        },
        {
          rank: '',
          ctname: '',
        },
        {
          rank: '',
          ctname: '',
        },
        {
          rank: '',
          ctname: '',
        },
        {
          rank: '',
          ctname: '',
        },
        {
          rank: '',
          ctname: '',
        },
        {
          rank: '',
          ctname: '',
        },
        {
          rank: '',
          ctname: '',
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
  mounted() {
    this.loaded()
  },
  methods: {
    trueone() {
      this.$store.dispatch('changetrue')
    },
    falseone() {
      setTimeout(() => this.$store.dispatch('changefalse'), 6500)
    },
    loaded() {
      this.$store.dispatch('trueloaded')
    },
    notloaded() {
      this.$store.dispatch('falseloaded')
    },
  },
}
</script>

<style scoped>
.headercu img {
  margin-bottom: 20px;
}

.wraper{
  width: 1350px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


</style>