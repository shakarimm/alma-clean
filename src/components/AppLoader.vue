<template>
  <div
      class="app-loader"
      :class="{
        'app-loader--show': showing,
      }">
    <div class="app-loader__icon"><Loader/></div>
    <div
        v-if="text"
        class="app-loader__text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';

@Options({
  components: { Loader },
  computed: mapGetters({
    showing: 'appLoaderShowing',
    text: 'appLoaderText',
  }),
})
export default class AppLoader extends Vue {
  readonly showing!: boolean;
  readonly text!: null|string;
}
</script>
