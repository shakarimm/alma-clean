<template>
  <!--START SECTION COUNTERS-->
  <section class="section section--p-small s-counters">
    <div class="container">
      <div class="counters">
        <div class="counter">
          <div class="counter__value">2 345</div>
          <div class="counter__title">убранных квартир</div>
        </div>
        <div class="counter">
          <div class="counter__value">873</div>
          <div class="counter__title">чистых офисов</div>
        </div>
        <div class="counter">
          <div class="counter__value">473</div>
          <div class="counter__title">клиентов</div>
        </div>
        <div class="counter">
          <div class="counter__value">122</div>
          <div class="counter__title">отзыва клиентов</div>
        </div>
        <div class="counter">
          <div class="counter__value">14</div>
          <div class="counter__title">заказов в день</div>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION COUNTERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class CountersSection extends Vue {}
</script>
