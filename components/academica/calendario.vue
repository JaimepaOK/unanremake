<template>
  <div>
    <table class="table table-hover">
  <thead>
    <tr class="semestres">
      <td colspan="4">I SEMESTRE</td>
    </tr>
  </thead>
  <tbody v-for="(item,index) in items" :key="index">
      <tr>
        <th scope="row" colspan="4" class="acto">{{item.act}}</th>
      </tr>
    <tr v-for="(subitem,index2) in item.subact" :key="index2">
      <th scope="row">{{subitem.fecha}}</th>
      <td colspan="4">{{subitem.nombre}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {act:'CURSOS DE VERANO',subact:[{fecha:'10 diciembre 2020 al 22 enero 2021',nombre:'Inscripción en línea'},{fecha:'18 enero al 27 febrero',nombre:'Modalidad regular'},{fecha:'23 y 24 enero al 27 y 28 febrero',nombre:'Modalidad por encuentro (sabatino y dominical)'},]},
          {act:'ADMISIÓN AÑO LECTIVO 2021',subact:[{fecha:'11 febrero',nombre:'Publicación de resultados'}]},
          {act:'MATRÍCULA EN LÍNEA',subact:[{fecha:'01 febrero al 07 marzo',nombre:'Matrícula (todas las modalidades)'}]},
          {act:'INCRIPCIÓN DE COMPONENTES CURRICULARES',subact:[{fecha:'01 febrero al 07 marzo',nombre:'Modalidad regular'},{fecha:'01 febrero al 07 marzo',nombre:'Modalidad en línea (UALN) I Cuatrimestre'},{fecha:'14 al 18 junio',nombre:'Modalidad en línea (UALN) II Cuatrimestre'},{fecha:'13, 20, 27 marzo (sábado) 14, 21, 28 marzo (domingo)',nombre:'Modalidad encuentro I trimestre (sabatino y dominical)'},{fecha:'29 mayo, 05, 12 junio (sábado) 30 mayo, 06 y 13 junio (domingo)',nombre:'Modalidad encuentro II trimestre (sabatino y dominical)'},]},
          {act:'INICIO DE CLASE',subact:[{fecha:'15 marzo',nombre:'Modalidad regular'},{fecha:'15 marzo',nombre:'Modalidad en línea (UALN) I Cuatrimestre'},{fecha:'14 junio',nombre:'Modalidad en línea (UALN) II Cuatrimestre'},{fecha:'13 y 14 marzo',nombre:'Modalidad encuentro I trimestre'},{fecha:'29 y 30 mayo',nombre:'Modalidad encuentro II trimestre'},]},
          {act:'ÚLTIMO DÍA DE CLASE',subact:[{fecha:'23 julio',nombre:'Modalidad regular'},{fecha:'11 junio',nombre:'Modalidad en línea (UALN) I Cuatrimestre'},{fecha:'03 septiembre',nombre:'Modalidad en línea (UALN) II Cuatrimestre'},{fecha:'22 y 23 mayo',nombre:'Modalidad encuentro I trimestre'},{fecha:'31 julio y 01 agosto',nombre:'Modalidad encuentro II trimestre'},]},
          {act:'CORTE EVALUATIVO',subact:[{fecha:'23 al 31 mayo',nombre:'Registro del I corte evaluativo'},{fecha:'16 al 23 Julio',nombre:'Registro del II corte evaluativo'},{fecha:'26 al 30 julio',nombre:'Segunda convocatoria (modalidad regular)'},]},
          {act:'ACTIVIDADES INSTITUCIONALES I SEMESTRE',subact:[{fecha:'10 enero',nombre:'Fundación de la Universidad (UNAN-León)'},{fecha:'Febrero',nombre:'I Foro Universitario de Revistas Científicas'},{fecha:'25 marzo',nombre:'Día de la Autonomía Universitaria'},{fecha:'Marzo',nombre:'II Congreso de Género'},{fecha:'20 Abril',nombre:'Héroe de la Paz Christhian Emilio Cadena'},{fecha:'Mayo',nombre:'III Simposio de Proyección Social'},{fecha:'Junio',nombre:'I Congreso de Educación en UNAN-León.'},{fecha:'Junio',nombre:'I Encuentro del Talento Humano'},{fecha:'(04) 05 Junio',nombre:'Marcha Ecológica'},{fecha:'20 al 23 Julio',nombre:'Semana Universitaria'},]},
        ]
      }
    }
  }
</script>

<style>
  .semestres{
    color:var(--yellowunan);
    background-color: var(--blueunan);
    font-size: 120%;
  }
  .acto{
    font-size: 110%;
    color: var(--blueunan);
  }
</style>

