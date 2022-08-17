<template>
  <!--START SECTION COUNTERS-->
  <section class="section section--p-small s-counters">
    <div class="container">
      <div class="counters">
        <counter-card
          :counter="counter"
          v-for="counter in counterList" :key="counter"
        />
      </div>
    </div>
  </section>
  <!--END SECTION COUNTERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CounterCard, { CounterProps } from '@/components/CounterCard.vue';
import repositoryCounters from '@/repositories/api/stat-counts';

@Options({
  components: {
    CounterCard,
  },
})
export default class CountersSection extends Vue {
  counterList: CounterProps[]|null = null;
  created() {
    this.loadReviews();
  }
  async loadReviews(): Promise<void> {
    try {
      const response = await repositoryCounters.getList();
      this.counterList = response.data.data.map((item) => ({
        id: item.id,
        label: item.label,
        value: item.value,
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'Произошла ошибка при загрузке данных');
    }
  }
}
</script>
