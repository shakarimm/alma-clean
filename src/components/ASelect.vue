<template>
  <div class="input-block"
     :class="{
      'input-block--invalid': invalid,
    }">
    <div class="input-block__wrapper">
      <div
          v-if="$slots.prepend"
          class="input-block__prepend">
        <slot name="prepend"></slot>
      </div>
      <v-select
          v-model="localValue"
          :reduce="option => option.value"
          :options="localOptions"
          :filterable="false"
          :searchable="false"
          :clearable="false"
          :selectable="option => option.selectable"
          transition="fade"
          :class="{ 'vs--not-selected': localValue === null }">
        <template #open-indicator>
          <i class="vs__custom-open-indicator ac-icon ac-icon-arrow-down"></i>
        </template>
        <template #option="{ label, disabled }">
          <li class="vs__custom-option"
              :class="{
                'vs__custom-option--disabled': disabled,
              }"
          >{{ label }}</li>
        </template>
      </v-select>
    </div>
    <div v-if="errorText !== null"
         class="input-block__error"
         v-text="errorText"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';

export interface ASelectOption {
  value: null|string|number,
  label: string,
  selectable: boolean,
}

@Options({
  inject: ['activeInGroup', 'onClickCallback'],
  props: {
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
    options: {
      type: Array as PropType<ASelectOption[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  watch: {
    localValue() {
      this.$emit('update:modelValue', this.localValue);
    },
    modelValue() {
      this.localValue = this.modelValue;
    },
  },
})
export default class ASelect extends Vue {
  readonly placeholder!: null|string;
  readonly options!: ASelectOption[];
  readonly errorText!: null|string;
  readonly invalid!: boolean;
  readonly modelValue!: string
  localValue: null|string|number = this.modelValue;

  get localOptions(): ASelectOption[] {
    if (this.placeholder !== null) {
      const options = Array.from(this.options);
      options.unshift({
        label: this.placeholder,
        value: null,
        selectable: false,
      });
      return options;
    }
    return this.options;
  }
}
</script>
