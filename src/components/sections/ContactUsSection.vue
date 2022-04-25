<template>
  <!--START SECTION CONTACT US-->
  <section class="section section--p-medium s-contact-us">
    <div class="container">
      <div class="contact-us">
        <a href="tel:" class="link link--violet contact-us__phone">+7 (777) 831-08-08</a>
        <router-link custom to="/order"
                     v-slot="{ navigate }">
          <button type="button"
                  @click="navigate"
                  class="btn btn--primary contact-us__order-btn">Закажите уборку сейчас</button>
        </router-link>
        <div class="contact-us__text">Мы готовы приехать к вам уже сегодня</div>
      </div>
    </div>
  </section>
  <!--END SECTION CONTACT US-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ContactUsSection extends Vue {}
</script>
