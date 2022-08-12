<template>
  <div
    class="review"
  >
    <div class="review__text">
      <div class="review__text-wrapper">
        {{ textParts[0] }}
        <template v-if="isOpened">{{ textParts[1] }}</template>
        <template v-if="textParts[1]">
          <div class="review__text-full-btn-block">
            <button
              type="button"
              class="btn btn&#45;&#45;link review__text-full-btn"
              @click="isOpened = !isOpened"
            >
              {{ isOpened ? 'Скрыть' : 'Читать полностью' }}
            </button>
          </div>
        </template>
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import Loader from '@/components/Loader.vue';
import { City } from '@/types';
import { PropType } from 'vue';

export interface ReviewProps {
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
  props: {
    review: {
      type: Object as PropType<ReviewProps>,
      required: true,
    },
  },
})
export default class ReviewCard extends Vue {
  readonly review!: ReviewProps;
  textParts: string[] = [];
  maxLen = 150;
  isOpened = false;
  created() {
    this.textParts.push(this.review.text.slice(0, this.maxLen));
    this.textParts.push(this.review.text.slice(this.maxLen));
  }
}
</script>
