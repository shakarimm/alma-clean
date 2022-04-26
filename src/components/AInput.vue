<template>
  <div ref="inputBlock" class="input-block"
    :class="{
      'input-block--invalid': invalid,
      'input-block--focused': focused,
      'input-block--mt-sm': marginTop === 'sm',
      'input-block--mt-md': marginTop === 'md',
      'input-block--mt-lg': marginTop === 'lg',
    }">
    <div class="input-block__wrapper">
      <div
          v-if="$slots.prepend"
          class="input-block__prepend">
        <slot name="prepend"></slot>
      </div>
      <textarea
          v-if="isTextarea"
          @focus="focused = true"
          @blur="focused = false"
          class="input-control"
          :placeholder="placeholder"
          cols="3"/>
      <input
          v-else
          type="text"
          class="input-control"
          @focus="focused = true"
          @blur="focused = false"
          :placeholder="placeholder">
    </div>
    <div v-if="errorText !== null"
         class="input-block__error"
         v-text="errorText"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

declare type MarginTopTypes = 'sm' | 'md' | 'lg';

@Options({
  inject: ['activeInGroup', 'onClickCallback'],
  props: {
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    errorText: {
      type: String,
      required: false,
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false,
    },
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * @values 'sm', 'md', 'lg'
     */
    marginTop: {
      type: String,
      required: false,
      default: null,
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
  },
})
export default class AInput extends Vue {
  readonly placeholder!: null|string;
  readonly errorText!: null|string;
  readonly invalid!: boolean;
  readonly isTextarea!: boolean;
  readonly marginTop!: null|MarginTopTypes;
  focused = false;
}
</script>
