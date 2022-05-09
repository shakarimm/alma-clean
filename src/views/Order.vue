<template>
  <!--START SECTION PAGE FIRST SCREEN-->
  <section class="section s-page-first-screen">
    <div class="s-page-first-screen__bg">
      <img src="/images/backgrounds/s-page-first-screen-bg.jpg" alt="Уборка">
    </div>
    <div class="container s-page-first-screen__content">
      <h1 class="s-page-first-screen__title">Оформление уборки</h1>
    </div>
  </section>
  <!--END SECTION PAGE FIRST SCREEN-->

  <!--START SECTION ORDER DETAILS-->
  <section class="section s-order-details">
    <div class="container container--flex">
      <div class="content-block">
        <div class="breadcrumbs">
          <div class="breadcrumbs__item" :class="{
            'breadcrumbs__item--active': currentStep === 'order_detail',
          }">Детали заказа</div>
          <div class="breadcrumbs__item" :class="{
            'breadcrumbs__item--active': currentStep === 'registration',
          }">Регистрация</div>
          <div class="breadcrumbs__item" :class="{
            'breadcrumbs__item--active': currentStep === 'payment',
          }">Оплата</div>
        </div>
        <div class="shadow-block" v-if="currentStep === 'order_detail'">
          <div class="block-title block-underline">Информация о квартире</div>

          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__type-housing">
              <div class="order-detail__title">Вид вашего жилья</div>

              <div class="order-detail__type-housing-cards">
                <div class="icon-card icon-card--hover
                  order-detail__type-housing-card"
                     :class="{ 'icon-card--active': order.locationType === 'apartment' }"
                  @click="order.locationType = 'apartment'">
                  <div class="icon-card__icon-block">
                    <i class="icon-card__icon ac-icon ac-icon-apartment-building"></i>
                  </div>
                  <div class="icon-card__title">Квартира</div>
                </div>
                <div class="icon-card icon-card--hover order-detail__type-housing-card"
                     :class="{ 'icon-card--active': order.locationType === 'house' }"
                     @click="order.locationType = 'house'">
                  <div class="icon-card__icon-block">
                    <i class="icon-card__icon ac-icon ac-icon-house"></i>
                  </div>
                  <div class="icon-card__title">Дом</div>
                </div>
              </div>
            </div>

            <div class="order-detail__options-housing">
              <NumberController
                  v-model="order.roomsCount"
                  title="Количество комнат"
                  color="secondary"
                  :min="1"
                  :postfix="[' комната', ' комнаты', ' комнат']"
              />
              <NumberController
                  v-model="order.bathroomsCount"
                  title="Количество санузлов"
                  color="secondary"
                  :min="1"
                  :postfix="[' санузел', ' санузла', ' санузлов']"
              />
            </div>
          </div>

          <div class="shadow-block__container block-underline">
            <div class="order-detail__title">Тип уборки</div>
            <div class="tabs order-detail__type-cleaning-tabs">
              <button
                  v-for="cleaningType in cleaningTypes" :key="cleaningType"
                  type="button"
                  class="tab tab--text-normal tab--text-medium tab--gray"
                  :class=" { 'tab--active': order.cleaningType.slug === cleaningType.slug } "
                  @click="order.cleaningType = cleaningType"
              >{{ cleaningType.name }}</button>
            </div>
            <div class="order-detail__type-cleaning-text">
              <template v-for="cleaningType in cleaningTypes" :key="cleaningType">
                <div v-if="order.cleaningType.slug === cleaningType.slug">
                  {{ cleaningType.description }}
                </div>
              </template>
            </div>
          </div>

          <div class="shadow-block__container block-underline">
            <div class="order-detail__title">Дополнительные услуги</div>
            <div class="order-detail__order-options-cards">
              <div v-for="cleaningAdditionalService in cleaningAdditionalServices"
                   :key="cleaningAdditionalService"
                   :class="{
                     'icon-card--active': cleaningAdditionalService.quantity > 0,
                     'icon-card--deny':
                      !cleaningAdditionalService.cleaningTypesIds.includes(order.cleaningType.id),
                   }"
                   class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <img :src="cleaningAdditionalService.iconUrl" class="icon-card__icon">
                </div>
                <div class="icon-card__title">
                  {{ cleaningAdditionalService.name }}
                </div>
                <NumberController
                    v-model="cleaningAdditionalService.quantity"
                    class="icon-card__number-controller"/>
                <div class="icon-card__block-overlay">
                  <span class="icon-card__tooltip tooltip tooltip--right">
                    <span class="tooltip__icon">
                      <span class="tooltip__icon-text">?</span>
                    </span>
                    <span class="tooltip__window">
                      <span class="tooltip__window-title">Услуга недоступна</span>
                      <span class="tooltip__window-text">
                        Данная услуга доступна только для типов уборок:
                        {{ cleaningTypesCommaListByIds(
                            cleaningAdditionalService.cleaningTypesIds) }}.
                      </span>
                      <span class="tooltip__window-buttons">
                        <button
                            v-for="cleaningTypeId in cleaningAdditionalService.cleaningTypesIds"
                            :key="cleaningTypeId"
                            type="button"
                            class="tooltip__window-button btn btn--primary btn--circle btn--small"
                            @click="order.cleaningType = cleaningTypeById(cleaningTypeId)"
                        >Переключить на {{ cleaningTypeById(cleaningTypeId).name }}</button>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
              v-if="dryCleaningAdditionalServices?.length > 0"
              class="shadow-block__container block-underline">
            <label class="order-detail__title order-detail__title--mb-0 checkbox">
              <input type="checkbox"
                     @input="needDryCleaning = !needDryCleaning"
                     :checked="needDryCleaning"
                     class="checkbox__input">
              <span class="checkbox__check">
                <i class="checkbox__icon ac-icon ac-icon-check"></i>
              </span>
              <span class="checkbox__text">Нужна химчистка?</span>
            </label>
            <div ref="drycleaningCardsContainer" class="order-detail__order-drycleaning-cards">
              <div class="order-detail__order-options-cards order-detail__order-options-cards--pt">
                <div v-for="dryCleaningAdditionalService in dryCleaningAdditionalServices"
                     :key="dryCleaningAdditionalService"
                     :class="{
                       'icon-card--active': dryCleaningAdditionalService.quantity > 0,
                       'icon-card--deny':
                        !dryCleaningAdditionalService
                          .cleaningTypesIds.includes(order.cleaningType.id),
                     }"
                     class="icon-card order-detail__order-options-card">
                  <div class="icon-card__icon-block">
                    <img :src="dryCleaningAdditionalService.iconUrl" class="icon-card__icon">
                  </div>
                  <div class="icon-card__title">
                    {{ dryCleaningAdditionalService.name }}
                  </div>
                  <NumberController
                      v-model="dryCleaningAdditionalService.quantity"
                      class="icon-card__number-controller"/>
                  <div class="icon-card__block-overlay">
                    <span class="icon-card__tooltip tooltip tooltip--right">
                      <span class="tooltip__icon">
                        <span class="tooltip__icon-text">?</span>
                      </span>
                      <span class="tooltip__window">
                        <span class="tooltip__window-title">Услуга недоступна</span>
                        <span class="tooltip__window-text">
                          Данная услуга доступна только для типов уборок:
                          {{ cleaningTypesCommaListByIds(
                            dryCleaningAdditionalService.cleaningTypesIds) }}.
                        </span>
                        <span class="tooltip__window-buttons">
                          <button
                              v-for="cleaningTypeId in
                                dryCleaningAdditionalService.cleaningTypesIds"
                              :key="cleaningTypeId"
                              type="button"
                              class="tooltip__window-button btn btn--primary btn--circle btn--small"
                              @click="order.cleaningType = cleaningTypeById(cleaningTypeId)"
                          >Переключить на {{ cleaningTypeById(cleaningTypeId).name }}</button>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="shadow-block__container order-detail__container
            block-underline block-underline--bg-secondary">
            <div class="order-detail__frequency-cleaning-heading">
              <div class="order-detail__title">Частота уборки</div>
              <a href="#" class="link link--green link--bordered
                order-detail__frequency-cleaning-about">Подробнее о регулярной уборке</a>
            </div>

            <div class="tabs order-detail__frequency-cleaning-tabs">
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab"
                      @click="order.cleaningFrequency = 'every_week'"
                      :class="{ 'tab--active': order.cleaningFrequency === 'every_week' }">
                Каждую неделю
                <br>
                <span class="tab__text">20% скидка</span>
              </button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab"
                      @click="order.cleaningFrequency = 'every_month'"
                      :class="{ 'tab--active': order.cleaningFrequency === 'every_month' }">
                Каждый месяц
                <br>
                <span class="tab__text">10% скидка</span>
              </button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab"
                      @click="order.cleaningFrequency = 'twice_month'"
                      :class="{ 'tab--active': order.cleaningFrequency === 'twice_month' }">
                Дважды в месяц
                <br>
                <span class="tab__text">15% скидка</span>
              </button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab
                order-detail__frequency-cleaning-tab--long"
                      @click="order.cleaningFrequency = 'once'"
                      :class="{ 'tab--active': order.cleaningFrequency === 'once' }">
                Разовая уборка
              </button>
            </div>
          </div>

          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__title">Когда к Вам приехать?</div>
            <div class="order-detail__date-and-time-container">
              <div class="order-detail__date-input">
                <v-date-picker
                    color="green"
                    v-model="order.date"
                    locale="ru">
                  <template v-slot="{ inputValue, inputEvents }">
                    <AInput
                        placeholder="Дата"
                        :modelValue="inputValue"
                        v-on="inputEvents"
                        :readonly="true"
                        :invalid="order.dateInvalid"
                        error-text="Укажите дату"
                    >
                      <template #prepend>
                        <i class="ac-icon ac-icon-calendar color-primary"></i>
                      </template>
                    </AInput>
                  </template>
                </v-date-picker>
              </div>
              <ASelect
                  class="order-detail__time-input"
                  :options="timeOptions"
                  placeholder="Время"
                  v-model="order.time"
                  :invalid="order.timeInvalid"
                  error-text="Укажите время"
              >
                <template #prepend>
                  <i class="ac-icon ac-icon-time color-primary"></i>
                </template>
              </ASelect>
            </div>
          </div>

          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__title">Адрес уборки</div>

            <div class="address-form">
              <div class="address-form__input-block input-block">
                <ASelect
                    :options="citiesOptions"
                    v-model="order.address.city"
                />
              </div>
              <div class="address-form__input-block address-form__input-block--double input-block">
                <AInput
                    placeholder="Улица"
                    v-model="order.address.street"
                    :invalid="order.address.streetInvalid"
                    error-text="Укажите адрес"
                    @input="order.address.streetInvalid = false"
                />
              </div>
              <div class="address-form__input-block input-block">
                <AInput
                    placeholder="Дом"
                    v-model="order.address.streetNumber"
                    :invalid="order.address.streetNumberInvalid"
                    error-text="Укажите номер дома"
                    @input="order.address.streetNumberInvalid = false"
                />
              </div>
              <div class="address-form__input-block input-block">
                <AInput
                    placeholder="Этаж"
                    v-model="order.address.floor"
                />
              </div>
              <div class="address-form__input-block input-block">
                <AInput
                    placeholder="Квартира"
                    v-model="order.address.apartment_number"
                />
              </div>
              <div class="address-form__input-block address-form__input-block--full input-block">
                <AInput
                    placeholder="Комментарий или пожелания"
                    v-model="order.comment"
                />
              </div>
            </div>
          </div>
          <div class="shadow-block__container order-detail__container block-underline">
            <button type="button"
                    @click="goToNextStep"
                    class="order-detail__submit-btn btn btn--primary">Заказать уборку</button>
          </div>
        </div>

        <div class="shadow-block" v-if="currentStep === 'registration'">
          <div class="block-title block-underline">Регистрация</div>

          <div class="shadow-block__container order-detail__container block-underline">
            <AuthorizationForm @authorized="authorized"/>
          </div>
        </div>

        <div class="shadow-block" v-if="currentStep === 'payment'">
          <div class="block-title block-underline">Информация по оплате</div>
          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__title">Выберите вид оплаты</div>
            <div class="order-detail__payment-methods">
              <label class="order-detail__payment-method radio-btn">
                <input type="radio" name="payment_method" value="card"
                       class="radio-btn__input" checked>
                <span class="radio-btn__button">
                  <i class="ac-icon ac-icon-card radio-btn__button-icon"></i> Оплата картой
                </span>
              </label>
              <label class="order-detail__payment-method radio-btn">
                <input type="radio" name="payment_method" value="cash" class="radio-btn__input">
                <span class="radio-btn__button">
                  <i class="ac-icon ac-icon-trading radio-btn__button-icon"></i> Оплата наличными
                </span>
              </label>
            </div>
          </div>

          <div
              v-if="promocode.id === null"
              class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__title">У вас есть промокод?</div>
            <div class="order-detail__promocode">
              <div class="input-block order-detail__promocode-input-block"
                :class="{ 'input-block--invalid': promocode.codeInvalid }">
                <input type="text"
                       ref="promocodeInput"
                       name="promocode"
                       class="input-control order-detail__promocode-input"
                       v-model="promocode.code"
                       @input="promocode.codeInvalid = false"
                       :disabled="promocodeUseLoading"
                       placeholder="Промокод">
              </div>
              <AButton
                  :disabled="promocodeUseLoading"
                  class="order-detail__promocode-btn"
                  text="Применить промокод"
                  :small="true"
                  :circle="true"
                  :loading="promocodeUseLoading"
                  @click="usePromocode"/>
            </div>
            <div class="order-detail__promocode-error" v-if="this.promocodeErrorText !== null">
              {{ this.promocodeErrorText }}
            </div>
            <div class="order-detail__promocode-error" v-if="promocode.codeInvalid">
              Промокод должен содержать 6 символов
            </div>
            <div class="order-detail__promocode-note">
              О том как получить промокод,
              <a href="#" class="link link--green link--bordered">читайте здесь</a>
            </div>
          </div>

          <div class="shadow-block__container order-detail__container block-underline">
            <button type="submit" class="order-detail__submit-btn btn btn--primary">
              Подтвердить заказ</button>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <vue-sticky-sidebar :topSpacing="80">
          <div class="order-check-wrapper">
            <div class="order-check shadow-block">
              <div class="order-check__head">Ваш заказ</div>
              <div class="order-check__body">
                <div class="order-check__section">
                  <div class="order-check__title">Состав заказа:</div>
                  <div class="order-check__item">
                    <div class="order-check__item-title">{{ order.cleaningType.name }}</div>
                    <div class="order-check__item-value">{{ orderFrequencyTimeDescription }}</div>
                  </div>
                  <div class="order-check__item">
                    <div class="order-check__item-title">Услуги:</div>
                    <div class="order-check__item-value">{{ selectedServicesDescription }}</div>
                  </div>
                </div>
                <div class="order-check__section">
                  <div class="order-check-table">
                    <div class="order-check-table__row">
                      <div class="order-check-table__col">
                        <div class="order-check__regular-accent-text
                          order-check-table__subscription">
                          Абонемент
                          <span class="tooltip">
                            <span class="tooltip__icon">
                              <span class="tooltip__icon-text">?</span>
                            </span>
                            <span class="tooltip__window">
                              <span class="tooltip__window-title">Абонемент</span>
                              <span class="tooltip__window-text">
                                Покупая абонемент на месяца вы экономите от 10% за уборку.
                                Стоимость услуг указана за месяц.
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="order-check-table__col">
                        {{ orderFrequencyDescription }}
                        <br>
                        <div
                            class="order-check__order-discount"
                            v-if="orderDiscountPercent > 0">
                          скидка
                          <br>
                          <span class="order-check__accent-text">{{ orderDiscountPercent }}</span>
                          <span class="order-check__medium-text">%</span>
                        </div>
                      </div>
                    </div>
                    <div class="order-check-table__row" v-if="0 === 1">
                      <div class="order-check-table__col">
                        Стоимость одной уборки
                        <div class="order-check__old-price">175 000 тенге</div>
                        <div class="order-check__medium-text">101 000 тенге</div>
                      </div>
                      <div class="order-check-table__col">
                        <template v-if="orderDiscount > 0">
                          Скидка
                          <br>
                          <span class="order-check__accent-text">{{ orderDiscount }}</span>
                          <span class="order-check__medium-text">%</span>
                        </template>
                      </div>
                    </div>
                    <div class="order-check-table__row" v-if="promocode.id !== null">
                      <div class="order-check-table__col">
                        Промокод ({{ promocode.code }})
                      </div>
                      <div class="order-check-table__col">
                        -{{ $helpers.formatCurrency(promocodeDiscount) }}
                        {{ promocode.discountPercent !== null
                          ? ` (${promocode.discountPercent}%)` : '' }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="order-check__section">
                  <div class="order-check__title order-check__title--mb-0">Итого:</div>
                  <div class="order-check__total order-check__accent-text">
                    {{ $helpers.formatCurrency(paymentSum) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vue-sticky-sidebar>
      </div>
    </div>
  </section>
  <!--END SECTION ORDER DETAILS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import cleaningTypes from '@/repositories/api/cleaning-types';
import additionalServices from '@/repositories/api/additional-services';
import promocodes from '@/repositories/api/promocodes';
import {
  OrderModel,
  CleaningTypeModel,
  AdditionalServiceOrderModel,
  OrderCleaningFrequency,
  PromocodeModel,
} from '@/types/api';
import NumberController from '@/components/calculator/NumberController.vue';
import AInput from '@/components/AInput.vue';
import ASelect, { ASelectOption } from '@/components/ASelect.vue';
import { CityInformation } from '@/types';
import { citiesList } from '@/app.config';
import { mapGetters } from 'vuex';
import moment from 'moment';
import vueStickySidebar from 'vue-sticky-sidebar/src/vue-sticky-sidebar.vue';
import AuthorizationForm from '@/components/auth/AuthorizationForm.vue';
import Inputmask from 'inputmask';
import AButton from '@/components/AButton.vue';

type OrderStepType = 'order_detail' | 'registration' | 'payment';

@Options({
  components: {
    AButton,
    AuthorizationForm,
    ASelect,
    AInput,
    NumberController,
    vueStickySidebar,
  },
  computed: mapGetters({
    locationCity: 'locationCity',
  }),
  watch: {
    needDryCleaning() {
      const height = this.needDryCleaning
        ? this.$refs.drycleaningCardsContainer.firstChild.clientHeight
        : 0;
      this.$refs.drycleaningCardsContainer.style.height = `${height}px`;
      if (this.needDryCleaning || this.order === null) return;
      this.order.additionalServices.forEach((service: AdditionalServiceOrderModel) => {
        if (service.type === 'dry_cleaning') {
          service.quantity = 0;
        }
      });
    },
    'order.date': {
      handler() {
        this.order.dateInvalid = false;
      },
    },
    'order.time': {
      handler() {
        this.order.timeInvalid = false;
      },
    },
    'order.cleaningType': {
      handler() {
        if (this.order === null) return;
        this.order.additionalServices.forEach((service: AdditionalServiceOrderModel) => {
          if (!service.cleaningTypesIds.includes(this.order.cleaningType.id)) {
            service.quantity = 0;
          }
        });
      },
    },
  },
})
export default class Order extends Vue {
  readonly locationCity!: CityInformation;
  readonly citiesOptions: ASelectOption[] = citiesList.map((city) => ({
    value: city.slug,
    label: city.name,
    selectable: true,
  }));
  currentStep: OrderStepType = 'order_detail';
  cleaningTypes: null|CleaningTypeModel[] = null;
  order: null|OrderModel = null;
  needDryCleaning = false;
  promocode: PromocodeModel = {
    id: null,
    code: null,
    discountPercent: null,
    discountValue: null,
    codeInvalid: false,
  }
  promocodeErrorText: null|string = null;
  promocodeUseLoading = false;
  timeOptions: ASelectOption[] = [
    {
      value: '09:00',
      label: '09:00',
      selectable: true,
    },
    {
      value: '09:30',
      label: '09:30',
      selectable: true,
    },
    {
      value: '10:00',
      label: '10:00',
      selectable: true,
    },
    {
      value: '10:30',
      label: '10:30',
      selectable: true,
    },
    {
      value: '11:00',
      label: '11:00',
      selectable: true,
    },
    {
      value: '11:30',
      label: '11:30',
      selectable: true,
    },
    {
      value: '12:00',
      label: '12:00',
      selectable: true,
    },
    {
      value: '12:30',
      label: '12:30',
      selectable: true,
    },
    {
      value: '13:00',
      label: '13:00',
      selectable: true,
    },
    {
      value: '13:30',
      label: '13:30',
      selectable: true,
    },
    {
      value: '14:00',
      label: '14:00',
      selectable: true,
    },
    {
      value: '14:30',
      label: '14:30',
      selectable: true,
    },
    {
      value: '15:00',
      label: '15:00',
      selectable: true,
    },
    {
      value: '15:30',
      label: '15:30',
      selectable: true,
    },
    {
      value: '16:00',
      label: '16:00',
      selectable: true,
    },
  ];
  orderFrequencyDiscount = {
    once: 0,
    every_month: 10,
    twice_month: 15,
    every_week: 20,
  } as { [key in OrderCleaningFrequency]: number };

  created(): void {
    this.loadCleaningTypes().then(() => {
      this.initEmptyOrder();
      this.loadAdditionalServices();
    });
  }

  maskPromocodeInput(): void {
    if (this.$refs.promocodeInput === undefined) return;
    (new Inputmask({
      mask: '******',
      placeholder: '',
      showMaskOnHover: false,
    })).mask(this.$refs.promocodeInput as HTMLFormElement);
  }

  initEmptyOrder(): void {
    if (this.cleaningTypes === null) return;
    this.order = {
      locationType: 'apartment',
      cleaningType: this.cleaningTypes[0],
      cleaningFrequency: 'once',
      roomsCount: 1,
      bathroomsCount: 1,
      additionalServices: [],
      time: null,
      date: null,
      comment: null,
      dateInvalid: false,
      timeInvalid: false,
      address: {
        city: this.locationCity.slug,
        street: null,
        streetNumber: null,
        floor: null,
        apartmentNumber: null,
        streetInvalid: false,
        streetNumberInvalid: false,
      },
    };
  }

  async loadCleaningTypes(): Promise<void> {
    try {
      const response = await cleaningTypes.getList();
      this.cleaningTypes = response.data.data.map((item) => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        priceApartment: item.price_apartment,
        priceApartmentBathroom: item.price_apartment_bathroom,
        priceApartmentRoom: item.price_apartment_room,
        priceHouse: item.price_house,
        priceHouseBathroom: item.price_house_bathroom,
        priceHouseRoom: item.price_house_room,
        description: item.description,
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'Произошла ошибка при загрузке данных');
    }
  }

  async loadAdditionalServices(): Promise<void> {
    try {
      const response = await additionalServices.getList();
      if (this.order === null) return;
      this.order.additionalServices = response.data.data.map((item) => ({
        id: item.id,
        type: item.type,
        name: item.name,
        price: item.price,
        cleaningTypesIds: item.cleaning_types_ids,
        iconUrl: item.icon_url,
        quantity: 0,
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'Произошла ошибка при загрузке данных');
    }
  }

  get cleaningAdditionalServices(): null|AdditionalServiceOrderModel[] {
    return this.order?.additionalServices
      ?.filter((cleaningType) => cleaningType.type === 'cleaning') ?? null;
  }

  get dryCleaningAdditionalServices(): null|AdditionalServiceOrderModel[] {
    return this.order?.additionalServices
      ?.filter((cleaningType) => cleaningType.type === 'dry_cleaning') ?? null;
  }

  get orderFrequencyDescription(): null|string {
    if (this.order === null) return null;
    return {
      every_month: 'каждый месяц',
      every_week: 'каждую неделю',
      twice_month: 'дважды в месяц',
      once: 'один раз',
    }[this.order.cleaningFrequency];
  }

  get orderFrequencyTimeDescription(): string {
    if (this.order === null) return '-';
    const descriptions = [];
    if (this.orderFrequencyDescription !== null) {
      descriptions.push(this.orderFrequencyDescription);
    }
    if (this.order.time !== null) {
      descriptions.push(this.order.time);
    }
    if (this.order.date !== null) {
      descriptions.push(moment(this.order.date).format('DD.MM.YYYY'));
    }
    if (descriptions.length === 0) {
      return '-';
    }
    return descriptions.join(', ');
  }

  get selectedServicesDescription(): string {
    if (this.order === null) return '-';
    const descriptions: Array<string> = [];
    this.order.additionalServices.forEach((service) => {
      if (service.quantity > 0) {
        let description = service.name;
        if (service.quantity > 1) {
          description += ` (${service.quantity})`;
        }
        descriptions.push(description);
      }
    });
    if (descriptions.length === 0) {
      return '-';
    }
    return descriptions.join(', ');
  }

  get orderDiscountPercent(): number {
    if (this.order === null) return 0;
    return this.orderFrequencyDiscount[this.order.cleaningFrequency];
  }

  get promocodeDiscount(): number {
    if (this.promocode.id === null) return 0;
    if (this.promocode.discountValue !== null) return this.promocode.discountValue;
    if (this.promocode.discountPercent === null) return 0;
    return this.totalOrderSum * (this.promocode.discountPercent / 100);
  }

  get totalOrderSum(): number {
    if (this.order === null) return 0;
    let locationPrice;
    let roomPrice;
    let bathroomPrice;
    let additionalServicesSum = 0;
    let discount = 0;
    if (this.order.locationType === 'apartment') {
      locationPrice = this.order.cleaningType.priceApartment;
      roomPrice = this.order.cleaningType.priceApartmentRoom;
      bathroomPrice = this.order.cleaningType.priceApartmentBathroom;
    } else {
      locationPrice = this.order.cleaningType.priceHouse;
      roomPrice = this.order.cleaningType.priceHouseRoom;
      bathroomPrice = this.order.cleaningType.priceHouseBathroom;
    }

    this.order.additionalServices.forEach((service) => {
      additionalServicesSum += service.price * service.quantity;
    });

    const orderSum = locationPrice
      + roomPrice * this.order.roomsCount
      + bathroomPrice * this.order.bathroomsCount
      + additionalServicesSum;

    if (this.orderDiscountPercent > 0) {
      discount = orderSum * (this.orderDiscountPercent / 100);
    }

    return orderSum - discount;
  }

  get paymentSum(): number {
    return this.totalOrderSum - this.promocodeDiscount;
  }

  cleaningTypesCommaListByIds(ids: number[]): string {
    if (this.cleaningTypes === null) return '';
    const items = this.cleaningTypes
      .filter((cleaningType) => ids.includes(cleaningType.id))
      .map((cleaningType) => cleaningType.name);

    return items.join(', ');
  }

  cleaningTypeById(id: number): null|CleaningTypeModel {
    if (this.cleaningTypes === null) return null;
    return this.cleaningTypes
      .find((cleaningType) => cleaningType.id === id) ?? null;
  }

  validateForm(): boolean {
    if (this.order === null) return false;
    let invalid = false;
    if (this.order.address.street === null || this.order.address.street.trim().length < 1) {
      this.order.address.streetInvalid = true;
      invalid = true;
    }
    if (this.order.address.streetNumber === null
        || this.order.address.streetNumber.trim().length < 1) {
      this.order.address.streetNumberInvalid = true;
      invalid = true;
    }
    if (this.order.date === null) {
      this.order.dateInvalid = true;
      invalid = true;
    }
    if (this.order.time === null) {
      this.order.timeInvalid = true;
      invalid = true;
    }
    return invalid;
  }

  authorized(): void {
    this.goToNextStep();
  }

  goToNextStep(): void {
    if (this.currentStep === 'order_detail') {
      if (this.validateForm()) {
        this.currentStep = 'registration';
      }
    } else if (this.currentStep === 'registration') {
      this.currentStep = 'payment';
    } else if (this.currentStep === 'payment') {
      //
    }
  }

  updated(): void {
    this.maskPromocodeInput();
  }

  async usePromocode(): Promise<void> {
    if (this.promocode.code === null || this.promocode.code.trim().length !== 6) {
      this.promocode.codeInvalid = true;
      return;
    }
    this.promocode.codeInvalid = false;
    this.promocodeErrorText = null;
    this.promocodeUseLoading = true;
    try {
      const response = await promocodes.use(this.promocode.code);
      if (response?.data?.data.id) {
        this.promocode.id = response.data.data.id;
        this.promocode.code = response.data.data.code;
        this.promocode.discountPercent = response.data.data.discount_percent;
        this.promocode.discountValue = response.data.data.discount_value;
      }
    } catch (e) {
      if (e?.response?.data?.error_type) {
        if (e.response.data.error_type === 'promocode_not_found') {
          this.promocodeErrorText = 'Промокод не найден';
          return;
        }
        if (e.response.data.error_type === 'already_used') {
          this.promocodeErrorText = 'Промокод уже использован';
          return;
        }
        if (e.response.data.error_type === 'expired') {
          this.promocodeErrorText = 'Срок действия промокода истек';
          return;
        }
      }
      this.$store.dispatch('showAlertError', 'При активации промокода произошла ошибка');
    } finally {
      this.promocodeUseLoading = false;
    }
  }
}
</script>
