<template>
  <div class="hide">
    <b-navbar id="sidebar" variant="info" type="dark">
      <NuxtLink to="/">
        <img
          class="mainlogo"
          src="./Escudo7.png"
          alt="escudomobile"
          border="0"
        />
      </NuxtLink>
      <NuxtLink to="/" class="letras"> </NuxtLink>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right
          ><b-button v-b-toggle.sidebar-right
            ><b-icon icon="list" font-scale="1"></b-icon
          ></b-button>
          <b-sidebar id="sidebar-right" title="UNAN-León." right shadow>
            <div class="px-3 py-2">
              <b-nav vertical class="w-25">
                <b-nav-item-dropdown
                  v-for="(item, index) in items"
                  :id="'my-nav-dropdown' + 1"
                  :key="index"
                  :text="item.info"
                  toggle-class="nav-link-custom"
                  left
                >
                  <b-dropdown-item v-for="(subitem, indexsub) in item.subitems" :key="indexsub">
                    <NuxtLink :to="subitem.ref">
                    {{subitem.data}}
                    </NuxtLink>
                    {{indexsub}}
                  </b-dropdown-item>
                  <b-dropdown-divider/>
                </b-nav-item-dropdown>
              </b-nav>
            </div>
          </b-sidebar></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          info: 'INSTITUCIÓN',
          subitems: [
            { data: 'CONSEJO UNIVERSITARIO', ref: 'consejoU' },
            { data: 'INFORMACIÓN GENERAL', ref: 'informaciongeneral' },
            { data: 'SECRETARÍA GENERAL', ref: '#' },
            { data: 'GESTIÓN INSTITUCIONAL', ref: '#' },
            { data: 'ÁREA ADMINISTRATIVA Y FINANCIERA', ref: '#' },
          ],
        },

        {
          info: 'ACADÉMICA',
          subitems: [
            { data: 'CALENDARIO ACADÉMICO', ref: 'calendarpage' },
            { data: 'INFORMACIÓN ACADÉMICA', ref: '#' },
            { data: 'FACULTADES Y ESCUELAS', ref: '#' },
            { data: 'REFORMAS INSTITUCIONALES', ref: '#' },
          ],
        },

        {
          info: 'INVESTIGACIÓN y PROYECCIÓN',
          subitems: [
            { data: 'INFORMACIÓN GENERAL DE VIPS', ref: '#' },
            { data: 'CATÁLOGO Y GUÍAS', ref: '#' },
            { data: 'CENTROS DE INVESTIGACIÓN', ref: '#' },
            {
              data: 'PROYECCIÓN SOCIAL',
              ref: '#',
            },
          ],
        },

        {
          info: 'RELACIONES EXTERNAS',
          subitems: [
            { data: 'INFORMACIÓN GENERAL DE RELACIONES EXTERNAS', ref: '#' },
            { data: 'CONVOCATORIAS DE BECAS EXTRANJERAS', ref: '#' },
            { data: 'CONVENIOS | PROYECTOS | MOVILIDAD', ref: '#' },
            { data: 'DIRECCIONES | REDES', ref: '#' },
          ],
        },
      ],
    }
  },
}
</script>
<style>
#sidebar .mainlogo {
  margin-left: 5px;
  height: auto;
  width: 40px;
}
#sidebar .letras {
  font-family: 'PT Serif', serif;
  text-align: left;
  margin-top: 22px;
  width: 20px;
  color: #ffffff;
  line-height: 15px;
  font-size: 6px;
}
#sidebar .nav-item {
  transition: all 200ms linear;
}
#sidebar .nav-item:hover .nav-link {
  color: var(--yellowunan) !important;
}
#sidebar .nav-item:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: '';
  opacity: 0;
  transition: all 200ms linear;
}
#sidebar .btn-secondary:focus,
.btn-secondary.focus {
  color: #fff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 0%);
}

#sidebar .btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 0%);
}
#sidebar .btn-secondary {
  color: #fff;
  background-color: transparent;
  border-color: transparent;
}

#sidebar .bg-light {
  background-color: var(--rednavbar) !important;
  transition: all 200ms linear;
  width: 260px;
}
#sidebar .text-dark {
    color: #ffffff !important;
}
#sidebar b,
strong {
  font-weight: bolder;
  font-size: 14px;
  color: white;
}
#sidebar a{
  font-size: 12px;
  text-align: left;
  
}
</style>
