<template>
    <div>
        
        <Load></Load>
    </div>
</template>

<script>
import Load from '../components/utils/Loading.vue'

export default {
    components:{
        Load,
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