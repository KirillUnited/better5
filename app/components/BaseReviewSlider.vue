<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <img :src="require(`../assets/img/pages/7-day-core/${review.img}`)" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "BaseReviewSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["reviews"],
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// @import "./base.scss";
</style>

          