<template>
  <div class="wrapper">
    <Header/>
    <router-view/>
      <Footer/>
    <AAlert/>
    <AppLoader/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import AAlert from '@/components/AAlert.vue';
import AppLoader from '@/components/AppLoader.vue';

@Options({
  components: {
    AppLoader,
    Header,
    Footer,
    AAlert,
  },
})
export default class App extends Vue {
  created(): void {
    this.$store.dispatch('initProfile');
  }
}
</script>
