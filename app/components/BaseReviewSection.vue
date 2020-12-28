<template>
  <div
    class="section section--slideshow section--middle section--xs-small section--light section--1589587674635"
  >
    <div class="container">
      <div class="row heading">
        <div class="col-md-8">
          <h2 class="heading__title">{{title}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10">
          <base-review-slider :reviews="reviews" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseReviewSlider from "./BaseReviewSlider.vue";
export default {
  components: { BaseReviewSlider },
  data() {
    return {
      title: "What Others Are Saying about Better5",
      reviews: [
        {
          img: "afepeovvsfwnxioj6sty_screen_shot_2020-05-18_at_5.31.46_pm.png",
        },
        {
          img: "hbepgk8mswyi1jmytcdu_screen_shot_2020-05-18_at_5.32.14_pm.png",
        },
        {
          img: "b12wabtrqqiceukudrjl_screen_shot_2020-05-18_at_5.29.44_pm.png",
        },
        {
          img: "5tfg6du3r0saxagcun7z_1.png",
        },
        {
          img: "v9y5249hqjino5es2uom_2.png",
        },
        {
          img: "lmgazkjqzme7e9bhah9t_3.png",
        },
        {
          img: "qmbixuxruunrlkztubza_4.png",
        },
        {
          img: "uqv105aqbeufdqbx7ayd_5.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>