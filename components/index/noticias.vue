<template>
  <div class="">
    
    <div v-if="!invert" class="headernoticias">
      <div class="noticecontent pad">
        <div class="left-half">
          <article>
            <h4 >{{ title }}</h4>
            <p> 
              {{ content }}
            </p>
            <!--<b-button v-if="noticeref !== ''"  :href='noticeref' class="butt" pill variant="primary">Ír</b-button>-->
            <a v-if="noticeref !== ''" :href='noticeref' target="_blank"><button class="custom-btn btn-8"><span>Leer Más</span></button></a>
          </article>
        </div>
        <div class="right-half homechang filterimg" :style="{'--bkgImage': 'url(' + scrimg + ')'}" >
          <article>
          </article>
        </div>
      </div>
    </div>

    <div v-if="invert" class="headernoticias">
      <div class="noticecontent pad">
        <div class="left-img homechang filterimg" :style="{'--bkgImage': 'url(' + scrimg + ')'}">
          <article>
          </article>
        </div>
        <div  class="right-noimg" >
          <article>
              <h4>{{ title }}</h4>
            <p>
              {{ content }}
            </p>
            <!--<b-button v-if="noticeref !== ''" class="buttright" pill variant="primary">Button</b-button>-->
            <a  v-if="noticeref !== ''" :href='noticeref' target="_blank"><button class="custom-btn-inverse btn-8"><span>Leer Más</span></button></a>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Titulo Noticia',
      type: String,
    },
    content: {
      default: 'Contenido General',
      type: String,
    },
    imgs:{
        default: 'https://unanleon.edu.ni/img/portada/UNANLEON_admision2022form.png',
        type:String,
    },
    noticeref:{
      default: '',
        type:String,
    },
    invert:{
        default:false,
        type:Boolean,
    }

  },
  data() {
    return {
        scrimg:this.imgs,
    }
  },
}
</script>

<style>
.butt {
    position: absolute;
    right: 65%;
    color: #fff;
}

.buttright {
    position: absolute;
    left: 65%;
    color: #fff;
    background-color: #2a3686;
    border-color: #1a256d;
}

.pad{
    height: 200px;
}
.filterimg{
    filter: brightness(1);
}
.homechang {
    background-image: var(--bkgImage);
    background-repeat: no-repeat;
    height: 120px;
    background-size: 100% 100%;
}
.headernoticias h3 {
  text-align: center;
  color: var(--redunan);
  text-shadow: 1px 1px 2px #333;
}
.headernoticias h4 {
  font-size: 30px;
  margin-top:20px; 
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 2px rgb(196, 190, 190);
}
.headernoticias p {
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 2px #333;
}

@media only screen and (min-width: 375px) and (max-width: 600px) {
  .headernoticias h4 {
    font-size: 15px;
    margin-top:20px; 
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgb(196, 190, 190);
}
  .headernoticias p {
    font-size: 8px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px #333;
  }
}

/* CSS NORMAL CARTELES */
.left-half {
  background-color: var(--rednavbar);
  float: left;
  width: 65%;
  height: 200px;
}
.right-half {
  margin-left: 1%;   
  background-color: #b69a1e00;
  float: left;
  width: 34%;
  height: 200px;
}

/* CSS CARTELES INVERTIDOS */

.left-img{
  margin-right: 1%; 
  background-color: #b6701e;
  float: left;
  width: 34%;
  height: 200px;
}
.right-noimg{
  background-color: var(--rednavbar);
  float: left;
  width: 65%;
  height: 200px;
}

</style>