<template>
  <!--START SECTION ORDERS-->
  <section class="section s-profile-orders">
    <div class="container container--flex">
      <div class="content-block content-block--profile">
        <HorTabs :tabs="horTabs"
                 class="profile-hor-tabs"
                 @change="horTabsChanged"/>

        <div class="tab-contents-js">
          <div class="tab-content-js"
               :class="{ 'tab-content-js--active': activeTabTag === 'actual' }">
            <div class="separated-block">
              <div class="separated-block__title">У вас пока нет запланированных уборок</div>
              <div class="separated-block__text">
                Но это легко исправить. Заполните форму ниже или выберите уборку
                из <a href="#" class="link link--green">истории заказов</a>.
              </div>
            </div>

            <div class="short-order-form">
              <div class="short-order-form__container">
                <div class="short-order-form__switch switch">
                  <input type="radio" name="type" id="radio-type-apartment"
                         value="apartment" class="switch__option-input" checked>
                  <label for="radio-type-apartment" class="switch__option">Квартира</label>
                  <div class="switch__button"></div>
                  <input type="radio" name="type" id="radio-type-house"
                         value="house" class="switch__option-input">
                  <label for="radio-type-house" class="switch__option">Частный дом</label>
                </div>
                <div class="short-order-form__options">
                  <div class="short-order-form__option">
                    <div class="number-controller number-controller--secondary">
                      <button type="button" class="number-controller__btn
                        number-controller__btn--minus"></button>
                      <input type="text" placeholder="1 комната" value="1 комната"
                             class="number-controller__input">
                      <button type="button" class="number-controller__btn
                        number-controller__btn--active number-controller__btn--plus"></button>
                    </div>
                  </div>

                  <div class="short-order-form__option">
                    <div class="number-controller number-controller--secondary">
                      <button type="button" class="number-controller__btn
                        number-controller__btn--active number-controller__btn--minus"></button>
                      <input type="text" placeholder="2 санузла" value="2 санузла"
                             class="number-controller__input">
                      <button type="button" class="number-controller__btn
                        number-controller__btn--active number-controller__btn--plus"></button>
                    </div>
                  </div>

                  <div class="short-order-form__modal-btn-block">
                    <button type="button" class="short-order-form__modal-btn
                      btn btn--small btn--secondary btn--circle">Выбрать время и опции</button>
                  </div>
                </div>
              </div>
              <div class="short-order-form__container">
                <div class="short-order-form__result">
                  <div class="short-order-form__info">
                    Уборка квартиры с 2 жилыми комнатами и 1 санузлом <b>завтра в 13:00</b></div>
                  <div class="short-order-form__price">7500 тг.</div>
                  <button type="button" class="btn btn--primary">Заказать уборку</button>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content-js"
               :class="{ 'tab-content-js--active': activeTabTag === 'completed' }">
            <div class="orders-list">
              <div class="list-item order-card"
                   v-for="item in [1, 2, 3]" :key="item">
                <div class="order-card__col order-card__col--one">
                  <div class="order-card__date date-card">
                    <div class="date-card__day">18</div>
                    <div class="date-card__month">Фев</div>
                  </div>
                  <div class="order-card__row">
                    <div class="order-card__address">г. Алматы, ул. Желтоксан 32А кв. 54</div>
                    <div class="order-card__number">Заказ #3232</div>
                  </div>
                </div>
                <div class="order-card__col order-card__col--two">
                  <div class="order-card__row">
                    <div class="order-card__type">Генеральная уборка</div>
                    <div class="order-card__services">
                      <span class="text-gray">Доп. услуги:</span>
                      <span class="text-medium">5</span>
                      <a href="#" class="link link--green link--bordered">Показать</a>
                    </div>
                  </div>
                </div>
                <div class="order-card__col order-card__col--three">
                  <div class="order-card__cleaner human-short-card">
                    <div class="human-short-card__avatar"
                         style="background-image: url(/images/cleaners/cleaner-01.jpg)"></div>
                    <div class="human-short-card__name">Васелиса П.</div>
                  </div>
                  <button type="button" class="order-card__repeat-btn btn
                    btn--primary btn--circle btn--small">Повторить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar sidebar--profile"></div>
    </div>
  </section>
  <!--END SECTION ORDERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HorTabs, { HorTabProps } from '@/components/HorTabs.vue';

@Options({
  components: {
    HorTabs,
  },
})
export default class ProfileOrders extends Vue {
  horTabs: HorTabProps[] = [
    {
      label: 'Актуальные',
      tag: 'actual',
      isInitialActive: true,
    },
    {
      label: 'Выполненные',
      tag: 'completed',
      isInitialActive: false,
    },
  ];
  activeTabTag = 'actual';

  horTabsChanged(tag: string): void {
    this.activeTabTag = tag;
  }
}
</script>
