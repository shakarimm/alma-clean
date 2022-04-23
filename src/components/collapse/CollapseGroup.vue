<template>
  <div ref="children2" @v-on:test="apcho">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class CollapseGroup extends Vue {
  created(): void {
    // this.$on('test', (message: any) => {
    //   alert('AGAAAAA');
    // });
    // (this.$refs.children2 as any).$on('test', (message: any) => {
    //   alert('AGAAAAA22222');
    // });
    // this.$refs.children.getElementsByClassName('collapse');
  }
  mounted(): void {
    // (this.$refs.children2 as any).addEventListener('test', (message: any) => {
    //   alert('AGAAAAA22222');
    // });
  }
  apcho(): void {
    alert('sd');
  }
}
</script>
