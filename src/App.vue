<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navbar></navbar>
    <transition name="fade" mode="out-in" enter-active-class="animated fadeIn mediumDuration" leave-active-class="animated fadeOut shortDuration">
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
  // @import url('https://fonts.googleapis.com/css?family=Alef');
  @import url('https://fonts.googleapis.com/css?family=Encode%20Sans%20Semi%20Expanded');
  @import 'const.scss';


  html {
    overflow-y: scroll;
  }

  body{
    min-height: 100%;
    background-color: $background-color;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-family: 'Encode Sans Semi Expanded';
    // font-family: 'Alef';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }

  .shortDuration {
    animation-duration: 0.1s;
  }

  .mediumDuration {
    animation-duration: 0.4s;
  }

  .view-image {
    height: 40vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .top-view-image {
    @extend .view-image;
    animation-name: top-view-image-enter;
    animation-duration: 0.75s;
  }

  @keyframes top-view-image-enter {
      from {height: 44vh;}
      to {height: 40vh;}
  }

  .title-line {
    color: #4c4c4c;
    border-bottom: 2px solid #9f9fa0;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }

  .text-box {
    margin-bottom: 40px;
    margin-top: 40px;
  }

</style>
