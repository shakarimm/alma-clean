<template>
  <button
      :type="type"
      class="btn btn--link btn--tt-none"
      :class="{
        'btn--text-medium': fontWeight === 'medium',
        'btn--text-regular': fontWeight === 'regular',
        'btn--link-secondary': color === 'gray' || color === 'secondary',
        'btn--link-danger': color === 'danger',
        'btn--gray': color === 'gray',
      }"
      :disabled="disabled"
      @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Loader from '@/components/Loader.vue';
import { PropType } from 'vue';

declare type ButtonTypes = 'button' | 'submit';
declare type ButtonColors = 'secondary' | 'primary' | 'danger' | 'gray';
declare type ButtonFontWeight = 'regular' | 'medium' | 'bold';

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
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String as PropType<ButtonColors>,
      required: false,
      default: 'secondary',
      validator: (value: string) => ['secondary', 'primary', 'danger', 'gray'].includes(value),
    },
    fontWeight: {
      type: String as PropType<ButtonFontWeight>,
      required: false,
      default: 'regular',
      validator: (value: string) => ['regular', 'medium', 'bold'].includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
export default class AButtonLink extends Vue {
  readonly text!: string;
  readonly disabled!: boolean;
  readonly type!: ButtonTypes;
  readonly color!: ButtonColors;
  readonly fontWeight!: ButtonFontWeight;
}
</script>
