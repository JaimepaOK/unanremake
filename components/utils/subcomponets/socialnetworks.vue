<template>
  <div class="mt-4">
    <ul class="list-inline">
      <li
        v-for="(icon, icindex) in icons"
        :key="icindex"
        class="list-inline-item"
      >
        <a :href="icon.ref"
          ><i :class="icon.wicon" class="footer-social-icon"
            ><b-icon :icon="icon.wicon" scale="1" /></i
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
    data(){
        return{
            icons:[
            {wicon: 'facebook',ref:'https://www.facebook.com/BicentenariaUNANLeon'},
            {wicon: 'twitter', ref:'https://twitter.com/UNANLeon'},
            {wicon: 'instagram', ref:'https://www.instagram.com/unan_leon/'},
            {wicon: 'linkedin', ref:'https://www.linkedin.com/company/bicentenariaunanleon/'}
            ]
        }
    }
}
</script>

<style scoped>
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

</style>