<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="heigt">
      <b-collapse id="nav-collapse" is-nav >
        <NuxtLink to="/">
          <img  class="mainlogo" src="./Escudo7.png" alt="topleft22" border="0">
        </NuxtLink>
        <NuxtLink to="/" class="letras">
        <p >Universidad Nacional Autonoma de Nicaragua,León.</p>
        </NuxtLink>
       
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown
            v-for="(item, index) in items"
            :key="index"
            right
          >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <div>{{ item.info }}</div>
            </template>

            <div v-if="item.info === 'INSTITUCIÓN'">
              <div v-for="(item2, index2) in items2" :key="index2">
                <b-dropdown-item :href="item2.ref">
                  {{ item2.data }}
                </b-dropdown-item>
                <b-dropdown-divider v-if="index2!==4"></b-dropdown-divider>
              </div>
            </div>

            <div v-else-if="item.info === 'ACADÉMICA'">
              <div v-for="(item3, index3) in items3" :key="index3">
                <b-dropdown-item :href="item3.ref">
                  {{ item3.data }}
                </b-dropdown-item>
                <b-dropdown-divider v-if="index3!==3"></b-dropdown-divider>
              </div>
            </div>

            <div v-else-if="item.info === 'INVESTIGACIÓN y PROYECCIÓN'">
              <div v-for="(item4, index4) in items4" :key="index4">
                <b-dropdown-item :href="item4.ref">
                  {{ item4.data }}
                </b-dropdown-item>
                <b-dropdown-divider v-if="index4!==3"></b-dropdown-divider>
              </div>
            </div>
            

            <div v-else-if="item.info === 'RELACIONES EXTERNAS'">
              <div v-for="(item5, index5) in items5" :key="index5">
                <b-dropdown-item :href="item5.ref">
                  {{ item5.data }}
                </b-dropdown-item>
                <b-dropdown-divider v-if="index5!==3"></b-dropdown-divider>
              </div>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        { info: 'INSTITUCIÓN' },
        { info: 'ACADÉMICA' },
        { info: 'INVESTIGACIÓN y PROYECCIÓN' },
        { info: 'RELACIONES EXTERNAS' },
      ],
      items2: [
        { data: 'CONSEJO UNIVERSITARIO', ref: 'consejoU' },
        { data: 'INFORMACIÓN GENERAL', ref: 'informaciongeneral' },
        { data: 'SECRETARÍA GENERAL', ref: '#' },
        { data: 'GESTIÓN INSTITUCIONAL', ref: '#' },
        { data: 'ÁREA ADMINISTRATIVA Y FINANCIERA', ref: '#' },
      ],
      items3: [
        { data: 'CALENDARIO ACADÉMICO', ref: 'calendarpage' },
        { data: 'INFORMACIÓN ACADÉMICA', ref: '#' },
        { data: 'FACULTADES Y ESCUELAS', ref: '#' },
        { data: 'REFORMAS INSTITUCIONALES', ref: '#' },
      ],
      items4: [
        { data: 'INFORMACIÓN GENERAL DE VIPS', ref: '#' },
        { data: 'CATÁLOGO Y GUÍAS', ref: '#' },
        { data: 'CENTROS DE INVESTIGACIÓN', ref: '#' },
        {
          data: 'PROYECCIÓN SOCIAL',
          ref: '#',
        },
      ],
      items5: [
        { data: 'INFORMACIÓN GENERAL DE RELACIONES EXTERNAS', ref: '#' },
        { data: 'CONVOCATORIAS DE BECAS EXTRANJERAS', ref: '#' },
        { data: 'CONVENIOS | PROYECTOS | MOVILIDAD', ref: '#' },
        { data: 'DIRECCIONES | REDES', ref: '#' },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');

.mainlogo {
  
  margin-right:5px;
}

.letras{
  font-family: 'PT Serif', serif;
  text-align:left;
  margin-top: 22px;
  width: 80px;
  color:#ffffff;
  line-height : 15px;
  font-size: 10px;
}

.bg-info {
  background-color: #771414 !important;
}
.black {
  background-color: #ffffff;
  color: #0000;
}
</style>