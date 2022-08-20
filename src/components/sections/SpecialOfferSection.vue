<template>
  <!--START SECTION SPECIAL-OFFER-->
  <section class="section s-special-offer">
    <div class="container">
      <div class="special-offer" v-if="specialOffers">
        <div class="special-offer__block special-offer__block--left">
          <div class="special-offer__title title">Специальные</div>
          <div class="special-offer__subtitle">услуги и предложения</div>
          <div class="special-offer__tabs vertical-tabs">
            <div class="vertical-tab"
                 v-for="specialOffer in specialOffers" :key="specialOffer"
                 :class="{ 'vertical-tab--active': specialOfferActive === specialOffer }"
                 @click="specialOfferActive = specialOffer"
            >
              {{ specialOffer.title }}
              <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
            </div>
          </div>
        </div>
        <div class="special-offer__block special-offer__block--right">
          <div class="special-offer__text">
            <div
              v-html="specialOfferActive.text"
            >
            </div>
            <div class="special-offer__text-btn-block">
<!--              <button type="button"-->
<!--                      class="btn btn&#45;&#45;white special-offer__text-btn">Заказать услугу-->
<!--              </button>-->
              <router-link custom to="/order"
                           v-slot="{ navigate }">
                <a href="#" @click="navigate" class="btn btn--white special-offer__text-btn"
                >
                  Заказать услугу
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <Loader v-else color="white"/>
    </div>
    <img src="/images/backgrounds/special-offer-bg.png" alt="гостинная" class="s-special-offer__bg">
  </section>
  <!--END SECTION SPECIAL-OFFER-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import repositorySpecialOffers from '@/repositories/api/special-offers';
import Loader from '../Loader.vue';

export interface SpecialOfferProps {
  id: string,
  text: string,
  title: string,
}

@Options({
  components: {
    Loader,
  },
})
export default class SpecialOfferSection extends Vue {
  specialOfferActive: SpecialOfferProps | null = null;
  specialOffers: SpecialOfferProps[] | null = null;
  created() {
    this.loadOffers();
  }

  async loadOffers(): Promise<void> {
    try {
      const response = await repositorySpecialOffers.getList();
      this.specialOffers = response.data.data.map((item) => ({
        id: item.id,
        text: item.text,
        title: item.title,
      }));
      [this.specialOfferActive] = this.specialOffers;
    } catch (e) {
      this.$store.dispatch('showAlertError', 'Произошла ошибка при загрузке данных');
    }
  }
}
</script>
