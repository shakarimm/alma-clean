<template>
  <div class="success-box">
    <div class="success-box__icon">
      <i class="ac-icon ac-icon-check"></i>
    </div>
    <div class="success-box__text">
      Сообщение успешно отправлено!
      <br>
      Наш менеджер скоро свяжется с Вами.
    </div>
    <AButton
        class="success-box__btn"
        @click="$emit('btnClick')"
        font-weight="bold"
        text="Ok"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AButton from '@/components/AButton.vue';

@Options({
  components: {
    AButton,
  },
  emits: ['btnClick'],
})
export default class FeedbackSuccessBox extends Vue {}
</script>
