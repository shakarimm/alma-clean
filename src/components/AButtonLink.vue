<template>
  <button
      :type="type"
      class="btn btn--link-secondary btn--tt-none btn--text-regular"
      :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Loader from '@/components/Loader.vue';
import { PropType } from 'vue';

declare type ButtonTypes = 'button' | 'submit';

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
}
</script>
