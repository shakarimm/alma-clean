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
        <div class="header__nav nav"
             :class="{ 'nav--opened': showMobileMenu }"
        >
          <div class="header__logo header__logo--mobile logo-block">
            <router-link custom to="/"
                         v-slot="{ navigate }">
              <a href="#" @click="navigate">
                <img src="/images/logo.svg" alt="Almaclean" class="logo">
              </a>
            </router-link>
          </div>
          <div class="header__city-selector header__city-selector--mobile city-selector">
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
          <router-link custom to="/"
                       v-slot="{ navigate }">
            <a href="#"
               @click="navigate"
               class="link link--gray menu__item nav__item nav__item--home">Главная</a>
          </router-link>
          <router-link custom to="/about"
                       v-slot="{ navigate }">
            <a href="#"
               @click="navigate" class="link link--gray menu__item nav__item">Компания</a>
          </router-link>
          <router-link to="#faq"
             class="link link--gray menu__item nav__item"
          >
            Частые вопросы
          </router-link>
          <a href="#" class="link link--gray menu__item nav__item nav__item--app">Приложение</a>
          <div v-if="profile !== null"
               class="user-bar"
               :class="{
                'user-bar--loading': logoutLoading,
             }">
            <div class="user-bar__user-name">
              <div class="user-bar__user-name-text">
                {{ profile.firstName }} {{ profile.lastName.substr(0, 1) }}.
              </div>
              <i class="ac-icon ac-icon-arrow-down user-bar__user-name-arrow"></i>
              <div class="user-bar__loader">
                <LoaderHor/>
              </div>
            </div>
            <div class="user-bar__links">
              <router-link custom to="/profile"
                           v-slot="{ navigate }">
                <a href="#" @click="navigate" class="link user-bar__link">Личный кабинет</a>
              </router-link>
              <div class="user-bar__link-delimiter"></div>
              <a href="#"
                 @click.prevent="logout"
                 class="link user-bar__link">Выйти</a>
            </div>
          </div>
          <div v-else-if="profileLoading" class="header__user-loading">
            <Loader color="grey"/>
          </div>
          <router-link v-else custom to="/auth/sign-up"
                       v-slot="{ navigate }">
            <a href="#" @click="navigate" class="btn btn--small btn--primary
          btn--text-medium btn--circle nav__item nav__item--user">Личный кабинет</a>
          </router-link>
        </div>
        <div class="nav-btn"
             :class="[showMobileMenu ? navBtnOpened : navBtnClosed]"
             @click="onNavBtnClick"
        >
          <div class="nav-btn__line"></div>
          <div class="nav-btn__line"></div>
          <div class="nav-btn__line"></div>
        </div>
      </div>
      <div class="header__block header__block--right">
        <div class="header__phones phones-list">
          <a
            v-for="phone in locationCity.phones" :key="phone"
            :href="`tel:${phone}`"
            class="link link--violet phones-list__item">{{ phone }}</a>
        </div>
        <div v-if="profile !== null"
             class="user-bar"
             :class="{
                'user-bar--loading': logoutLoading,
             }">
          <div class="user-bar__user-name">
            <div class="user-bar__user-name-text">
              {{ profile.firstName }} {{ profile.lastName.substr(0, 1) }}.
            </div>
            <i class="ac-icon ac-icon-arrow-down user-bar__user-name-arrow"></i>
            <div class="user-bar__loader">
              <LoaderHor/>
            </div>
          </div>
          <div class="user-bar__links">
            <router-link custom to="/profile"
                         v-slot="{ navigate }">
              <a href="#" @click="navigate" class="link user-bar__link">Личный кабинет</a>
            </router-link>
            <div class="user-bar__link-delimiter"></div>
            <a href="#"
               @click.prevent="logout"
               class="link user-bar__link">Выйти</a>
          </div>
        </div>
        <div v-else-if="profileLoading" class="header__user-loading">
          <Loader color="grey"/>
        </div>
        <router-link v-else custom to="/auth/sign-up"
                     v-slot="{ navigate }">
          <a href="#" @click="navigate" class="btn btn--small btn--primary
          btn--text-medium btn--circle">Личный кабинет</a>
        </router-link>
      </div>
    </div>
  </header>
  <!--END HEADER-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import { CityInformation, ProfileData } from '@/types';
import { citiesList } from '@/app.config';
import LoaderHor from '@/components/LoaderHor.vue';
import Loader from '@/components/Loader.vue';

@Options({
  components: {
    Loader,
    LoaderHor,
  },
  computed: mapGetters({
    locationCity: 'locationCity',
    profile: 'myProfile',
    profileLoading: 'profileLoading',
  }),
  emits: ['mobileMenuChanged'],
})
export default class Header extends Vue {
  readonly profile!: null | ProfileData;
  readonly profileLoading!: boolean;
  readonly locationCity!: CityInformation;
  readonly citiesList: CityInformation[] = citiesList;
  logoutLoading = false;
  showMobileMenu = false;
  navBtnOpened = 'nav-btn--active';
  navBtnClosed = '';

  onNavBtnClick() {
    this.showMobileMenu = !this.showMobileMenu;
    this.navBtnClosed = 'nav-btn--closed';
    this.$emit('mobileMenuChanged', this.showMobileMenu);
  }

  changeCity(city: CityInformation): void {
    this.$store.dispatch('setLocationCity', city.slug);
  }

  async logout(): Promise<void> {
    try {
      this.logoutLoading = true;
      await this.$store.dispatch('logoutProfile');
    } finally {
      this.logoutLoading = false;
    }
  }
}
</script>
