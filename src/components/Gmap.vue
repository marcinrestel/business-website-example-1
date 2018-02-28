<template>
  <gmap-map
    :center="center"
    :zoom="zoom"
    style="width: 100%; height: 100%"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
 
<script>
/////////////////////////////////////////
// New in 0.4.0
import * as VueGoogleMaps from "vue2-google-maps";
import Vue from "vue";

Vue.use(VueGoogleMaps, {
  load: {
    // key: "" //,
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
});

export default {
  props: {
    markers: {
      type: Array,
      default: function() {
        return [
          {
            position: { lat: 52.23, lng: 21 }
          }
        ];
      }
    },
    center: {
      type: Object,
      default: function() {
        return { lat: 52.23, lng: 21 }
      }
    },
    zoom: {
      type: Number,
      default: 11
    }
  }
};
</script> 