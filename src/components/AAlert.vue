<template>
  <div class="alert-container">
    <div
        v-for="message in messages" :key="message"
        class="alert-toast"
        :class="`alert-toast--${colors[message.type]}`"
    >
      <div class="alert-toast__title">{{ message.text }}</div>
      <div class="alert-toast__close-btn"
           @click="onClose(message)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import { AlertMessage } from '@/store/modules/Alert';

@Options({
  computed: mapGetters({
    messages: 'alertMessages',
  }),
  watch: {
    messages() {
      if (this.messages) {
        // setTimeout(() => {
        // this.$store.dispatch('clearMessage');
        // }, 5000);
      }
    },
  },
})
export default class AAlert extends Vue {
  readonly messages!: string | null;
  colors = {
    error: 'danger',
    success: 'success',
  };

  onClose(message: AlertMessage): void {
    this.$store.dispatch('removeAlertMessage', message.id);
  }
}
</script>
