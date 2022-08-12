<template>
  <!--START SECTION REVIEWS-->
  <section class="section section--pb-medium section--pt-large s-reviews" id="reviews">
    <div class="container">
      <template v-if="reviewsList">
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
          :breakpoints="{
            1339: {
              slidesPerView: 3
            },
            699: {
              slidesPerView: 2
            },
            1: {
              slidesPerView: 1
            },
          }"
          :modules="swiperModules"
        >
          <swiper-slide
            v-for="review in reviewsList" :key="review"
          >
            <ReviewCard :review="review"/>
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
      <template v-else>
        <Loader color="grey"/>
      </template>
    </div>
  </section>
  <!--END SECTION REVIEWS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Pagination, Navigation } from 'swiper';
import { SwiperModule } from 'swiper/types/shared';
import repositoryReviews from '@/repositories/api/reviews';
import axios from 'axios';
import { City } from '@/types';
import ReviewCard, { ReviewProps } from '@/components/ReviewCard.vue';
import Loader from '../Loader.vue';

@Options({
  components: {
    Swiper,
    SwiperSlide,
    Loader,
    ReviewCard,
  },
})
export default class ReviewsSection extends Vue {
  swiperModules: SwiperModule[] = [Pagination, Navigation];
  isLoading = true;
  reviewsList: ReviewProps[]|null = null;
  created() {
    this.loadReviews();
  }
  async loadReviews(): Promise<void> {
    try {
      const response = await repositoryReviews.getList();
      this.reviewsList = response.data.data.map((item) => ({
        id: item.id,
        text: item.text,
        city: item.city,
        author: item.author,
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'Произошла ошибка при загрузке данных');
    }
  }
}
</script>
