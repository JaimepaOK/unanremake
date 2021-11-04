<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-collapse id="nav-collapse" is-nav>
        <NuxtLink to="/">
          <img
            src="https://i.ibb.co/Nsq3hGd/escudoazul.png"
            alt="escudoazul"
            border="0"
          />
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
                <b-dropdown-divider></b-dropdown-divider>
              </div>
            </div>

            <div v-else-if="item.info === 'ACADEMICA'">
              <div v-for="(item3, index3) in items3" :key="index3">
                <b-dropdown-item :href="item3.ref">
                  {{ item3.data }}
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
              </div>
            </div>

            <div v-else-if="item.info === 'INVESTIGACIÓN y PROYECCIÓN'">
              <div v-for="(item4, index4) in items4" :key="index4">
                <b-dropdown-item :href="item4.ref">
                  {{ item4.data }}
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
              </div>
            </div>

            <div v-else-if="item.info === 'RELACIONES EXTERNAS'">
              <div v-for="(item5, index5) in items5" :key="index5">
                <b-dropdown-item :href="item5.ref">
                  {{ item5.data }}
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
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
        { info: 'ACADEMICA' },
        { info: 'INVESTIGACIÓN y PROYECCIÓN' },
        { info: 'RELACIONES EXTERNAS' },
      ],
      items2: [
        { data: 'Consejo Universitario', ref: 'about' },
        { data: 'Reseña Histórica', ref: '#' },
        { data: 'Misión y Visión', ref: '#' },
        { data: 'Gaceta Universitaria', ref: '#' },
        { data: 'Pensamiento Estratégico', ref: '#' },
        { data: 'Estatutos UNAN-León', ref: '#' },
        { data: 'Registro Académico', ref: '#' },
        { data: 'Dir. Recursos Humanos', ref: '#' },
        { data: 'Div. Auditoría Interna', ref: '#' },
        { data: 'Div. Planificación y Evaluación Institucional', ref: '#' },
        { data: 'División de Informática', ref: '#' },
        { data: 'Información y Documentos', ref: '#' },
        { data: 'Editorial Universitaria', ref: '#' },
        { data: 'Librería Universitaria', ref: '#' },
      ],
      items3: [
        { data: 'Sobre la Vicerrectoría Académica', ref: '#' },
        { data: 'Calendario Académico', ref: '#' },
        { data: 'Metodología de Ingreso a la UNAN-León', ref: '#' },
        { data: 'Sistema de Admisión', ref: '#' },
        { data: 'Formatos y Documentos', ref: '#' },
        { data: 'Facultades | Escuela | Carreras', ref: '#' },
        { data: 'Semestre de Estudios Generales', ref: '#' },
        { data: 'Planes de Estudios de Carreras', ref: '#' },
        { data: 'Centros Universitarios Regionales', ref: '#' },
        { data: 'Reglamento de Estudios de Postgrado', ref: '#' },
        {
          data: 'Reforma del Reglamento del Sistema de Créditos Académicos.',
          ref: '#',
        },
      ],
      items4: [
        { data: 'Presentación VIPS', ref: '#' },
        { data: 'Potencialidades de la UNAN-León', ref: '#' },
        { data: 'Portal de Revistas Científica y Literaria', ref: '#' },
        {
          data: 'Normativas Editoriales de la Revista Científica de la UNAN-León',
          ref: '#',
        },
        { data: 'Catálogo de Laboratorios de la UNAN-León.', ref: '#' },
        {
          data: 'Guía de Presentación de Proyectos de Investigación',
          ref: '#',
        },
        {
          data: 'Reglamento: Jornada Universitaria de Desarrollo Científico, JUDC',
          ref: '#',
        },
        { data: 'Catálogo De Postgrados', ref: '#' },
        { data: 'Políticas de Creación y Funcionamiento', ref: '#' },
        { data: 'CIDS', ref: '#' },
        { data: 'CISTA', ref: '#' },
        { data: 'CIPEI', ref: '#' },
        { data: 'CICAEA', ref: '#' },
        { data: 'CSIG', ref: '#' },
      ],
      items5: [
        { data: 'Presentación de Relaciones Externas', ref: '#' },
        { data: 'Funciones - Atribuciones - Areas de Trabajo', ref: '#' },
        { data: 'Misión, Visión, Valores y Prioridades', ref: '#' },
        { data: 'Ejes Fundamentales de Desarrollo', ref: '#' },
        {
          data: 'Políticas de Cooperación y el Comité de Cooperación Externa CCE.',
          ref: '#',
        },
        { data: 'Servicios Prestados - Tramites Migratorios', ref: '#' },
        { data: 'Equipo de Trabajo y Organigrama de VRE', ref: '#' },
        {
          data: 'Convocatorias de Postgrado: Maestría - Doctorado - Varias',
          ref: '#',
        },
        { data: 'Convenios Internacionales y Nacionales', ref: '#' },
        { data: 'Convocatoria de Proyectos', ref: '#' },
        { data: 'Movilidad Académica e Intercambios Estudiantiles', ref: '#' },
        { data: 'Dirección de Protocolo', ref: '#' },
        { data: 'Cooperación Española COOPES', ref: '#' },
        { data: 'Redes Internacionales y Nacionales', ref: '#' },
      ],
    }
  },
}
</script>

<style scoped>
img {
  width: 130px;
  height: auto;
}
.bg-info {
  background-color: #dbdada !important;
}
.black {
  background-color: #ffffff;
  color: #0000;
}
</style>