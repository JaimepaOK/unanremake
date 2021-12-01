<template>
  <b-container fluid="lx">
    <div id="cardsgeneral">
      <b-card class="text-dark">
        <b-card-text>
          <b-row>
            <b-col>
              <h1 class="font-weight-bold">
                ESTATUTOS UNIVERSIDAD NACIONAL AUTÓNOMA DE NICARAGUA UNAN-León
              </h1>

              <div class="container">
                <img
                  src="~/static/img/estatutos_unanleon.jpg"
                  alt=""
                  class="image"
                  
                /><img />
                <div class="overlay">
                  <b-button v-b-modal.modal-4 class="icon"
                    ><b-icon icon="zoom-in" font-scale="1.5"></b-icon
                  ></b-button>
                </div>
              </div>
              <b-modal
                id="modal-4"
                size="xl" 
                hide-footer
                title="Estatutos Academicos"
              >
                <div>
                  <WebViewer
                    :path="`${publicPath}webviewer`"
                    url="http://localhost:3000/api/pdf/estatutos_unanleon.pdf"
                  />
                </div>
              </b-modal>
            </b-col>
          </b-row>
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
  width: 40%;
  height: auto;
}

.image {
  width: 100%;
  height: auto;
}
.text-sm {
  font-size: 12px;
  line-height: 12px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  right: 0;
  height: 100%;
  width: 94%;
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

#webviewer {
  height: 78vh;
}
</style>