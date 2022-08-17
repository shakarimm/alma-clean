<template>
  <div class="special-offer">
    <div class="special-offer__block special-offer__block--left">
      <div class="special-offer__title title">Специальные</div>
      <div class="special-offer__subtitle">услуги и предложения</div>

      <div class="special-offer__tabs vertical-tabs">
        <div class="vertical-tab"
             :class="{ 'vertical-tab--active': specialOfferTabActive === 'furniture' }"
             @click="specialOfferTabActive = 'furniture'">
          Химчистка мягкой мебели <br>и ковровых покрытий
          <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
        </div>
        <div class="vertical-tab"
             :class="{ 'vertical-tab--active': specialOfferTabActive === 'cabinet' }"
             @click="specialOfferTabActive = 'cabinet'">
          Личный кабинет для <br>клиентов
          <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
        </div>
        <div class="vertical-tab"
             :class="{ 'vertical-tab--active': specialOfferTabActive === 'repair' }"
             @click="specialOfferTabActive = 'repair'">
          Уборка после ремонта
          <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
        </div>
        <div class="vertical-tab"
             :class="{ 'vertical-tab--active': specialOfferTabActive === 'mobile_app' }"
             @click="specialOfferTabActive = 'mobile_app'">
          Удобное мобильное <br>приложение
          <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
        </div>
      </div>
    </div>
    <div class="special-offer__block special-offer__block--right">
      <div class="special-offer__text">
        <template v-if="specialOfferTabActive === 'furniture'">
          <p>В процессе эксплуатации мебель: диваны, кресла, стулья - изнашиваются, подвергаются
            различным загрязнениям. В результате мебель приобретает непривлекательный внешний
            вид,
            а это может испортить интерьер вашего помещения. Химчистка загрязнённой мебели
            является довольно серьёзной проблемой. Засаленные подлокотники, закапанные подушки
            сидений очистить самостоятельно очень трудно.</p>
          <p>Наша компания AlmaClean готова выполнить работы по химчистке мягкой мебели как
            в виде отдельной услуги, так и в составе мероприятий по комплексной уборке
            ваших помещений.</p>
        </template>
        <template v-if="specialOfferTabActive === 'cabinet'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus
            doloremque eos, eveniet excepturi iure maxime neque nesciunt obcaecati, officiis
            quaerat quasi sed sint, sit sunt veniam. Doloribus, temporibus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate
            necessitatibus nemo quibusdam ratione. Accusamus consequatur error facere iure magni
            nihil optio repudiandae, veritatis? Animi beatae est facere illo numquam!</p>
        </template>
        <template v-if="specialOfferTabActive === 'repair'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus
            doloremque eos, eveniet excepturi iure maxime neque nesciunt obcaecati, officiis
            quaerat quasi sed sint, sit sunt veniam. Doloribus, temporibus!</p>
        </template>
        <template v-if="specialOfferTabActive === 'mobile_app'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate
            necessitatibus nemo quibusdam ratione.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus
            doloremque eos, eveniet excepturi iure maxime neque nesciunt obcaecati, officiis
            quaerat quasi sed sint, sit sunt veniam. Doloribus, temporibus!</p>
        </template>
        <div class="special-offer__text-btn-block">
          <button type="button"
                  class="btn btn--white special-offer__text-btn">Заказать услугу
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import repositorySpecialOffers from '@/repositories/api/special-offers';

type SpecialOfferTabType = 'furniture' | 'repair' | 'cabinet' | 'mobile_app';

export interface SpecialOfferProps {
  id: string,
  text: string,
  title: string,
}

@Options({
})

export default class SpecialOffer extends Vue {
  specialOfferTabActive: SpecialOfferTabType = 'furniture';
  specialOfferTabList: SpecialOfferProps[]|null = null;
  created() {
    this.loadReviews();
  }
  async loadReviews(): Promise<void> {
    try {
      const response = await repositorySpecialOffers.getList();
      this.specialOfferTabList = response.data.data.map((item) => ({
        id: item.id,
        text: item.text,
        title: item.title,
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'Произошла ошибка при загрузке данных');
    }
  }
}
</script>
