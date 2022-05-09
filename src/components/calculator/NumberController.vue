<template>
  <div class="number-controller-group">
    <div
        v-if="title !== null"
        class="number-controller-group__title">{{ title }}</div>
    <div class="number-controller"
         :class="{
            'number-controller--zero': parseInt(localValue, 0) === min,
            'number-controller--primary': color === 'primary',
            'number-controller--secondary': color === 'secondary',
         }">
      <button type="button"
              class="number-controller__btn number-controller__btn--minus"
              :class="{ 'number-controller__btn--active': localValue > min }"
              @click="localValue--"/>
      <input
          ref="input"
          type="text"
          :value="formattingValue"
          @focus="isFocusedInput = true"
          @blur="isFocusedInput = false"
          @keypress="onInputKeypress"
          @keyup="onInputKeyup"
          class="number-controller__input">
      <button type="button"
              class="number-controller__btn number-controller__btn--plus"
              :class="{ 'number-controller__btn--active': localValue < max }"
              @click="localValue++"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';

export type NumberControllerColor = 'primary' | 'secondary';

@Options({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String as PropType<NumberControllerColor>,
      required: false,
      default: 'primary',
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: false,
      default: 99,
    },
    postfix: {
      type: [String, Array],
      required: false,
      default: null,
      validator: (value: string|Array<string>) => !Array.isArray(value)
        || (Array.isArray(value) && (value as Array<string>).length === 3),
    },
  },
  watch: {
    modelValue: {
      deep: true,
      handler(): void {
        this.localValue = this.modelValue;
      },
    },
    localValue: {
      deep: true,
      handler(): void {
        if (this.localValue < this.min) {
          this.localValue = this.min;
        } else if (this.localValue > this.max) {
          this.localValue = this.max;
        } else {
          this.$emit('update:modelValue', this.localValue);
        }
      },
    },
  },
})
export default class NumberController extends Vue {
  readonly modelValue!: number;
  readonly title!: null|string;
  readonly color!: NumberControllerColor;
  readonly min!: number;
  readonly max!: number;
  readonly postfix!: null|string|Array<string>;
  localValue = this.modelValue;
  isFocusedInput = false;

  get formattingValue(): string {
    if (this.isFocusedInput || this.postfix === null) {
      return this.localValue.toString();
    }
    if (typeof this.postfix === 'string') {
      return `${this.localValue}${this.postfix}`;
    }
    return this.$helpers.pluralize(this.localValue, this.postfix);
  }

  onInputKeypress(event: KeyboardEvent): void {
    if (Number.isNaN(parseInt(event.key, 0))) {
      event.preventDefault();
    }
  }

  onInputKeyup(event: KeyboardEvent): void {
    const value = (this.$refs.input as HTMLFormElement).value as string;
    if (value.toString().length > 0) {
      this.localValue = parseInt(value, 0);
    }
  }
}
</script>
