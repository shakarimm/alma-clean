<template>
  <!--START SECTION PAGE FIRST SCREEN-->
  <section class="section s-page-first-screen">
    <div class="s-page-first-screen__bg">
      <img src="/images/backgrounds/s-page-first-screen-bg.jpg" alt="Уборка">
    </div>
    <div class="container s-page-first-screen__content">
      <h1 class="s-page-first-screen__title">Личный кабинет</h1>
    </div>
  </section>
  <!--END SECTION PAGE FIRST SCREEN-->
  <ProfileMenu/>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProfileMenu from '@/components/ProfileMenu.vue';
import { mapGetters } from 'vuex';
import { ProfileData } from '@/types';

@Options({
  computed: mapGetters({
    profile: 'myProfile',
  }),
  components: {
    ProfileMenu,
  },
  watch: {
    $route(): void {
      this.$store.dispatch('initProfile');
    },
    profile(): void {
      if (this.profile) return;
      this.$router.push('/');
    },
  },
})
export default class ProfileLayout extends Vue {
  profile!: ProfileData;

  created(): void {
    this.$store.dispatch('initProfile');
  }
}
</script>
