<template>
  <!--START HEADER-->
  <header class="header">
    <div class="container container--flex">
      <div class="header__block header__block--left">
        <div class="header__logo logo-block">
          <router-link custom to="/"
                       v-slot="{ navigate }">
            <a href="#" @click="navigate">
              <img src="/images/logo.svg" alt="Almaclean" class="logo">
            </a>
          </router-link>
        </div>
        <div class="header__city-selector city-selector">
          <div class="city-selector__current">
            {{ locationCity.name }}
            <i class="ac-icon ac-icon-arrow-down city-selector__current-arrow"></i>
          </div>
          <div class="city-selector__items">
            <a
                v-for="city in citiesList" :key="city"
                href="#"
                @click.prevent="changeCity(city)"
                class="link city-selector__item"
                :class="{ 'city-selector__item--active': city.slug === locationCity.slug }">
              {{ city.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="header__menu menu">
        <router-link custom to="/about"
                     v-slot="{ navigate }">
          <a href="#"
             @click="navigate" class="link link--gray menu__item">Компания</a>
        </router-link>
        <a href="#" class="link link--gray menu__item">Частые вопросы</a>
        <a href="#" class="link link--gray menu__item">Приложение</a>
      </div>
      <div class="header__block header__block--right">
        <div class="header__phones phones-list">
          <a
              v-for="phone in locationCity.phones" :key="phone"
              :href="`tel:${phone}`"
              class="link link--violet phones-list__item">{{ phone }}</a>
        </div>
        <a href="#" class="btn btn--small btn--primary
          btn--text-medium btn--circle">Личный кабинет</a>
      </div>

    </div>
  </header>
  <!--END HEADER-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import { CityInformation } from '@/types';
import { citiesList } from '@/app.config';

@Options({
  computed: mapGetters({
    locationCity: 'locationCity',
  }),
})
export default class Header extends Vue {
  readonly locationCity!: CityInformation;
  readonly citiesList: CityInformation[] = citiesList;

  changeCity(city: CityInformation): void {
    this.$store.dispatch('setLocationCity', city.slug);
  }
}
</script>
