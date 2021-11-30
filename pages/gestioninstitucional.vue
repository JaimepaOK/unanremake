<template>
  <b-container fluid="lg">
    <div>
        <Loading/>
    </div>
  </b-container>
</template>

<script>
import Loading from "../components/utils/Loading.vue"
export default {
  components: {
      Loading,
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
</style>