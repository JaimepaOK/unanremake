<template>
    <div>
        <LoadCirculo/>
    </div>
</template>

<script>

import LoadCirculo from '../components/utils/circularload.vue'

export default {
    components:{
        
        LoadCirculo,
        
    },
    data() {
        return {
            isLoading: true
        }
    },
    computed:{
        loadstatus(){
            return this.$store.getters.getloadstate
        }
    },
    created(){
        
    },
    mounted(){
        this.loaded();
    },
    methods:{
        trueone(){
            this.$store.dispatch('changetrue');
        },
        falseone(){
          setTimeout(() => this.$store.dispatch('changefalse'), 650);
        },
        loaded(){
          this.$store.dispatch('trueloaded')
        },
    },
   
}
</script>

<style>
</style>