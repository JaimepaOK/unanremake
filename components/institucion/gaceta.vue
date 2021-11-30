<template>
  <b-container fluid="lx">
    <div id="cardsgeneral">
      <b-card class="text-dark">
        <b-card-text>
          <div class="text-justify">
            <p>
              <b>La Gaceta Universitaria</b> es el Diario Oficial de la Universidad,
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
            <b-row>
              <b-col>
                <h5 class="text-uppercase">
                  GACETA NO. 28 - ACUERDO DEL CONSEJO UNIVERSITARIO
                </h5>

                <div class="container" style="margin-top:20px">
                  <img
                    src="~/static/img/Gaceta28.jpg"
                    alt=""
                    class="image"
                  /><img />
                  <div class="overlay">
                    <b-button v-b-modal.modal-1 class="icon"
                      ><b-icon icon="zoom-in" font-scale="1.5"></b-icon
                    ></b-button>
                  </div>
                </div>

                <b-modal
                  id="modal-1"
                  size="xl"
                  hide-footer
                  title="Gaceta N° 28 Acuerdo del consejo universitario"
                >
                  <div>
                    <WebViewer
                      :path="`${publicPath}webviewer`"
                      url="http://localhost:3000/api/pdf/Gacetano28.pdf"
                    />
                  </div> </b-modal
              ></b-col>
              <b-col>
                <h5 class="text-uppercase">
                  GACETA NO. 29 - PLAN DE DESARROLLO INSTITUCIONAL 2020-2024
                </h5>
                <div class="container" style="margin-top:20px">
                  <img
                    src="~/static/img/Gaceta29.jpg"
                    alt=""
                    class="image"
                  /><img />
                  <div class="overlay">
                    <b-button v-b-modal.modal-2 class="icon"
                      ><b-icon icon="zoom-in" font-scale="1.5"></b-icon
                    ></b-button>
                  </div>
                </div>
                <b-modal
                  id="modal-2"
                  size="xl"
                  hide-footer
                  title="Gaceta N° 29 Plan de Desarollo Institucional"
                >
                  <div>
                    <WebViewer
                      :path="`${publicPath}webviewer`"
                      url="http://localhost:3000/api/pdf/Gacetano29.pdf"
                    />
                  </div>
                </b-modal>
              </b-col>
              <b-col>
                <h5 class="text-uppercase">
                  GACETA NO. 2<div class="text-sm">REGLAMENTO DE ESTRUCTURA Y FUNCIONAMIENTO DE
                  LOS CENTROS UNIVERSITARIOS REGIONALES DE LA UNAN-LEÓN. II.
                  REGLAMENTO DEL TRABAJO DE LOS ACADÉMICOS</div>
                </h5>
                
                <div class="container">
                  <img
                    src="~/static/img/Gaceta_no2.jpg"
                    alt=""
                    class="image"
                  /><img />
                  <div class="overlay">
                    <b-button v-b-modal.modal-3 class="icon"
                      ><b-icon icon="zoom-in" font-scale="1.5"></b-icon
                    ></b-button>
                  </div>
                </div>
                <b-modal
                  id="modal-3"
                  size="xl"
                  hide-footer
                  title="Gaceta N° 02 Reglamento Academicos"
                >
                  <div>
                    <WebViewer
                      :path="`${publicPath}webviewer`"
                      url="http://localhost:3000/api/pdf/GACETA_No2_REGLAMENTOS_ACADEMICOS_CURS.pdf"
                    />
                  </div>
                </b-modal>
              </b-col>
            </b-row>
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
.container {
  position: relative;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
}
.text-sm{
  font-size: 12px;
  line-height : 12px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  right: 0;
  height: 100%;
  width: 92.5%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: rgba(54, 54, 54, 0.822);
}

.container:hover .overlay {
  opacity: 0.4;
}

.icon {
  color: white;
  font-size: 20px;
  background-color: rgba(5, 5, 5, 0.884);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transition: 0.3s ease;
  text-align: center;
}
.icon:hover {
  background-color: rgb(0, 0, 0);
  font-size: 30px;
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
  height: 78vh;
}
</style>