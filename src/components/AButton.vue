<template>
  <button
      :type="type"
      class="btn btn--primary"
      :class="{
        'btn--small': small,
        'btn--circle': circle,
        'btn--loading': loading,
        'btn--text-regular': fontWeight === 'regular',
      }"
      :disabled="disabled"
      @click="$emit('click')"
  >
    <span class="btn__text">
      {{ text }}
    </span>
    <span class="btn__loader">
      <Loader/>
    </span>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Loader from '@/components/Loader.vue';
import { PropType } from 'vue';

declare type ButtonTypes = 'button' | 'submit';
declare type ButtonFontWeights = 'bold' | 'regular';

@Options({
  emits: ['click'],
  components: {
    Loader,
  },
  props: {
    type: {
      type: String as PropType<ButtonTypes>,
      required: false,
      default: 'button',
      validator: (value: string) => ['button', 'submit'].includes(value),
    },
    fontWeight: {
      type: String as PropType<ButtonFontWeights>,
      required: false,
      default: 'regular',
      validator: (value: string) => ['bold', 'regular'].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    circle: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
export default class AButton extends Vue {
  readonly text!: string;
  readonly small!: boolean;
  readonly disabled!: boolean;
  readonly circle!: boolean;
  readonly loading!: boolean;
  readonly fontWeight!: ButtonFontWeights;
  readonly type!: ButtonTypes;
}
</script>
