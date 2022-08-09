<template>
  <!--START REVIEW CARD-->
  <template v-if="!reviewsList">
    <Loader color="grey"/>
  </template>
  <template v-else>
    <swiper
      loop
      slidesPerView="3"
      :spaceBetween="30"
      autoHeight
      :navigation="{
              prevEl: '#reviews-slider-prev-button',
              nextEl: '#reviews-slider-next-button',
            }"
      :pagination="{
              el: '#reviews-slider-pagination',
              type: 'bullets',
              bulletClass: 'dot',
              bulletActiveClass: 'dot--active',
              clickable: true,
            }"
      :modules="swiperModules"
    >
      <swiper-slide
        v-for="review in reviewsList" :key="review"
      >
        <div class="review">
          <div class="review__text">
            <div class="review__text-wrapper">
              {{ review.text }}
              <div class="review__text-full-btn-block">
                <button
                  type="button"
                  class="btn btn&#45;&#45;link review__text-full-btn">
                  Читать полностью</button>
              </div>
            </div>
            <div class="review__text-arrow"></div>
          </div>
          <div class="review__info">
            <div class="review__photo-block">
              <div class="review__photo"
                   :style="{'background-image': `url(${review.author.avatar})`}"></div>
            </div>
            <div class="review__name">{{ review.author.name }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="reviews__slider-control navigation">
      <div
        id="reviews-slider-prev-button"
        class="reviews__navigation-arrow-prev navigation__arrow navigation__arrow--prev">
        <i class="ac-icon ac-icon-arrow-down"></i>
      </div>
      <div class="reviews__dots dots">
        <div id="reviews-slider-pagination"></div>
      </div>
      <div
        id="reviews-slider-next-button"
        class="reviews__navigation-arrow-next navigation__arrow navigation__arrow--next">
        <i class="ac-icon ac-icon-arrow-down"></i>
      </div>
    </div>
  </template>
  <!--START REVIEW CARD-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import Loader from '@/components/Loader.vue';
import { City } from '@/types';

interface ReviewProps {
  id: string,
  text: string,
  city: City,
  author: {
    name: string,
    avatar: string,
  },
}
@Options({
  components: {
    Swiper,
    SwiperSlide,
    Loader,
  },
})
export default class ReviewCard extends Vue {
}
</script>
