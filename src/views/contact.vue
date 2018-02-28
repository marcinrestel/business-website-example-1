<template>
    <div class="contact">
        <div class="top-view-image contact-image"></div>
        <div class="container">
            <div class="row contact-box">
                <div class="col-sm-12 col-md-6 contact-info-horizontal">
                    <div class="contact-info-horizontal__element">
                        <h4>Contact info:</h4>
                        <div>mail@fake.com</div>
                        <div>facebook.com/fakeCompany</div>
                        <div>linked.in/fakeco</div>
                    </div>
                    <div class="contact-info-horizontal__element">
                        <h4>Office address:</h4>
                        <div>Fake Company</div>
                        <div>Ogrodowa 8</div>
                        <div>01-001 Warszawa</div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 gmap">
                    <gmap></gmap>
                    <!-- <gmap :zoom="11" :markers="[{position: { lat: 50.04, lng: 19.94 }}]" :center="{ lat: 50.04, lng: 19.94 }"></gmap> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gmap from "@/components/Gmap";

export default {
  name: "contact",
  components: { gmap }
};
</script>

<style scoped lang="scss">
.contact-image {
    background-image: url('../assets/contact.jpeg');
    background-position-y: 95%;
}

.gmap {
    min-height: 300px;
}
.contact-box {
  min-height: 300px;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
}
.contact-info-horizontal {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
//   @media screen and (min-width: 768px) {
//     .contact-info-horizontal__element {
//       text-align: right;
//     }
//   }
}
</style>