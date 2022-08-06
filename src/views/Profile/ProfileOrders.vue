<template>
  <!--START SECTION ORDERS-->
  <section class="section s-profile-orders">
    <div class="container container--flex">
      <div class="content-block content-block--profile">
        <div v-if="ordersLoading" class="loader-container">
          <Loader color="primary"/>
        </div>
        <template v-else>
          <HorTabs :tabs="horTabs"
                   class="profile-hor-tabs"
                   @change="horTabsChanged"/>

          <div class="tab-contents-js">
            <div class="tab-content-js"
                 :class="{ 'tab-content-js--active': activeTabTag === 'actual' }">
              <div v-if="actualOrders.length > 0" class="orders-list">
                <OrderCard v-for="(order, index) in actualOrders"
                           :key="order"
                           v-model="actualOrders[index]"
                />
              </div>
              <template v-else>
                <div class="separated-block">
                  <div class="separated-block__title">У вас пока нет запланированных уборок</div>
                  <div class="separated-block__text">
                    Но это легко исправить. Заполните форму ниже
                    <span v-if="completedOrders.length > 0">или выберите уборку
                из <a href="#" @click.prevent="activeTabTag === 'completed'"
                      class="link link--green">истории заказов</a></span>.
                  </div>
                </div>
                <div class="short-order-form" v-if="actualOrders.length === 0">
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
                        Уборка квартиры с 2 жилыми комнатами
                        и 1 санузлом <b>завтра в 13:00</b></div>
                      <div class="short-order-form__price">7500 тг.</div>
                      <button type="button" class="btn btn--primary">Заказать уборку</button>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <div class="tab-content-js"
                 :class="{ 'tab-content-js--active': activeTabTag === 'completed' }">
              <div class="orders-list" v-if="completedOrders.length > 0">
                <OrderCard v-for="order in completedOrders"
                           :key="order"
                           v-model="completedOrders[index]"
                />
              </div>
              <div v-else class="separated-block">
                <div class="separated-block__title">У вас пока нет завершенных уборок</div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <ProfileSidebar/>
    </div>
  </section>
  <!--END SECTION ORDERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HorTabs, { HorTabProps } from '@/components/HorTabs.vue';
import orders from '@/repositories/api/orders';
import { OrderModel } from '@/types';
import OrderCard from '@/components/profile/OrderCard.vue';
import Loader from '@/components/Loader.vue';
import AInput from '@/components/AInput.vue';
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue';

@Options({
  components: {
    ProfileSidebar,
    AInput,
    Loader,
    OrderCard,
    HorTabs,
  },
})
export default class ProfileOrders extends Vue {
  orders: null|OrderModel[] = null;
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
  ordersLoading = false;

  created(): void {
    this.loadOrders();
  }

  async loadOrders(): Promise<void> {
    this.ordersLoading = true;
    try {
      const response = await orders.getList();
      this.orders = response.data.data.map((order) => ({
        id: order.id,
        status: order.status,
        locationType: order.location_type,
        cleaningType: {
          slug: order.cleaning_type.slug,
          name: order.cleaning_type.name,
        },
        cleaningFrequency: order.cleaning_frequency,
        roomsCount: order.rooms_count,
        bathroomsCount: order.bathrooms_count,
        additionalServices: order.additional_services.map((orderAdditionalService) => ({
          id: orderAdditionalService.id,
          name: orderAdditionalService.name,
          price: orderAdditionalService.price,
          quantity: orderAdditionalService.quantity,
        })),
        address: {
          city: order.address.city,
          street: order.address.street,
          streetNumber: order.address.street_number,
          floor: order.address.floor,
          apartmentNumber: order.address.apartment_number,
        },
        comment: order.comment,
        datetime: new Date(order.datetime),
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При загрузке данных произошла ошибка');
    } finally {
      this.ordersLoading = false;
    }
  }

  horTabsChanged(tag: string): void {
    this.activeTabTag = tag;
  }

  get actualOrders(): OrderModel[] {
    if (this.orders === null) return [];
    return this.orders.filter((order) => order.status === 'pay_error'
        || order.status === 'waiting_cleaning'
        || order.status === 'waiting_pay');
  }

  get completedOrders(): OrderModel[] {
    if (this.orders === null) return [];
    return this.orders.filter((order) => order.status === 'completed');
  }
}
</script>
