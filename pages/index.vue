<template>
  <div>
    <div class="separation">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        :interval="4000"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>

        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>



  </div>
</template>


<script>
</script>

<style>
.separation {
    margin: 20px;
}
</style>
