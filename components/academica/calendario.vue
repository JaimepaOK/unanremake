<template>
  <div>
    <div id="download" class="icondownload">
      <a href="https://drive.google.com/u/0/uc?id=17Muv4NFZhdhoOSWXVpcQcikguFK4-egf&export=download"><b-icon font-scale="1.5" icon="download" ></b-icon></a>
      <b-tooltip target="download" title="Tooltip title" triggers="hover" variant="warning">
        Descargar PDF Calendario Académico 
      </b-tooltip>
    </div>
    <table
      v-for="(semes, indexs) in semestres"
      :key="indexs"
      class="table table-hover"
    >
      <thead>
        <tr class="semestres">
          <td colspan="4">{{ semes.semestre }}</td>
        </tr>
      </thead>
      <tbody v-for="(item, index) in semes.items" :key="index">
        <tr>
          <th v-if="semes.semestre !== 'GENERAL'" scope="row" colspan="4" class="acto">{{ item.act }}</th>
        </tr>
        <tr v-for="(subitem, index2) in item.subact" :key="index2">
          <th scope="row">{{ subitem.fecha }}</th>
          <td colspan="4">{{ subitem.nombre }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  data() {
    return {
      semestres: [
        {
          semestre: 'GENERAL',
          items: [
            {
              subact: [
                {
                  fecha: '22 diciembre 2020',
                  nombre: 'Último día de actividades laborables',
                },
                {
                  fecha: '18 enero 2021',
                  nombre: 'Inicio de actividades laborales',
                },
                {
                  fecha: '18 al 20 enero 2021',
                  nombre: 'Segunda Convocatoria II semestre 2020',
                },
                {
                  fecha: '18 enero al 15 marzo 2021',
                  nombre: 'Planificación académica',
                },
              ],
            },
          ],
        },
        {
          semestre: 'I SEMESTRE',
          items: [
            {
              act: 'CURSOS DE VERANO',
              subact: [
                {
                  fecha: '10 diciembre 2020 al 22 enero 2021',
                  nombre: 'Inscripción en línea',
                },
                {
                  fecha: '18 enero al 27 febrero',
                  nombre: 'Modalidad regular',
                },
                {
                  fecha: '23 y 24 enero al 27 y 28 febrero',
                  nombre: 'Modalidad por encuentro (sabatino y dominical)',
                },
              ],
            },
            {
              act: 'ADMISIÓN AÑO LECTIVO 2021',
              subact: [
                { fecha: '11 febrero', nombre: 'Publicación de resultados' },
              ],
            },
            {
              act: 'MATRÍCULA EN LÍNEA',
              subact: [
                {
                  fecha: '01 febrero al 07 marzo',
                  nombre: 'Matrícula (todas las modalidades)',
                },
              ],
            },
            {
              act: 'INCRIPCIÓN DE COMPONENTES CURRICULARES',
              subact: [
                {
                  fecha: '01 febrero al 07 marzo',
                  nombre: 'Modalidad regular',
                },
                {
                  fecha: '01 febrero al 07 marzo',
                  nombre: 'Modalidad en línea (UALN) I Cuatrimestre',
                },
                {
                  fecha: '14 al 18 junio',
                  nombre: 'Modalidad en línea (UALN) II Cuatrimestre',
                },
                {
                  fecha: '13, 20, 27 marzo (sábado) 14, 21, 28 marzo (domingo)',
                  nombre:
                    'Modalidad encuentro I trimestre (sabatino y dominical)',
                },
                {
                  fecha:
                    '29 mayo, 05, 12 junio (sábado) 30 mayo, 06 y 13 junio (domingo)',
                  nombre:
                    'Modalidad encuentro II trimestre (sabatino y dominical)',
                },
              ],
            },
            {
              act: 'INICIO DE CLASE',
              subact: [
                { fecha: '15 marzo', nombre: 'Modalidad regular' },
                {
                  fecha: '15 marzo',
                  nombre: 'Modalidad en línea (UALN) I Cuatrimestre',
                },
                {
                  fecha: '14 junio',
                  nombre: 'Modalidad en línea (UALN) II Cuatrimestre',
                },
                {
                  fecha: '13 y 14 marzo',
                  nombre: 'Modalidad encuentro I trimestre',
                },
                {
                  fecha: '29 y 30 mayo',
                  nombre: 'Modalidad encuentro II trimestre',
                },
              ],
            },
            {
              act: 'ÚLTIMO DÍA DE CLASE',
              subact: [
                { fecha: '23 julio', nombre: 'Modalidad regular' },
                {
                  fecha: '11 junio',
                  nombre: 'Modalidad en línea (UALN) I Cuatrimestre',
                },
                {
                  fecha: '03 septiembre',
                  nombre: 'Modalidad en línea (UALN) II Cuatrimestre',
                },
                {
                  fecha: '22 y 23 mayo',
                  nombre: 'Modalidad encuentro I trimestre',
                },
                {
                  fecha: '31 julio y 01 agosto',
                  nombre: 'Modalidad encuentro II trimestre',
                },
              ],
            },
            {
              act: 'CORTE EVALUATIVO',
              subact: [
                {
                  fecha: '23 al 31 mayo',
                  nombre: 'Registro del I corte evaluativo',
                },
                {
                  fecha: '16 al 23 Julio',
                  nombre: 'Registro del II corte evaluativo',
                },
                {
                  fecha: '26 al 30 julio',
                  nombre: 'Segunda convocatoria (modalidad regular)',
                },
              ],
            },
            {
              act: 'ACTIVIDADES INSTITUCIONALES I SEMESTRE',
              subact: [
                {
                  fecha: '10 enero',
                  nombre: 'Fundación de la Universidad (UNAN-León)',
                },
                {
                  fecha: 'Febrero',
                  nombre: 'I Foro Universitario de Revistas Científicas',
                },
                {
                  fecha: '25 marzo',
                  nombre: 'Día de la Autonomía Universitaria',
                },
                { fecha: 'Marzo', nombre: 'II Congreso de Género' },
                {
                  fecha: '20 Abril',
                  nombre: 'Héroe de la Paz Christhian Emilio Cadena',
                },
                { fecha: 'Mayo', nombre: 'III Simposio de Proyección Social' },
                {
                  fecha: 'Junio',
                  nombre: 'I Congreso de Educación en UNAN-León.',
                },
                { fecha: 'Junio', nombre: 'I Encuentro del Talento Humano' },
                { fecha: '(04) 05 Junio', nombre: 'Marcha Ecológica' },
                { fecha: '20 al 23 Julio', nombre: 'Semana Universitaria' },
              ],
            },
          ],
        },
        {
          semestre: 'II SEMESTRE',
          items: [
            {
              act: 'INCRIPCIÓN DE COMPONENTES CURRICULARES',
              subact: [
                {
                  fecha: '26 julio al 08 agosto',
                  nombre: 'Modalidad regular',
                },
                {
                  fecha: '06 al 10 septiembre',
                  nombre: 'Modalidad en línea ( UALN) III Cuatrimestre',
                },
                {
                  fecha: '07, 14, 21 agosto (sábado) 08, 15, 22 agosto (domingo)',
                  nombre: 'Modalidad encuentro III trimestre',
                },
                {
                  fecha: '16, 23, 30 octubre (sábado) 17, 24, 31 octubre (domingo)',
                  nombre: 'Modalidad encuentro IV trimestre',
                },
              ],
            },
            {
              act: 'INICIO DE CLASE',
              subact: [
                { fecha: '16 agosto', nombre: 'Modalidad regular' },
                { fecha: '06 septiembre', nombre: 'Modalidad en línea ( UALN) III Cuatrimestre' },
                { fecha: '07 y 08 agosto', nombre: 'Modalidad encuentro III trimestre' },
                { fecha: '07 y 08 agosto', nombre: 'Modalidad encuentro IV trimestre' },
              ],
            },
            {
              act: 'MATRÍCULA EN LÍNEA',
              subact: [
                {
                  fecha: '01 febrero al 07 marzo',
                  nombre: 'Matrícula (todas las modalidades)',
                },
              ],
            },
            {
              act: 'ÚLTIMO DÍA DE CLASE',
              subact: [
                {
                  fecha: '10 diciembre',
                  nombre: 'Modalidad regular',
                },
                {
                  fecha: '03 diciembre',
                  nombre: 'Modalidad en línea (UALN) III Cuatrimestre',
                },
                {
                  fecha: '09 y 10 octubre',
                  nombre: 'Modalidad encuentro III trimestre',
                },
                {
                  fecha: '18 y 19 diciembre',
                  nombre: 'Modalidad encuentro IV trimestre',
                },
              ],
            },
            {
              act: 'CORTE EVALUATIVO',
              subact: [
                { 
                  fecha: '11 al 18 octubre', 
                  nombre: 'Registro del I Corte evaluativo' 
                },
                {
                  fecha: '13 al 15 diciembre',
                  nombre: 'Registro del II Corte evaluativo',
                },
                {
                  fecha: '13 y 14 marzo',
                  nombre: 'Segunda convocatoria',
                },
                
              ],
            },
            {
              act: 'ACTIVIDADES INSTITUCIONALES II SEMESTRE',
              subact: [
                { 
                fecha: 'agosto', 
                nombre: 'Seminario Internacional de Género' 
                },
                {
                  fecha: 'septiembre',
                  nombre: 'Visitas Guiada Expociencia',
                },
                {
                  fecha: 'octubre',
                  nombre: 'Expo Ferias Territoriales',
                },
                {
                  fecha: 'octubre',
                  nombre: 'Rally Nicaragüense',
                },
                {
                  fecha: 'octubre',
                  nombre: 'V Congreso de Investigación Científica',
                },
                {
                  fecha: 'octubre',
                  nombre: 'XXXIX Jornada Universitaria de Desarrollo Científico (JUDC).',
                },
                {
                  fecha: '30 octubre',
                  nombre: 'Autonomía Costa Caribe',
                },
                {
                  fecha: 'noviembre',
                  nombre: 'Jornada Universitaria de Reconocimiento a la Producción Intelectual',
                },
                {
                  fecha: 'noviembre',
                  nombre: 'Jornada Universitaria de Reconocimiento a la Labor Extensionista',
                },
                {
                  fecha: 'noviembre',
                  nombre: 'Hackathon Nicaragua',
                },
                {
                  fecha: 'noviembre',
                  nombre: 'Actividades de CHICA CUUN',
                },
              ],
            },
            {
              act: 'DÍAS FERIADOS NACIONALES y LOCALES',
              subact: [
                {
                  fecha: '1° enero',
                  nombre: 'Año Nuevo',
                },
                {
                  fecha: '01 y 02 abril',
                  nombre: 'Jueves y Viernes Santo',
                },
                {
                  fecha: '1° mayo',
                  nombre: 'Día Internacional de los Trabajadores',
                },
                {
                  fecha: '03 mayo',
                  nombre: 'Día de la Cruz (CUR-Jinotega)',
                },
                {
                  fecha: '19 julio',
                  nombre: '42 Aniversario de la Revolución Popular Sandinista',
                },
                {
                  fecha: '25 julio',
                  nombre: 'Día de Santiago (CUR-Somoto)',
                },
                {
                  fecha: '10 agosto',
                  nombre: 'Día de San Lorenzo (CUR-Somotillo)',
                },
                {
                  fecha: '14 y 15 septiembre',
                  nombre: 'Fiestas Patrias',
                },
                {
                  fecha: '24 septiembre',
                  nombre: 'Día de la Virgen de Mercedes (Sede central)',
                },
                {
                  fecha: '08 diciembre',
                  nombre: 'Día de la Inmaculada Concepción de María',
                },
                {
                  fecha: '25 diciembre',
                  nombre: 'Navidad',
                },
                
              ],
            },
            {
              act: 'DÍAS DE ASUETO',
              subact: [
                {
                  fecha: '42 Aniversario de la Revolución Popular Sandinista',
                  nombre: 'Lunes, martes, miércoles santo y lunes de Pas-cua',
                },
                {
                  fecha: '08 marzo',
                  nombre: 'Día internacional de la Mujer',
                },
                {
                  fecha: '30 mayo',
                  nombre: 'Día de la Madre Nicaragüense',
                },
                { 
                  fecha: '29 junio', 
                  nombre: 'Día del Maestro' 
                },
                {
                  fecha: '02 al 06 agosto',
                  nombre: 'Vacaciones Inter semestrales',
                },
                { 
                  fecha: '14 agosto', 
                  nombre: 'Día de la Gritería Chiquita' 
                },
                {
                  fecha: '02 noviembre',
                  nombre: 'Día de los Difuntos',
                },
                { 
                  fecha: '07 diciembre', 
                  nombre: 'Día de la Gritería' 
                },
              ],
            },
            {
              act: 'ACTIVIDADES PARA EL AÑO LECTIVO 2022',
              subact: [
                {
                  fecha: 'Noviembre 2021 al 21 enero 2022',
                  nombre: 'Prematrícula',
                },
              ],
            }
            
          ],
        },
      ],
    }
  },
}
</script>

<style>
.semestres {
  color: var(--yellowunan);
  background-color: #771414;
  font-size: 120%;
}
.acto {
  font-size: 110%;
  color: var(--blueunan);
}
.icondownload{
  background-color: #771414;
  color: var(--yellowunan);
  position: absolute;
  right: 80px;
  margin-top: 12px;
  
}
.icondownload:hover{
  color: #fdda2b;
  transform: scale(1.2);
  -webkit-transition: transform 0.1s ease-in-out;
  cursor: pointer;
}
.icondownload a{
  color: var(--yellowunan);
}
</style>  