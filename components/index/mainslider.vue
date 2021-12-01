<template>
  <div>
    <div class="filter">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        :interval="3000"
      >
        <b-carousel-slide id="more" img-src="./header2.jpg">
          <div class="wrapper">
            <div class="cards-flex hiddenhover">
              Consultar Notas
              <div
                id="iconito"
                class="
                  
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                "
              >
                <b-icon icon="clipboard-check" font-scale="2"></b-icon>
              </div>

              <div
                id="botoncito"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                "
              >
                <b-button id="btd" variant="primary" class="mb-2" href="https://portalestudiantes.unanleon.edu.ni/consulta_estudiantes.php" target="_blank">
                  Más<b-icon  icon="arrow-right" style="margin-bottom: 4px;" ></b-icon> 
                </b-button>
              </div>
            </div>
            <div class="cards-flex hiddenhover">
              Aulas Virtuales
              <div
                id="iconito"
                class="
                  
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                "
              >
                <b-icon icon="file-earmark-easel" font-scale="2"></b-icon>
              </div>

              <div
                id="botoncito"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                "
              >
                <b-button id="btd" variant="primary" class="mb-2" href="https://avirtual.unanleon.edu.ni/" target="_blank">
                  Más<b-icon  icon="arrow-right" style="margin-bottom: 4px;" ></b-icon> 
                </b-button>
              </div>
            </div>
            <div class="cards-flex hiddenhover">
              Calendaio Academico
              <div
                id="iconito"
                class="
                  
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                "
              >
                <b-icon icon="calendar2-week" font-scale="2"  ></b-icon>
              </div>

              <div
                id="botoncito"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                "
              >
                <b-button id="btd" variant="primary" class="mb-2" href="http://localhost:3000/calendarpage" >
                  Más<b-icon  icon="arrow-right" style="margin-bottom: 4px;" ></b-icon> 
                </b-button>
              </div>
            </div>
          </div>
          <a href="#noticias"
            ><b-icon icon="Chevron-down" font-scale="1.5"></b-icon
          ></a>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>

<style>
.btn-primary {
  color: #fff;
  background-color: #2a3686;
  border-color: #36418a;
  
}
.carousel-item img {
  height: 620px !important ;
}

#botoncito {
  opacity: 0;
  height: 50%;
  transform: scale(0.5);
  transition: 0.3s all ease;
}
#botoncito .btn-primary:focus, .btn-primary.focus {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    box-shadow:transparent;
}
#botoncito .btn:focus, .btn.focus {
    outline: 0;
    box-shadow: transparent; 
}

.hiddenhover:hover #botoncito {
  height: 70%;
  opacity: 1;
  transform: scale(1);
}

#iconito {
  margin-top: 15px;
  font-size: 20px;
  transition: 0.5s all ease;
}

.hiddenhover:hover #iconito {
  margin-top: 5px;
  font-size: 15px;
}

#btd svg{
  transform: rotate(0deg);
  margin-left: 5px;
  transition: 0.5s all ease;
}
#btd:hover svg{
  transform: rotate(-90deg);
}


.carousel {
  width: 100%;
}
#more a {
  color: rgb(221, 221, 221);
  transition: 0.3s all ease;
}
#more a:hover {
  color: #fff;
  font-size: 15.4px;
}
#more .b-icon.bi {
  vertical-align: -0.5em;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 250px;
  margin-top: 5px;
}

.cards-flex {
  align-self: flex-end;
  width: calc(100% / 3 - 45px);
  height: 100px;
  background: #0e133a98;
  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.21);
  border-radius: 3px;
  margin: 0 10px 10px;
  text-align: center;
  padding: 10px;
  box-sizing: content-box;
  transition: 0.5s all ease;
}

.cards-flex:hover {
  height: 120px;
  background-color: #1c245a;
  transition: 0.5s all ease;
}

@media only screen and (max-width: 740px) {
  .wrapper {
    flex-wrap: nowrap;
  }

  .cards-flex {
    width: calc(100% / 2 - 50px);
    margin: 0px 0px 10px 20px !important;
  }
}

@media only screen and (max-width: 420px) {
  .wrapper {
    flex-wrap: nowrap;
  }

  .cards-flex {
    width: 100%;
    margin: 0 0 15px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .carousel-item img {
    height: 260px !important ;
  }
  .carousel {
    width: 100%;
  }
}

@media only screen and (min-width: 1367px) and (max-width: 1920px) {
  .carousel-item img {
    height: 620px !important ;
  }
  .carousel {
    width: 100%;
  }
}
.filter img {
  filter: brightness(0.7);
  color: #ffff;
}
</style>