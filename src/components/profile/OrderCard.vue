<template>
  <div class="list-item order-card">
    <div class="order-card__col order-card__col--one">
      <div class="order-card__date date-card">
        <div class="date-card__day">{{ orderDate }}</div>
        <div class="date-card__month">{{ orderMonth }}</div>
      </div>
      <div class="order-card__row">
        <div class="order-card__address">{{ orderAddress }}</div>
        <div class="order-card__number">Заказ #{{ modelValue.id }}</div>
      </div>
    </div>
    <div class="order-card__col order-card__col--two">
      <div class="order-card__row">
        <div class="order-card__type">{{ modelValue.cleaningType.name }}</div>
        <div class="order-card__services">
          <span class="text-gray">Доп. услуги: </span>
          <span class="text-medium">{{ orderAdditionalServicesCountText }}</span>
          <a v-if="modelValue.additionalServices.length > 0"
             href="#" class="link link--green link--bordered order-card__services-link">Показать</a>
        </div>
      </div>
    </div>
    <div class="order-card__col order-card__col--three">
      <div class="order-card__cleaner human-short-card">
        <div class="human-short-card__avatar"
             style="background-image: url(/images/cleaners/cleaner-01.jpg)"></div>
        <div class="human-short-card__name">Васелиса П.</div>
      </div>
      <div class="order-card__actions">
        <AButton
            class="order-card__action"
            type="button"
            v-if="isRepeatBtnShowed"
            text="Повторить"
            :circle="true"
            :small="true"
        />
        <AButton
            class="order-card__action"
            type="button"
            v-if="isPayBtnShowed && !payUrl"
            text="Оплатить"
            :circle="true"
            :small="true"
            @click="pay"
            :loading="payLoading"
            :disabled="payLoading"
        />
        <a :href="payUrl"
           v-if="isPayBtnShowed && payUrl"
           class="btn btn--link-primary btn--tt-none btn--text-regular
            order-card__action order-card__action--pay-link"
           target="_blank">
          Ссылка для оплаты
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { OrderModel } from '@/types';
import moment from 'moment';
import { citiesList } from '@/app.config';
import AButton from '@/components/AButton.vue';
import orders from '@/repositories/api/orders';
import AButtonLink from '@/components/AButtonLink.vue';

@Options({
  components: { AButtonLink, AButton },
  props: {
    modelValue: {
      type: Object as PropType<OrderModel>,
      required: true,
    },
  },
})
export default class OrderCard extends Vue {
  readonly modelValue!: OrderModel;
  payLoading = false;
  payUrl: null|string = null;

  get orderDate(): string {
    return moment(this.modelValue.datetime).format('DD');
  }

  get orderMonth(): string {
    moment.locale('ru');
    return moment(this.modelValue.datetime).format('MMMM').substr(0, 3);
  }

  get orderAddress(): string {
    let res = `г. ${citiesList.find((city) => city.slug === this.modelValue.address.city)?.name}, `;
    res += `${this.modelValue.address.street} ${this.modelValue.address.streetNumber}`;
    if (this.modelValue.address.apartmentNumber !== null) {
      res += `, кв. ${this.modelValue.address.apartmentNumber}`;
    }
    return res;
  }

  get orderAdditionalServicesCountText(): string {
    return this.modelValue.additionalServices.length > 0
      ? this.modelValue.additionalServices.length.toString() : '-';
  }

  get isRepeatBtnShowed(): boolean {
    return this.modelValue.status === 'completed';
  }

  get isPayBtnShowed(): boolean {
    return this.modelValue.status === 'pay_error'
        || this.modelValue.status === 'waiting_pay';
  }

  async pay(): Promise<void> {
    this.payLoading = true;
    try {
      const response = await orders.pay(this.modelValue.id);
      this.payUrl = response.data.pay_url;
      window.open(this.payUrl, '_blank');
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При попытке входа произошла ошибка');
    } finally {
      this.payLoading = false;
    }
  }
}
</script>
