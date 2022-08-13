<template>
  <Modal
      name="feedback"
      size="sm"
      title="Написать нам"
      class="feedback-modal"
  >
    <form v-if="!feedbackModalShowResult"
          @submit.prevent="submitFeedbackFullForm">
      <AInput
          v-model="feedbackFullForm.name"
          :errors-texts="feedbackFullForm.nameErrors"
          :invalid="feedbackFullForm.nameErrors"
          @input="feedbackFullForm.nameErrors = null"
          placeholder="Ваше имя"/>
      <AInput
          margin-top="md"
          v-model="feedbackFullForm.phone"
          :errors-texts="feedbackFullForm.phoneErrors"
          :invalid="feedbackFullForm.phoneErrors"
          @input="feedbackFullForm.phoneErrors = null"
          :mask="phoneMask"
          :auto-unmask="false"
          placeholder="(___) ___ __ __">
        <template #prepend>+7</template>
      </AInput>
      <AInput
          margin-top="md"
          v-model="feedbackFullForm.email"
          placeholder="E-Mail"/>
      <AInput
          :is-textarea="true"
          margin-top="md"
          v-model="feedbackFullForm.comment"
          placeholder="Сообщение"/>
      <AButton
          type="submit"
          class="feedback-modal__submit-btn"
          :full-width="true"
          :loading="feedbackFullForm.loading"
          font-weight="bold"
          text="Быстрый заказ"/>
    </form>
    <div class="success-box" v-else>
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
          @click="$store.dispatch('closeModal', 'feedback')"
          font-weight="bold"
          text="Ok"/>
    </div>
  </Modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Modal from '@/components/Modal.vue';
import AInput from '@/components/AInput.vue';
import AButton from '@/components/AButton.vue';
import feedback from '@/repositories/api/feedback';
import { phoneMask } from '@/app.config';

interface FeedbackForm {
  name: string,
  phone: string,
  nameErrors: null | string[],
  phoneErrors: null | string[],
  email: null,
  comment: null,
  loading: boolean,
}

@Options({
  components: {
    Modal,
    AButton,
    AInput,
  },
})
export default class FeedbackModal extends Vue {
  readonly phoneMask = phoneMask;
  feedbackModalIsActive = false;
  feedbackSuccessModalIsActive = false;
  feedbackModalShowResult = false;
  feedbackFullForm: FeedbackForm = {
    name: '',
    phone: '',
    nameErrors: null,
    phoneErrors: null,
    email: null,
    comment: null,
    loading: false,
  };

  async submitFeedbackFullForm(): Promise<void> {
    if (await this.submitFeedbackForm(this.feedbackFullForm)) {
      this.feedbackModalShowResult = true;
    }
  }

  async submitFeedbackForm(form: FeedbackForm): Promise<boolean> {
    if (!this.validateFeedbackForm(form)) return false;
    try {
      form.loading = true;
      const response = await feedback.send({
        name: form.name,
        phone: form.phone,
        email: form.email,
        comment: form.comment,
      });
      if (response.data?.successful) {
        form.name = '';
        form.phone = '';
        form.email = null;
        form.comment = null;
        return true;
      }
      this.$store.dispatch('showAlertError', 'При отправке произошла ошибка');
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При отправке произошла ошибка');
    } finally {
      form.loading = false;
    }
    return false;
  }

  feedbackShortForm: FeedbackForm = {
    name: '',
    phone: '',
    nameErrors: null,
    phoneErrors: null,
    email: null,
    comment: null,
    loading: false,
  };

  validateFeedbackForm(form: FeedbackForm): boolean {
    let valid = true;

    if (form.name.trim().length < 1) {
      form.nameErrors = ['Укажите имя'];
      valid = false;
    }
    if (!this.$helpers.validPhone(form.phone)) {
      form.phoneErrors = ['Укажите номер телефона'];
      valid = false;
    }

    return valid;
  }
}
</script>
