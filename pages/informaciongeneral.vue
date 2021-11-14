<template>
    <div>
        {{loadstatus}}
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
    methods:{
        trueone(){
            this.$store.dispatch('changetrue');
        },
        falseone(){
            this.$store.dispatch('changefalse');
        },
        setloadedtrue(){
            this.$store.dispatch('')
        }
    },
   
}
</script>

<style>
</style>