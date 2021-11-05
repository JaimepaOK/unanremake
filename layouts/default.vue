<template>
  <div>
    <Header> </Header>
    <Sidebar></Sidebar>
    <div>
      <Nuxt> </Nuxt>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/utils/header.vue'
import Footer from '../components/utils/footer.vue'
import Sidebar from '../components/utils/sidebar.vue'

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  }
}
</script>

