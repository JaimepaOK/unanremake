<template>
  <gmap-map :center="center" :zoom="18" style="height: 420px">
    <gmap-marker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 12.436980760868824, lng: -86.87903852464889 },
      markers: [
        {
          position: { lat: 12.436980760868824, lng: -86.87903852464889 },
        },
      ],
    }
  },
}
</script>