<template>
  <div>
<footer class="section bg-footer">
        <div class="container">
            <div class="row">

                <div v-for="(colum,indexid) in colums" :key="indexid" class="col-lg-3">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">{{colum.index}}</h6>
                        <ul v-if="colum.index === 'Sobre la Universidad'" class="list-unstyled footer-link mt-4" >
                            <li v-for="(item, indexi) in items" :key="indexi"><a :href="item.ref">{{ item.link }}</a></li>
                        </ul>
                        <ul v-if="colum.index === 'Recursos Académicos'" class="list-unstyled footer-link mt-4" >
                            <li v-for="(item2, indexi2) in items2" :key="indexi2"><a :href="item2.ref">{{ item2.link }}</a></li>
                        </ul>
                        <ul v-if="colum.index === 'Servicios TIC'" class="list-unstyled footer-link mt-4" >
                            <li v-for="(item3, indexi3) in items3" :key="indexi3"><a :href="item3.ref">{{ item3.link }}</a></li>
                        </ul>
                        <ul v-if="colum.index === 'Ubicación y Contacto'" class="list-unstyled footer-link text-light mt-4" >
                            <li v-for="(item4, indexi4) in items4" :key="indexi4"><b-icon :icon="item4.icon" scale="1" />{{ item4.link }}</li>
                            <Netsocial></Netsocial>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <p class="footer-alt mb-0 f-14">© 2020 Copyright:
        <a href="https://unanleon.edu.ni/">www.unanleon.edu.ni</a></p>
        </div>
    </footer>
  </div>
</template>


<script>
import Netsocial from './subcomponets/socialnetworks.vue'
export default {
  components:{
    Netsocial,
  },
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
        { link: '¤ Misión y Visión', ref: 'informaciongeneral' },
        { link: '¤ Gaceta Universitaria', ref: 'informaciongeneral' },
        { link: '¤ Estatutos UNAN-León', ref: 'informaciongeneral' },
        { link: '¤ Historia de la UNAN-León', ref: 'informaciongeneral' },
        { link: '¤ Centros Universitarios Regionales', ref: 'centrosregionales' },
      ],
      items2: [
        { link: '¤ Sistema de Bibliotecas - SIBUL', ref: 'https://sibul.unanleon.edu.ni/' },
        { link: '¤ Portal de Revistas: Científica y Literarias', ref: 'http://revistas.unanleon.edu.ni/' },
        { link: '¤ Planes de Estudios', ref: 'https://portalestudiantes.unanleon.edu.ni/pensum_academico.php' },
      ],
      items3: [
        { link: '¤ AULA-VIRTUAL', ref: 'https://aulavirtual.unanleon.edu.ni/' },
        { link: '¤ Correo Electrónico ESTUDIANTIL - Office 365', ref: 'https://estud.unanleon.edu.ni/' },
        { link: '¤ Guia Telefónica Insitucional', ref: '#' },
      ],
	  items4:[
		  {link: ' Edificio Central, contiguo a la Iglesia La Merced. | Apartado Postal 68', icon:'geo-alt'},
		  {link: ' Webdi.unanleon.edu.ni', icon:'inbox'},
		  {link: ' Lun-Vie, 8am - 12m | 2pm - 6pm', icon:'calendar3'},
		  {link: ' PBX: +505-23115013 | FAX: +505-23114970', icon:'telephone'}
	  ],
    icons:[
      {wicon: 'facebook',ref:'https://www.facebook.com/BicentenariaUNANLeon'},
      {wicon: 'twitter', ref:'https://twitter.com/UNANLeon'},
      {wicon: 'instagram', ref:'https://www.instagram.com/unan_leon/'},
      {wicon: 'linkedin', ref:'https://www.linkedin.com/company/bicentenariaunanleon/'}

    ]
    }
  },
}
</script>

<style>
.bg-footer {
    background-color: #33383c;
    padding: 50px 0 30px;
}
.footer-heading {
    letter-spacing: 2px;
}

.footer-link a {
    color: #acacac;
    line-height: 40px;
    font-size: 14px;
    transition: all 0.5s;
}

.footer-link a:hover {
    color: #1bbc9b;
}

.contact-info {
    color: #acacac;
    font-size: 14px;
}

.footer-social-icon {
    font-size: 15px;
    height: 34px;
    width: 34px;
    line-height: 34px;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
}

.facebook {
    background-color: #4e71a8;
    color: #ffffff;
}

.twitter {
    background-color: #55acee;
    color: #ffffff;
}

.instagram {
    color: #ffffff;
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}

.linkedin {
    background-color: #0e76a8;
    color: #ffffff;
}

.footer-alt {
    color: #acacac;
}

.footer-heading {
    position: relative;
    padding-bottom: 12px;
}

.footer-heading:after {
    content: '';
    width: 25px;
    border-bottom: 1px solid #FFF;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    border-bottom: 1px solid #1bbc9b;
}

</style>