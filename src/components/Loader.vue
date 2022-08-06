<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       style="margin:auto; display:block;" width="200px"
       height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <path fill="none" :stroke="strokeColor" stroke-width="5"
          stroke-dasharray="42.76482137044271 42.76482137044271"
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30
          95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          stroke-linecap="round"
          style="transform: scale(0.8); transform-origin: 50px 50px">
      <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1"
               values="0;256.58892822265625"></animate>
    </path>
  </svg>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';

export type LoaderColor = 'white' | 'primary' | 'grey';

@Options({
  props: {
    color: {
      type: String as PropType<LoaderColor>,
      required: false,
      default: 'white',
      validator: (value: string) => ['white', 'primary', 'grey'].includes(value),
    },
  },
})
export default class Loader extends Vue {
  readonly color!: LoaderColor;

  get strokeColor(): string {
    switch (this.color) {
      case 'primary':
        return '#2bc06e';
      case 'grey':
        return '#d9d9d9';
      default:
        return '#fff';
    }
  }
}
</script>
