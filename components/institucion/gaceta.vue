<template>
  <b-container fluid="lx">
    <div id="cards3">
      <b-card class="text-dark">
        <b-card-text>
          <div class="text-justify">
            <p>
              La Gaceta Universitaria es el Diario Oficial de la Universidad,
              donde se publican todos los acuerdos, pronunciamientos y demás
              documentos oficiales, aprobados por el Consejo Universitario,
              Consejos de Facultad y demás instancias de la Institución. Su
              publicación será mensual y estará a cargo del Secretario General.
            </p>
            <p>
              Las publicaciones en la Gaceta Universitaria estan disponibles
              detalladamente en formato PDF para su descarga.
            </p>
          </div>
        </b-card-text>
        <b-card-text>
          <div>
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" size="xl" hide-footer title="BootstrapVue">
              <div>
                <WebViewer
                  :path="`${publicPath}webviewer`"
                  url="https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"
                />
              </div>
            </b-modal>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import WebViewer from '../WebViewer.vue'
export default {
  components: {
    WebViewer,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
}
</script>

<style scoped>
#cards3 .card {
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  text-align: center;
  background-color: #eeee;
  background-clip: border-box;
  border: 0 px solid rgba(255, 255, 255, 0);
  border-radius: 0.25 rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b3763;
  margin: 0 auto;
  height: 100vh;
}
#webviewer {
  height:  78vh;
}
</style>