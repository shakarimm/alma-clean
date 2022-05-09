<template>
  <div ref="inputBlock" class="input-block"
    :class="{
      'input-block--invalid': invalid,
      'input-block--focused': focused,
      'input-block--mt-sm': marginTop === 'sm',
      'input-block--mt-md': marginTop === 'md',
      'input-block--mt-lg': marginTop === 'lg',
      'input-block--readonly': readonly,
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
          :readonly="readonly"
          v-model="localValue"
          cols="3"/>
      <input
          v-else
          ref="input"
          :type="type"
          class="input-control"
          @focus="focused = true"
          @blur="focused = false"
          :placeholder="placeholder"
          :readonly="readonly"
          v-model="localValue"/>
    </div>
    <div v-if="errorText !== null"
         class="input-block__error"
         v-text="errorText"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import Inputmask from 'inputmask';

declare type MarginTopTypes = 'sm' | 'md' | 'lg';
declare type InputTypes = 'text' | 'number' | 'password';

@Options({
  inject: ['activeInGroup', 'onClickCallback'],
  emits: ['update:modelValue'],
  watch: {
    localValue() {
      this.$emit('update:modelValue', this.unmaskedValue);
    },
    modelValue() {
      this.localValue = this.modelValue;
    },
  },
  props: {
    type: {
      type: String as PropType<InputTypes>,
      required: false,
      default: 'text',
      validator: (value: string) => ['text', 'number', 'password'].includes(value),
    },
    modelValue: {
      type: [String, Number],
      required: true,
      default: '',
    },
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
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    mask: {
      type: Object as PropType<Inputmask.Instance>,
      required: false,
      default: null,
    },
    autoUnmask: {
      type: Boolean,
      required: false,
      default: true,
    },
    marginTop: {
      type: String as PropType<MarginTopTypes>,
      required: false,
      default: null,
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
  },
})
export default class AInput extends Vue {
  readonly mask!: null|Inputmask.Instance;
  readonly type!: InputTypes;
  readonly placeholder!: null|string;
  readonly errorText!: null|string;
  readonly invalid!: boolean;
  readonly readonly!: boolean;
  readonly isTextarea!: boolean;
  readonly marginTop!: null|MarginTopTypes;
  readonly modelValue!: string;
  readonly autoUnmask!: boolean;
  maskInput: Inputmask.Instance | null = null;
  focused = false;
  localValue: null|string|number = this.modelValue;

  $refs!: {
    input: HTMLFormElement
  }

  mounted(): void {
    if (this.mask != null && !this.isTextarea) {
      this.maskInput = this.mask.mask(this.$refs.input);
    }
  }

  get unmaskedValue(): null|string|number {
    let value = this.localValue;
    if (value !== null && this.maskInput != null && this.autoUnmask) {
      this.maskInput.setValue(value.toString());
      value = this.maskInput.unmaskedvalue();
    }
    return value;
  }
}
</script>
