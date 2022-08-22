<template>
  <div class="wrapper">
    <Header @mobileMenuChanged="onMobileMenuChanged"/>
    <router-view/>
    <Footer/>
    <AAlert/>
    <AppLoader/>
  </div>
  <FeedbackModal/>
  <div
    class="overlay"
    :class="{ 'overlay--show': showOverlay }"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import AAlert from '@/components/AAlert.vue';
import AppLoader from '@/components/AppLoader.vue';
import Modal from '@/components/Modal.vue';
import FeedbackModal from '@/components/modals/FeedbackModal.vue';

@Options({
  components: {
    FeedbackModal,
    AppLoader,
    Header,
    Footer,
    AAlert,
    Modal,
  },
})
export default class App extends Vue {
  showOverlay = false;
  created(): void {
    this.$store.dispatch('initProfile');
  }
  onMobileMenuChanged(isOpened: boolean) {
    this.showOverlay = isOpened;
  }
}
</script>
