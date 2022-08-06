<template>
  <!--START SECTION PAGE FIRST SCREEN-->
  <section class="section s-page-first-screen">
    <div class="s-page-first-screen__bg">
      <img src="/images/backgrounds/s-page-first-screen-bg.jpg" alt="Уборка">
    </div>
    <div class="container s-page-first-screen__content">
      <h1 class="s-page-first-screen__title">Добро пожаловать!</h1>
    </div>
  </section>
  <!--END SECTION PAGE FIRST SCREEN-->

  <!--START SECTION AUTH-->
  <section class="section section--pb-medium s-auth-form">
    <div class="container">
      <div class="s-auth-form__container">
        <AuthorizationForm
            :initial-form="initialForm"
            @signUpDone="goToProfile"
            @signInDone="goToProfile"/>
      </div>
    </div>
  </section>
  <!--END SECTION AUTH-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AuthorizationForm, {
  AuthForms,
} from '@/components/auth/AuthorizationForm.vue';
import { ProfileData } from '@/types';
import Cookie from 'js-cookie';
import { tokenCookieKey } from '@/app.config';

@Options({
  components: {
    AuthorizationForm,
  },
})
export default class Auth extends Vue {
  profile!: null|ProfileData;
  initialForm: AuthForms = 'sign-up';

  created(): void {
    const token = Cookie.get(tokenCookieKey);
    if (token) {
      this.goToProfile();
    } else {
      this.initialForm = this.$route.path.includes('/sign-in') ? 'sign-in' : 'sign-up';
    }
  }

  goToProfile(): void {
    this.$router.replace('/profile');
  }
}
</script>
