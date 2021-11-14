<template>
  <div>
    <div class="filter" >
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        
        controls
        :interval="3000"
      >
        <b-carousel-slide
          img-src="https://unanleon.edu.ni/img/208aniversario.png">
        <b-button href="#noticias" pill variant="primary" >Ver Más</b-button>
        <b-button href="#noticias" pill variant="primary">Ver Más</b-button>
        <b-button href="#noticias" pill variant="primary">Ver Más</b-button>
        <b-button href="#noticias" pill variant="primary">Ver Más</b-button>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://unanleon.edu.ni/img/portada/UNANLEON_admision2022.png"
        >
        <b-button href="#noticias" pill variant="primary">Ver Más</b-button>
        </b-carousel-slide>
        <b-carousel-slide
          
          img-src="https://i.ibb.co/R3yJ10h/banner2.jpg"
        >
        <b-button href="#noticias" pill variant="primary">Ver Más</b-button>
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
  height: 520px !important ;
}

.carousel {
  width: 100%;
}

@media only screen and (min-width: 375px) and (max-width: 600px) {
  .carousel-item img {
   height: 320px !important ;
  }
  .carousel {
    width: 100%;
  }
}
.filter img{
  filter: brightness(0.7);
  color: #ffff;
}
#noticias button{

}


</style>