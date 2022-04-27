<template>
  <Header/>
  <router-view/>
  <Footer/>
  <AAlert/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import AAlert from '@/components/AAlert.vue';

@Options({
  components: {
    Header,
    Footer,
    AAlert,
  },
})
export default class App extends Vue {}
</script>
