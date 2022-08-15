<template>
  <div
      tabindex="999"
      ref="modal"
      class="modal"
      :class="{
        'modal--active': computedActive,
        'modal--sized-sm': size === 'sm',
        'modal--sized-lg': size === 'lg',
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
import { ModalName } from '@/store/modules/Modal';
import { PropType } from 'vue';
import { mapGetters } from 'vuex';

declare type ModalSizeTypes = 'sm' | 'lg' | null;

@Options({
  computed: mapGetters({
    modalName: 'modalName',
  }),
  props: {
    name: {
      type: String as PropType<ModalName>,
      required: true,
    },
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
     * @values 'sm', 'lg',
     */
    size: {
      type: String,
      required: false,
      validator: (value: string) => ['sm', 'lg', null].includes(value),
    },
  },
  emits: ['close'],
})
export default class Modal extends Vue {
  readonly title!: string|null;
  readonly size!: ModalSizeTypes;
  readonly name!: ModalName;
  readonly modalName!: ModalName|null;
  isActive = false;
  closeEmitDelayMs = 0;

  get isStoreActive(): boolean {
    return this.modalName === this.name;
  }

  get computedActive(): boolean {
    return this.isActive || this.isStoreActive;
  }

  mounted(): void {
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

  open(): void {
    this.$store.dispatch('openModal', this.name);
  }

  close(): void {
    this.$store.dispatch('closeModal', this.name);
  }
}
</script>
