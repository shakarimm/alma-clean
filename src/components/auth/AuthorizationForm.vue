<template>
  <form class="authorization-form"
        @submit.prevent="onSubmit">
    <div class="authorization-form__inputs">
      <AInput class="authorization-form__input-block"
              v-model="form.firstName"
              @input="form.firstNameInvalid = false"
              :invalid="form.firstNameInvalid"
              error-text="Укажите имя"
              placeholder="Имя"/>
      <AInput class="authorization-form__input-block"
              v-model="form.lastName"
              @input="form.lastNameInvalid = false"
              :invalid="form.lastNameInvalid"
              error-text="Укажите фамилию"
              placeholder="Фамилия"/>
      <AInput class="authorization-form__input-block"
              v-model="form.email"
              @input="form.emailInvalid = false"
              :invalid="form.emailInvalid"
              error-text="Укажите E-Mail"
              margin-top="md"
              placeholder="Email"/>
      <AInput class="authorization-form__input-block"
              v-model="form.phone"
              @input="form.phoneInvalid = false"
              :invalid="form.phoneInvalid"
              error-text="Укажите номер телефона"
              margin-top="md"
              :mask="phoneMask"
              :auto-unmask="false"
              placeholder="(___) ___ __ __">
        <template #prepend>+7</template>
      </AInput>
      <AInput class="authorization-form__input-block"
              type="password"
              v-model="form.password"
              @input="form.passwordInvalid = false"
              :invalid="form.passwordInvalid"
              error-text="Пароль должен содержать минимум 8 символов"
              margin-top="md"
              placeholder="Пароль"/>
      <AInput class="authorization-form__input-block"
              type="password"
              v-model="form.passwordConfirmation"
              @input="form.passwordConfirmationInvalid = false"
              :invalid="form.passwordConfirmationInvalid"
              error-text="Пароли не совпадают"
              margin-top="md"
              placeholder="Пароль"/>
    </div>
    <div class="authorization-form__buttons">
      <AButton
          type="submit"
          class="authorization-form__submit-btn"
          text="Продолжить"
          font-weight="bold"
          :loading="isLoading"
      />
      <AButtonLink
          class="authorization-form__change-from-btn"
          text="У меня есть аккаунт"
          :disabled="isLoading"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AInput from '@/components/AInput.vue';
import { RegisterForm } from '@/types/api';
import { phoneMask } from '@/app.config';
import AButton from '@/components/AButton.vue';
import auth from '@/repositories/api/auth';
import AButtonLink from '@/components/AButtonLink.vue';

@Options({
  emits: ['authorized'],
  components: {
    AButtonLink,
    AButton,
    AInput,
  },
})
export default class AuthorizationForm extends Vue {
  phoneMask = phoneMask;
  form: RegisterForm = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    passwordConfirmation: null,
    firstNameInvalid: false,
    lastNameInvalid: false,
    emailInvalid: false,
    phoneInvalid: false,
    passwordInvalid: false,
    passwordConfirmationInvalid: false,
  }
  isLoading = false;

  validForm(): boolean {
    let valid = true;

    if (this.form.firstName === null || this.form.firstName.trim().length < 1) {
      this.form.firstNameInvalid = true;
      valid = false;
    }
    if (this.form.lastName === null || this.form.lastName.trim().length < 1) {
      this.form.lastNameInvalid = true;
      valid = false;
    }
    if (this.form.email === null || !this.$helpers.validEmail(this.form.email)) {
      this.form.emailInvalid = true;
      valid = false;
    }
    if (this.form.phone === null || !this.$helpers.validPhone(this.form.phone)) {
      this.form.phoneInvalid = true;
      valid = false;
    }
    if (this.form.password === null || this.form.password.length < 6) {
      this.form.passwordInvalid = true;
      valid = false;
    }
    if (this.form.passwordConfirmation === null
        || this.form.password !== this.form.passwordConfirmation) {
      this.form.passwordConfirmationInvalid = true;
      valid = false;
    }

    return valid;
  }

  async onSubmit(): Promise<void> {
    if (!this.validForm()) return;
    this.isLoading = true;
    try {
      const response = await auth.signUp({
        first_name: `${this.form.firstName}`,
        last_name: `${this.form.lastName}`,
        email: `${this.form.email}`,
        phone: `${this.form.phone}`,
        password: `${this.form.password}`,
        password_confirmation: `${this.form.passwordConfirmation}`,
      });
      this.$emit('authorized');
    } catch (e) {
      // if (e?.response?.data?.error_type) {
      //   if (e.response.data.error_type === 'some_error') {
      //     this.$store.dispatch('showAlertError', '!!');
      //     return;
      //   }
      // }
      this.$store.dispatch('showAlertError', 'При регистрации произошла ошибка');
    } finally {
      this.isLoading = false;
    }
  }
}
</script>
