<template>
  <div class="counter">
    <div class="counter__value">{{ counter.value }}</div>
    <div class="counter__title">{{ counter.label }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';

export interface CounterProps {
  id: string,
  label: string,
  value: number,
}

@Options({
  props: {
    counter: {
      type: Object as PropType<CounterProps>,
      required: true,
    },
  },
})
export default class ReviewCard extends Vue {
  readonly counter!: CounterProps;
}
</script>
