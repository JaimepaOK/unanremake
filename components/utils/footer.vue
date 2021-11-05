<template>
  <div>
    <footer class="page-footer font-small unique-color-dark">
      <div>
        <div class="container">
          <!-- Grid row-->
          <div class="row py-4 d-flex align-items-center">
            <!-- Grid column -->
            <div class="container text-center text-md-left mt-5">
              <!-- Grid row -->
              <div class="row mt-3">
                <!-- Grid column -->
                <div
                  v-for="(colum, cindex) in colums"
                  :key="cindex"
                  class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                >
                  <!-- Content -->
                  <h6 class="text-uppercase font-weight-bold">
                    {{ colum.index }}
                  </h6>
                  <hr
                    class="
                      deep-purple
                      accent-2
                      mb-4
                      mt-0
                      d-inline-block
                      mx-auto
                    "
                    style="width: 60px"
                  />

                  <div v-if="colum.index === 'Sobre la Universidad'">
                    <p v-for="(item, indexi) in items" :key="indexi">
                      <a :href="item.ref">{{ item.link }}</a>
                    </p>
                  </div>

                  <div v-if="colum.index === 'Recursos Académicos'">
                    <p v-for="(item2, indexi2) in items2" :key="indexi2">
                      <a :href="item2.ref">{{ item2.link }}</a>
                    </p>
                  </div>

                  <div v-if="colum.index === 'Servicios TIC'">
                    <p v-for="(item3, indexi3) in items3" :key="indexi3">
                      <a :href="item3.ref">{{ item3.link }}</a>
                    </p>
                  </div>

                  <div v-if="colum.index === 'Ubicación y Contacto'">
                    <p v-for="(item4, indexi4) in items4" :key="indexi4">
                      <b-icon :icon="item4.icon" scale="1" />{{item4.link}}
                    </p>
                  </div>
                </div>
                <!-- Grid column -->
              </div>
              <!-- Grid row -->
            </div>

            <!-- Grid column -->
          </div>
          <!-- Grid row-->
        </div>
      </div>
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://unanleon.edu.ni/">www.unanleon.edu.ni</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      Message: 'hi!',
      colums: [
        { index: 'Sobre la Universidad' },
        { index: 'Recursos Académicos' },
        { index: 'Servicios TIC' },
        { index: 'Ubicación y Contacto' },
      ],
      items: [
        { link: '¤ Misión y Visión', ref: '#' },
        { link: '¤ Gaceta Universitaria', ref: '#' },
        { link: '¤ Gaceta Universitaria', ref: '#' },
        { link: '¤ Estatutos UNAN-León', ref: '#' },
        { link: '¤ Historia de la UNAN-León', ref: '#' },
        { link: '¤ Potencialidades de la UNAN-León', ref: '#' },
      ],
      items2: [
        { link: '¤ Sistema de Bibliotecas - SIBUL', ref: '#' },
        { link: '¤ Portal de Revistas: Científica y Literarias', ref: '#' },
        { link: '¤ Planes de Estudios', ref: '#' },
      ],
      items3: [
        { link: '¤ AULA-VIRTUAL', ref: '#' },
        { link: '¤ Guía Telefónica', ref: '#' },
        { link: '¤ Correo Electrónico Institucional - Office 365', ref: '#' },
        { link: '¤ Correo Electrónico ESTUDIANTIL - Office 365', ref: '#' },
      ],
	  items4:[
		  {link: ' Edificio Central, contiguo a la Iglesia La Merced. | Apartado Postal 68', icon:'geo-alt'},
		  {link: ' Webdi.unanleon.edu.ni', icon:'inbox'},
		  {link: ' Lun-Vie, 8am - 12m | 2pm - 6pm', icon:'calendar3'},
		  {link: ' PBX: +505-23115013 | FAX: +505-23114970', icon:'telephone'}
	  ]
    }
  },
}
</script>