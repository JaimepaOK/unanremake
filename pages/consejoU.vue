<template>
  <div class="contenido">
    <div class="c-in">
    <b-card 
        v-for="(colunm, index) in colums"
      :key="index"
      overlay
      class="b-card"
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      title="Image Overlay"
      sub-title="Subtitle"
      
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the
        card's content.
      </b-card-text>
    </b-card>
    </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      colums: [
        { desc: 'Sobre la Universidad' },
        { desc: 'Recursos Académicos' },
        { desc: 'Servicios TIC' },
        { desc: 'Ubicación y Contacto' },
      ],
    }
  },
}
</script>


<style scoped>

.contenido[data-v-49975355] {
    background-color: rgb(22 0 0);
    padding: 1px;
}
.c-in{
    padding: 10px;
    margin: 30px;
}
.b-card{
    background-color: #000;
    padding: 10px;
}
</style>