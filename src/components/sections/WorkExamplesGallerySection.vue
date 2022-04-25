<template>
  <!--START SECTION WORK EXAMPLES GALLERY-->
  <section class="section s-work-examples-gallery">
    <div class="work-examples-gallery-slider">
      <div class="work-examples-gallery-slider__wrapper">
        <div
            id="work-examples-gallery-slider-prev-button"
            class="work-examples-gallery-slider__prev-button
            navigation__arrow navigation__arrow--prev">
          <i class="ac-icon ac-icon-arrow-down"></i>
        </div>
        <swiper
            loop
            :slidesPerView="3"
            :centeredSlides="true"
            :navigation="{
            prevEl: '#work-examples-gallery-slider-prev-button',
            nextEl: '#work-examples-gallery-slider-next-button',
          }"
            :modules="swiperModules"
        >
          <swiper-slide
              v-for="slide in ['01', '02', '03', '04', '05']"
              :key="slide">
            <div class="work-examples-gallery-slider__image"
                 :style="{ backgroundImage:
              `url(/images/work-examples-gallery/example-${slide}.jpg)` }"/>
          </swiper-slide>
        </swiper>
        <div
            id="work-examples-gallery-slider-next-button"
            class="work-examples-gallery-slider__next-button
            navigation__arrow navigation__arrow--next">
          <i class="ac-icon ac-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION WORK EXAMPLES GALLERY-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import { SwiperModule } from 'swiper/types/shared';

@Options({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class WorkExamplesGallerySection extends Vue {
  swiperModules: SwiperModule[] = [Navigation];
}
</script>
