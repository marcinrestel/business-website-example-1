<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navbar></navbar>
    <transition name="fade" mode="out-in" enter-active-class="animated fadeIn mediumDuration" leave-active-class="animated fadeOut mediumDuration">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "App",
  components: { Navbar }
};
</script>

<style lang="scss">
  @import "static/animate.min.css";
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css";

  body{
    min-height: 100%;
    background-color: #f8f9fa;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .mediumDuration {
    animation-duration: 0.4s;
  }
</style>
