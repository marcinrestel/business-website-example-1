<template>
  <transition name="fade" mode="out-in" enter-active-class="animated fadeIn shortDuration" leave-active-class="animated fadeOut shortDuration">
    <div class="loader-container">
      <div class="loader"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "loader"
};
</script>

<style lang="scss" scoped>
@import "../scss/mixins.scss";
@import "../scss/const.scss";

$size: 200px;

@include keyframes(loader-spin-left) {
  0% {
    @include transform(rotate(0deg));
  }
  33% {
    @include transform(rotate(360deg));
  }
  66% {
    @include transform(rotate(720deg));
  }
  100% {
    @include transform(rotate(1080deg));
  }
}

@include keyframes(loader-spin-right) {
  0% {
    @include transform(rotate(0deg));
  }
  20% {
    @include transform(rotate(0deg));
  }
  40% {
    @include transform(rotate(-360deg));
  }
  66% {
    @include transform(rotate(-360deg));
  }
  100% {
    @include transform(rotate(-720deg));
  }
}

@include keyframes(loader-opacity-and-height) {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  70% {
    opacity: 0;
    height: $size;
  }
  80% {
    opacity: 0;
    height: calc(#{$size}/2);
  }
  100% {
    opacity: 1;
    height: $size;
  }
}

@include keyframes(loader-position-left) {
  60% {
    left: calc(50% - #{$size}/2);
  }
  70% {
    left: calc(50% - #{$size}/2 - #{$size}/4);
  }
  80% {
    left: calc(50% - #{$size}/2);
  }
}

@include keyframes(loader-position-right) {
  60% {
    left: calc(50% - #{$size}/2);
  }
  70% {
    left: calc(50% - #{$size}/2 + #{$size}/4);
  }
  80% {
    left: calc(50% - #{$size}/2);
  }
}

// .shortDuration {
//     animation-duration: 10s;
//   }

//   .mediumDuration {
//     animation-duration: 4s;
//   }

.loader-container {
  background-color: $background-color;   
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
}

.loader {
  @include animation(loader-opacity-and-height 3s infinite);
  width: $size;
  height: $size;

  &:before,
  &:after {
    display: inline-block;
    content: "";
    height: $size;
    width: $size;
    position: absolute;
    left: calc(50% - #{$size}/2);
  }

  &:before {
    border-left: 5px solid #222;
    border-radius: 50%;
    @include animation((loader-spin-left 3s infinite, loader-position-left 3s infinite));
  }

  &:after {
    border-right: 5px solid #222;
    border-radius: 50%;
    @include animation((loader-spin-right 3s infinite, loader-position-right 3s infinite));
  }
}
</style>
