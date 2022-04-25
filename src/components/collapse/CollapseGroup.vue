<template>
  <slot></slot>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { computed } from 'vue';

@Options({
  provide() {
    return {
      activeInGroup: computed(() => this.activeInGroup),
      onClickCallback: this.onClickCallback,
    };
  },
})
export default class CollapseGroup extends Vue {
  activeInGroup: HTMLElement|null = null;

  onClickCallback(element: HTMLElement): void {
    this.activeInGroup = element;
  }
}
</script>
