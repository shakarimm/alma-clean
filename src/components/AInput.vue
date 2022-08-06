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
    <label v-if="label" class="input-block__label">{{ label }}</label>
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
          :disabled="disabled"
          v-model="localValue"
          cols="3"/>
      <input
          v-else
          ref="input"
          :type="type"
          class="input-control"
          :class="{
            'input-control--short': short,
          }"
          @focus="focused = true"
          @blur="focused = false"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          v-model="localValue"/>
    </div>
    <div v-if="errorsTexts && errorsTexts.length > 0"
         class="input-block__error">
      <template v-if="errorsTexts.length === 1">
        {{ errorsTexts[0] }}
      </template>
      <ul v-else>
        <li v-for="errorText in errorsTexts"
            :key="errorText">{{ errorText }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import Inputmask from 'inputmask';

declare type MarginTopTypes = 'sm' | 'md' | 'lg';
declare type InputTypes = 'text' | 'number' | 'password';

@Options({
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
    modelValue: {
      type: [String, Number],
      required: true,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    short: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String as PropType<InputTypes>,
      required: false,
      default: 'text',
      validator: (value: string) => ['text', 'number', 'password'].includes(value),
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    errorsTexts: {
      type: Array as PropType<string[]>,
      required: false,
      default: null,
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
  readonly disabled!: boolean;
  readonly short!: boolean;
  readonly label!: null|string;
  readonly mask!: null|Inputmask.Instance;
  readonly type!: InputTypes;
  readonly placeholder!: null|string;
  readonly errorsTexts!: null|string[];
  readonly invalid!: boolean;
  readonly readonly!: boolean;
  readonly isTextarea!: boolean;
  readonly marginTop!: null|MarginTopTypes;
  readonly modelValue!: string;
  readonly autoUnmask!: boolean;
  maskInput: Inputmask.Instance|null = null;
  focused = false;
  localValue: null|string|number = this.modelValue;

  $refs!: {
    input: HTMLFormElement,
  };

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
