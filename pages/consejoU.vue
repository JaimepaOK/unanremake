<template>
  <div>
    <b-container fluid="lx">
      <b-row>
        <b-col cols="8" >
          <div class="container">
            <div class="flex">
              <div class="card">
                <img
                  src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h3>Flexbox is awesome</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipisicing elit. Praesentium
                    dolorum reiciendis veritatis nulla minima, atque fugi,
                    voluptatum beatae illo!
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://cdn.pixabay.com/photo/2014/09/27/17/30/waterfalls-463925_960_720.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h3>Flexbox is awesome</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipisicing elit. Praesentium
                    dolorum reiciendis veritatis nulla minima, atque fugi,
                    voluptatum beatae illo!
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h3>Flexbox is awesome</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipisicing elit. Praesentium
                    dolorum reiciendis veritatis nulla minima, atque fugi,
                    voluptatum beatae illo!
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h3>Flexbox is awesome</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipisicing elit. Praesentium
                    dolorum reiciendis veritatis nulla minima, atque fugi,
                    voluptatum beatae illo!
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/08/13/mockup-2443050_960_720.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h3>Flexbox is awesome</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipisicing elit. Praesentium
                    dolorum reiciendis veritatis nulla minima, atque fugi,
                    voluptatum beatae illo!
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/11/21/55/freedom-2940655_960_720.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h3>Flexbox is awesome</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipisicing elit. Praesentium
                    dolorum reiciendis veritatis nulla minima, atque fugi,
                    voluptatum beatae illo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col style="background-color: blue">
          <Minicalendario/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Minicalendario from '../components/utils/minicalendario.vue'
export default {
  components: {
    Minicalendario,
  },
  data() {
    return {
      peoples: [
        { ctname: 'Rectora', rank: 'Dra. Flor de Maria Valle Espinoza' },
        { ctname: 'Vicerrector', rank: 'Dr. Wilber Salazar Anton' },
        {
          ctname: 'Secretario General',
          rank: 'M.Sc. Francisco Isabel Valladares Castillo',
        },
        {
          ctname: 'Secretario General',
          rank: 'M.Sc. Francisco Isabel Valladares Castillo',
        },
      ],
    }
  },
  computed: {
    loadstatus() {
      return this.$store.getters.getloadstate
    },
    loadedstatus() {
      return this.$store.getters.getloaded
    },
  },
  created() {
    this.falseone()
  },
  mounted() {
    this.loaded()
  },
  methods: {
    trueone() {
      this.$store.dispatch('changetrue')
    },
    falseone() {
      setTimeout(() => this.$store.dispatch('changefalse'), 6500)
    },
    loaded() {
      this.$store.dispatch('trueloaded')
    },
    notloaded() {
      this.$store.dispatch('falseloaded')
    },
  },
}
</script>

<style scoped>
.container {
  margin: auto;
  padding: 2em;
  max-width: 68rem;
}

.flex {
  display: flex;
  gap: 2em;
  justify-content: center;
  flex-flow: row wrap;
}

.flex > * {
  flex-grow: 1;
  flex-basis: 0;
}

.card {
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  max-width: calc(12.5rem + 13vw);
  background: #fff;
  
  overflow: hidden;
  box-shadow: 0 0.25em 0.6em #0005, 0 0.65em 1em #0004;
  transition: transform 270ms ease;
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  display: flex;
  inset: 0;
  isolation: isolate;
  mix-blend-mode: color;
  background: linear-gradient(180deg, #0000 48%, 48%, red, 70%, blue);
  opacity: 0;
}

.card:hover::before {
  opacity: 1;
}
.card:hover {
  transform: scale(1.05);
}

img {
  display: block;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  height: auto;
  margin-bottom: 1em;
}

.card-body {
  height: 200px;
  padding: 1em 0;
}

h3 {
  text-align: center;
  color: #999fff;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

p {
  color: #0009;
  font-style: italic;
  font-weight: 700;
  text-align: center;
  margin: 1em auto;
  padding-inline: 0.5em;
  max-width: 35ch;
}

</style>