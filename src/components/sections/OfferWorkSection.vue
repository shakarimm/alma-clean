<template>
  <!--START SECTION OFFER WORK-->
  <section class="section section--pb-large s-offer-work" id="offer">
    <div class="container">
      <h2 class="title title--primary title--center">Хотите у нас работать?</h2>
      <div class="text text-center s-offer-work__subtitle-text">Значимость этих
        проблем настолько очевидна, что консультация с широким активом играет важную
        роль в формировании направлений прогрессивного развития. Товарищи!
        сложившаяся структура организации представляет собой интересный
        эксперимент проверки направлений прогрессивного развития.
      </div>
      <form class="resume-form"
            v-if="!jobResumeModalShowResult"
            @submit.prevent="submitJobResumeFullForm"
      >
        <div class="resume-form__row">
          <div class="resume-form__input-block input-block">
            <AInput
              v-model="form.name"
              :errors-texts="form.nameErrors"
              :invalid="form.nameErrors"
              @input="form.nameErrors = null"
              placeholder="ФИО">
            </AInput>
          </div>
          <div class="resume-form__input-block input-block">
            <AInput
              v-model="form.email"
              placeholder="Email">
            </AInput>
          </div>
          <div class="resume-form__input-block">
            <AInput
              v-model="form.phone"
              :errors-texts="form.phoneErrors"
              :invalid="form.phoneErrors"
              @input="form.phoneErrors = null"
              :mask="phoneMask"
              :auto-unmask="false"
              placeholder="(___) ___ __ __"
            >
              <template #prepend>+7</template>
            </AInput>
          </div>
        </div>
        <div class="resume-form__row">
          <div class="resume-form__input-block resume-form__input-block--full input-block">
            <input type="text" class="input-control input-control--short"
                   placeholder="Расскажите о себе">
          </div>
        </div>
        <div class="resume-form__btns">
          <div class="resume-form__btn-wrapper">
            <div class="btn btn--primary-outline">
              <label class="resume-form__label"
                     :class="(form.resume) ? '': ''"
              >
                {{ form.resume ? form.resume.name : 'Прикрепить резюме' }}
                <input
                  type="file"
                  ref='uploadInput'
                  accept="image/png, image/jpg, .pdf, .docx"
                  @input="onFileChanged"
                />
              </label>
            </div>
            <div class="resume-form__label-div-error"
                 v-if="!form.resume"
            >
              {{ form.resumeErrors }}
            </div>
          </div>
          <div class="resume-form__btn-wrapper">
            <AButton
              type="submit"
              class="resume-form__btn btn btn--primary"
              :loading="form.loading"
              text="Отправить заявку"
            />
          </div>
        </div>
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
      </div>
    </div>
  </section>
  <!--END SECTION OFFER WORK-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AInput from '@/components/AInput.vue';
import { phoneMask } from '@/app.config';
import AButton from '@/components/AButton.vue';
import jobResume from '@/repositories/api/job-resume';

interface JobResumeForm {
  name: string,
  phone: string,
  nameErrors: null | string[],
  phoneErrors: null | string[],
  resumeErrors: null | string,
  email: null,
  note: string,
  resume: File | null,
  loading: boolean,
}

@Options({
  components: {
    AInput,
    AButton,
  },
})
export default class OfferWorkSection extends Vue {
  readonly phoneMask = phoneMask;
  jobResumeModalShowResult = false;
  form: JobResumeForm = {
    name: '',
    phone: '',
    nameErrors: null,
    phoneErrors: null,
    resumeErrors: null,
    email: null,
    note: '',
    resume: null,
    loading: false,
  };

  async submitJobResumeFullForm(): Promise<void> {
    if (await this.submitJobResumeForm()) {
      this.jobResumeModalShowResult = true;
    }
  }

  async submitJobResumeForm(): Promise<boolean> {
    if (!this.validateJobResumeForm(this.form)) return false;
    try {
      this.form.loading = true;
      const response = await jobResume.send({
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        note: this.form.note,
        resume: this.form.resume!,
      });
      if (response.data?.successful) {
        this.form.name = '';
        this.form.phone = '';
        this.form.email = null;
        this.form.resume = null;
        return true;
      }
      this.$store.dispatch('showAlertError', 'При отправке произошла ошибка');
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При отправке произошла ошибка');
    } finally {
      this.form.loading = false;
    }
    return false;
  }

  validateJobResumeForm(form: JobResumeForm): boolean {
    let valid = true;

    if (form.name.trim().length < 1) {
      form.nameErrors = ['Укажите имя'];
      valid = false;
    }
    if (!form.resume) {
      form.resumeErrors = 'Прикрипите файл';
      valid = false;
    }
    if (!this.$helpers.validPhone(form.phone)) {
      form.phoneErrors = ['Укажите номер телефона'];
      valid = false;
    }
    return valid;
  }

  onFileChanged() {
    const { files } = (this.$refs.uploadInput as HTMLInputElement);
    this.form.resume = files && files[0] ? files[0] : null;
  }
}
</script>
