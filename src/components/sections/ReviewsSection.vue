<template>
  <!--START SECTION REVIEWS-->
  <section class="section section--pb-medium section--pt-large s-reviews">
    <div class="container">
      <review-card
      :reviewList="reviewsList"
      />
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
import ReviewCard from '@/components/ReviewCard.vue';
import Loader from '../Loader.vue';

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
