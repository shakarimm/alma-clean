<template>
  <!--START SECTION PROFILE MENU-->
  <section class="section s-profile-menu">
    <div class="container">
      <div class="profile-menu">
        <div class="profile-menu__current" @click="showProfileMenu">
          <div class="profile-menu__current-title">
            {{ currentItem.title }}
          </div>
          <i
            class="ac-icon ac-icon-arrow-down profile-menu__current-arrow"
            :class="{ 'profile-menu__current-arrow--active': isShowed }"
          >
          </i>
        </div>
        <div class="profile-menu__items" :class="{ 'profile-menu__items--active': isShowed }">
          <router-link
            v-for="menuItem in menuItems"
            :key="menuItem"
            :to="menuItem.path"
            @click="showProfileMenu"
            class="profile-menu__item"
            active-class="profile-menu__item--active"
            v-text="menuItem.title"/>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION PROFILE MENU-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface MenuItem {
  path: string,
  title: string,
}

@Options({})
export default class ProfileMenu extends Vue {
  menuItems: MenuItem[] = [
    {
      path: '/profile/orders',
      title: 'Мои заказы',
    },
    {
      path: '/profile/free-orders',
      title: 'Бесплатные уборки',
    },
    // {
    //   path: '/profile/settings/payment',
    //   title: 'Оплата',
    // },
    {
      path: '/profile/cleaners',
      title: 'Мои клинеры',
    },
    {
      path: '/profile/settings',
      title: 'Личная информация',
    },
  ];
  isShowed = false;

  get currentItem(): MenuItem | undefined {
    return this.menuItems.find((e) => e.path === this.$route.path);
  }

  created() {
    document.addEventListener('mousedown', this.onMouseDown);
  }

  unmounted() {
    document.removeEventListener('mousedown', this.onMouseDown);
  }
  onMouseDown(event: any) {
    console.log(event.target);
    if (!event.target.closest('.profile-menu')) {
      this.isShowed = false;
    }
  }

  showProfileMenu() {
    this.isShowed = !this.isShowed;
  }
}
</script>
