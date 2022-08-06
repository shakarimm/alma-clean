<template>
  <div
      ref="btn"
      class="go-top-btn"
      @click="$helpers.scrollToTop">
    <i class="ac-icon ac-icon-arrow-down go-top-btn__icon"></i>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class GoTopButton extends Vue {
  $refs!: {
    btn: HTMLElement,
  };

  created(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        this.showBtn();
      } else {
        this.hideBtn();
      }
    });
  }

  showBtn(): void {
    this.$refs.btn.classList.add('go-top-btn--show');
  }

  hideBtn(): void {
    this.$refs.btn.classList.remove('go-top-btn--show');
  }
}
</script>
