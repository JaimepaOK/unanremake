<template>
  <div>
    <Header />
    <b-container tag="main">
      <Nuxt />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/utils/header.vue'
import Footer from '../components/utils/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  head: {
    bodyAttrs: {
      class: 'hero-anime',
    },
  },
}
</script>

