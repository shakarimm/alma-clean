<template>
  <!--START SECTION PROFILE MENU-->
  <section class="section s-profile-menu">
    <div class="container">
      <div class="profile-menu">
        <div class="profile-menu__items">
          <router-link to="/profile/orders" class="profile-menu__item"
                       active-class="profile-menu__item--active"
                       v-text="'Мои заказы'"/>
          <router-link to="/profile/free-orders" class="profile-menu__item"
                       active-class="profile-menu__item--active"
                       v-text="'Бесплатные уборки'"/>
          <router-link to="/profile/settings/payment" class="profile-menu__item"
                       active-class="profile-menu__item--active"
                       v-text="'Оплата'"/>
          <router-link to="/profile/favorite-cleaners" class="profile-menu__item"
                       active-class="profile-menu__item--active"
                       v-text="'Мои клинеры'"/>
          <router-link to="/profile/settings" class="profile-menu__item"
                       active-class="profile-menu__item--active"
                       v-text="'Личная информация'"/>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION PROFILE MENU-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ProfileMenu extends Vue {}
</script>
