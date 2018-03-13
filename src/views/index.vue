<template>
    <div class="index">
        <loader v-if="!loaded"></loader>

        <div v-else>
            <b-carousel id="carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid slide-fullscreen-image"
                        src="../assets/product/1.jpeg" alt="image slot">
                        <h1>Business Analytics</h1>
                </b-carousel-slide>

                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid slide-fullscreen-image"
                        src="../assets/product/2.jpeg" alt="image slot">
                        <h1>Process Optimization</h1>
                </b-carousel-slide>

                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid slide-fullscreen-image"
                        src="../assets/product/3.jpeg" alt="image slot">
                        <h1>Predictive modelling</h1>
                </b-carousel-slide>
            </b-carousel>

            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">Business Analytics</h1>
                        <p>Consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">Process Optimization</h1>
                        <p>Consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">Predictive modelling</h1>
                        <p>Consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">Pricing</h1>
                        <p>Consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">Contact</h1>
                        <p>Consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loader from "@/components/Loader";
import ImagesPreload from "../services/imagesPreload";

export default {
  name: "index",
  components: { loader },
  data() {
    return {
      slide: 0,
      sliding: null,
      imgSrc: [
        require("../assets/product/1.jpeg"),
        require("../assets/product/2.jpeg"),
        require("../assets/product/3.jpeg")
      ],
      loaded: false
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  created: function() {
    const ImgPreload = new ImagesPreload();
    ImgPreload.preloadImages(this.imgSrc, { timeout: 3000 }).then(() => this.loaded = true);
  }
};
</script>

<style scoped>
    .slide-fullscreen-image {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
</style>

