<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
