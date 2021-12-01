<template>
  <div>
    <b-carousel
      id="carousel-fade2"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      >
      </b-carousel-slide>
      <b-carousel-slide
        v-for="(item, index) in items"
        :key="index"
        
        img-src="https://picsum.photos/1024/480/?image=10"
      >
        hola
        <Noticias
          class="noticias"
          :title="item.titulo"
          :content="item.desc"
          :imgs="item.imgsrc"
          :invert="item.invert"
          :noticeref="item.ref"
        />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          titulo: 'Admision 2022 UNAN-León',
          desc: 'Formulario de admisión estudiantil UNAN-León 2022',
          imgsrc:
            'https://unanleon.edu.ni/img/portada/UNANLEON_admision2022form.png',
          invert: false,
          ref: 'https://admision.unanleon.edu.ni/admision',
        },
        {
          titulo: 'Congreso de Investigacion Científica',
          desc: 'Congreso de investigación y progreso científico UNAN-León 2021',
          imgsrc: 'https://unanleon.edu.ni/img/portada/VCongreso-CONIC.png',
          invert: true,
          ref: 'https://drive.google.com/file/d/1sc0XDoRH7W_0kdX6uV7LmB6gCFoXsHzf/view',
        },
        {
          titulo: 'Maestria En Bioquímica Clínica',
          desc: 'Programa de posgrado en Bioquímica Clínica UNAN-León 2021',
          imgsrc: 'https://unanleon.edu.ni/img/portada/maestria-bioquimica.svg',
          invert: false,
          ref: 'https://drive.google.com/file/d/1X6ujNSKnYcCSncLmcHbagPO2xyYJecUQ/view',
        },
      ],
    }
  },
}
</script>

<style  scoped>
.noticias {
  margin: 40px 150px 10px 150px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
}
</style>