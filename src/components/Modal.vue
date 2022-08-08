<template>
  <div
      tabindex="999"
      ref="modal"
      class="modal"
      :class="{
        'modal--active': localIsActive,
        'modal--sized-sm': size === 'sm',
        'modal--sized-lg': size === 'lg',
        'modal--sized-vd': size === 'vd',
      }"
      @keydown.esc="close"
      @click.self="close">
    <div class="modal__window">
      <button type="button"
              @click="close"
              class="modal__close-btn"></button>
      <div class="modal__title" v-if="title !== null">
        {{ title }}
      </div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

declare type ModalSizeTypes = 'sm' | 'lg' | 'vd';

@Options({
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * @values 'sm', 'lg'
     */
    size: {
      type: String,
      default: 'lg',
      required: false,
      validator: (value: string) => ['sm', 'lg', 'vd'].includes(value),
    },
  },
  emits: ['close'],
  watch: {
    localIsActive() {
      if (this.localIsActive) {
        document.body.classList.add('modal-showed');
        this.$refs.modal.focus();
      } else {
        document.body.classList.remove('modal-showed');
        setTimeout(() => {
          this.$emit('close');
        }, this.closeEmitDelayMs);
      }
    },
    isActive() {
      this.localIsActive = this.isActive;
    },
  },
})
export default class Modal extends Vue {
  readonly isActive!: boolean;
  readonly title!: string|null;
  readonly size!: ModalSizeTypes;
  localIsActive = false;
  closeEmitDelayMs = 0;

  mounted(): void {
    this.localIsActive = this.isActive;
    this.determineCloseEmitDelay();
  }

  determineCloseEmitDelay(): void {
    const { transition } = getComputedStyle(this.$refs.modal as Element);
    const match = transition.match(/(opacity|all)\s(\d*\.?\d*)(s|ms)/);
    if (match !== null) {
      this.closeEmitDelayMs = parseFloat(match[2]);
      if (match[3] === 's') {
        this.closeEmitDelayMs *= 1000;
      }
      this.closeEmitDelayMs += 50;
    }
  }

  close(): void {
    this.localIsActive = false;
  }
}
</script>
