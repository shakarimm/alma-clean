<template>
  <div
      tabindex="999"
      ref="modal"
      class="modal"
      :class="{ 'modal--active': localIsActive }"
      @keydown.esc="close"
      @click.self="close">
    <div class="modal__window">
      <button type="button"
              @click="close"
              class="modal__close-btn"></button>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
    emits: ['close'],
  },
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
