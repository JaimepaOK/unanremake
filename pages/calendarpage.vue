<template>
  <div>
    <div class="white">
      <div class="center">
        <h3>Calendario Académico</h3>
        <h4>Año Lectivo 2021</h4>
        <img class="imglogo" src="~/static/img/escudovector4.png" alt="" />
        <Calendario class="calendarp"></Calendario>
      </div>
    </div>
  </div>
</template>

<script>
import Calendario from '../components/academica/calendario.vue'
export default {
  components: {
    Calendario,
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

h3 {
  color: var(--redunan);
  text-shadow: 0.5px 0.5px 1px  #333;
}
h4 {
  color: var(--blueunan);
  text-shadow: 0.5px 0.5px 1px #333;
}

.imglogo {
  padding-top: 20px;
  padding-bottom: 20px;
}
.white {
  color: rgb(0, 0, 0);
  text-align: center;
}
.center {
  padding: 20px 0px 20px 0px;
}
.calendarp {
  margin: 10px 40px 10px 40px;
  background-color: #e0e0dc;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
}
</style>