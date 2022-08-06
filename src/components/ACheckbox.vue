<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input"
           v-model="localValue">
    <span class="checkbox__check">
      <i class="checkbox__icon ac-icon ac-icon-check"></i>
    </span>
    <span v-if="label"
          class="checkbox__text">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: false,
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
export default class ACheckbox extends Vue {
  readonly modelValue!: boolean;
  label!: null|string;
  localValue: boolean = this.modelValue;
}
</script>
