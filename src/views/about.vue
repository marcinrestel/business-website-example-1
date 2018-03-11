<template>
    <div class="about">
        <loader v-if="!loaded"></loader>

        <div v-show="loaded">
            <div class="top-view-image about-image"></div>
            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">Who we are</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.</p>
                    </div>
                </div>
            </div>
            <div class="view-image what-we-do-image"></div>
            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">What we do</h1>
                        <p>Consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi.</p>
                    </div>
                </div>
            </div>
            <div class="view-image how-we-work-image"></div>
            <div class="container">
                <div class="row text-box">
                    <div class="col-sm-12">
                        <h1 class="title-line">How we work</h1>
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
  name: "about",
  components: { loader },
  data() {
    return {
      imgSrc: [
        require("../assets/about/about.jpeg"),
        require("../assets/about/about2.jpg"),
        require("../assets/about/about3.jpg")
      ],
      loaded: false
    };
  },
  created: function() {
    const ImgPreload = new ImagesPreload();
    ImgPreload.preloadImages(this.imgSrc, { timeout: 3000 }).then(() => this.loaded = true);
  }
};
</script>

<style scoped>
.about-image {
  background-image: url("../assets/about/about.jpeg");
  background-position-y: 90%;
}
.what-we-do-image {
  background-image: url("../assets/about/about2.jpg");
  background-position-y: 20%;
}
.how-we-work-image {
  background-image: url("../assets/about/about3.jpg");
  background-position-y: 40%;
}
</style>

