<template>
    <b-container fluid="lg" class="center">
        <div class="escudo">
            <Escudo/>
        </div>
        <div class="eslogan">
           
        </div>
    </b-container>
</template>

<script>
import Escudo from "./loadescudo.vue"

export default {
    components:{
        Escudo,
        
    }
}
</script>

<style scoped>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}


@media only screen and (min-width:768px) and (max-width: 1367px) {
    .center{
        margin-top: 80px;
    }
}


</style>