<template>
  <div ref="collapse" class="collapse" :class="{ 'collapse--active': isActive }">
    <div class="collapse__label-wrapper" @click="onClick">
      <div class="collapse__label">
        {{ title }}
        <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
      </div>
    </div>
    <div class="collapse__content" :style="{ height: `${contentHeight}px` }">
      <div class="collapse__content-wrapper" ref="contentWrapper">
        <div class="collapse__text">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ComputedRef } from 'vue';

@Options({
  inject: ['activeInGroup', 'onClickCallback'],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  watch: {
    activeInGroup: {
      handler() {
        this.checkIsActiveInGroup();
      },
      deep: true,
    },
  },
})
export default class Collapse extends Vue {
  readonly activeInGroup!: ComputedRef<null|HTMLElement>;
  readonly onClickCallback!: null|CallableFunction;
  readonly title!: string;
  isActive = false;

  mounted(): void {
    this.checkIsActiveInGroup();
  }

  checkIsActiveInGroup(): void {
    if (this.activeInGroup === undefined || this.activeInGroup.value === null) return;
    this.isActive = this.activeInGroup.value === this.$refs.collapse;
  }

  get contentHeight(): number {
    if (!this.isActive) return 0;
    return (this.$refs.contentWrapper as HTMLElement).offsetHeight;
  }

  onClick(): void {
    this.isActive = !this.isActive;
    if (this.onClickCallback !== null && this.onClickCallback !== undefined) {
      this.onClickCallback(this.$refs.collapse);
    }
  }
}
</script>
