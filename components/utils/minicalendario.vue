<template>
<div class="h-100 d-flex align-items-center mt-5 flex-column">
    <b-calendar v-model="value" locale="es-ES" @context="onContext"></b-calendar>
</div>
</template>

<script>
export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
</script>

<style scoped>

</style>