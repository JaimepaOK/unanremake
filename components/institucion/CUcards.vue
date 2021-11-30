<template>
  <div class="anchura">
    <div class="center">
      <div class="card">
        <div class="additional">
          <div class="user-card">
            <div class="level center">
              <b-img src="~/static/img/escudovector4.png"></b-img>
            </div>
          </div>
          <div class="more-info">
            <h3 class="ml-3">{{ persona }}</h3>
            <div class="margin-top">
              <div class="coords text-center">
                <span >{{ puesto }}</span>
              </div>
              <div class="coords mt-3 ml-3">
                <span>UNAN-León</span>
                <span>León, Nicaragua</span>
              </div>
            </div>
          </div>
        </div>
        <div class="general">
          <h3>{{ persona }}</h3>
          <p class="text-muted text-justify ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis
            molestiae consequatur, pariatur dolorem totam voluptates.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  props: {
    persona: {
      default: 'Nombres Apellidos',
      type: String,
    },
    puesto: {
      default: 'Puesto',
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>


<style scoped>
.anchura {
  display: flex;
  justify-content: center;
  justify-items: center;
}

.center {
  position: relative;
  left: 0;
  right: 0;
  transition: 0.3s all ease;
}

.center img {
  padding-left: 12%;
}
.margin-top{
  margin-top: 30px;
}

.card {
  width: 450px;
  height: 250px;
  background-color: rgb(1, 0, 88);
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
}

.card h3 {
  margin-top: 30px;
  text-align: center;
  
}

.card .additional {
  position: absolute;
  width: 150px;
  height: 100%;
  background: rgb(216, 216, 216);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}

.card.green .additional {
  background: rgb(190, 190, 190);
}

.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
  transition: 0.3s all ease;
}

.card .additional .user-card {
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
}

.card .additional .user-card .level {
  top: 14%;
  color: #fff;
  border-radius: 10px;
}

.card .additional .user-card .points {
  top: 85%;
}

.card .additional .user-card svg {
  top: 50%;
}

.card .additional .more-info {
  width: 280px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;
}

.card .additional .more-info h3 {
  color: rgb(9, 0, 90);
  
}

.card .additional .coords {
  margin: 0 1rem;
  color: var(--blueunan);
  font-size: 1rem;
}

.card .additional .coords span + span {
  float: right;
}

.card .additional .stats {
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  top: auto;
  color: var(--blueunan);
}

.card.green .additional .stats {
  color: #325c46;
}

.card .additional .stats > div {
  flex: 1;
  text-align: center;
}

.card .additional .stats i {
  display: block;
}

.card .additional .stats div.title {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.card .additional .stats div.value {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
}

.card .additional .stats div.value.infinity {
  font-size: 2.5rem;
}

.card .general {
  width: 305px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  
}

.general p{
  margin-top: 15px;
}
.card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
}
</style>