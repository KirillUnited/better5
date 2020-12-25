<template>
  <div>
    <div class>
      <div
        id
        class="section section--slideshow section--middle section--xs-small section--light section--1589587674635"
        kjb-settings-id="sections_1589587674635_settings_background_color"
      >
        <div class="container">
          <div class="row heading">
            <div class="col-md-8">
              <h2 class="heading__title" kjb-settings-id="sections_1589587674635_settings_heading">
                What Others
                Are Saying about Better5
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <base-review-slider :reviews="reviews" />
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-md-10">
              <div
                id="carousel-example-generic--1589587674635"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic--1589587674635"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="2"></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="3"></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="4"></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="5"></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="6"></li>
                  <li data-target="#carousel-example-generic--1589587674635" data-slide-to="7"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active" v-for="(review, index) in reviews" :key="index">
                    <img :src="require(`../assets/img/pages/7-day-core/${review.img}`)" />
                  </div>
                </div>
              </div>
            </div>
          </div>-->
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