<template>
    <div >
    <!-- // @ts-ignore -->
    
    <b-button v-b-toggle.sidebar-right class="showside sideback"><b-icon icon="list" ></b-icon></b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
</script>

<style scoped>
    .bg-light {
    background-color: #dbdada !important;
    transition: all 200ms linear;
  }

  .sideback{
    background-color: transparent;
    border-color: transparent;
  }
  .sideback:focus, .sideback.focus{
    color: #fff;
    background-color: transparent; 
    border-color: transparent;
    
    
  }
  


</style>