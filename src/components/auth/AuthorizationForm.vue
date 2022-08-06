<template>
  <div class="shadow-block">
    <div
        v-if="currentForm === 'sign-up'"
        class="block-title block-underline">Регистрация</div>
    <div
        v-if="currentForm === 'sign-in'"
        class="block-title block-underline">Вход</div>
    <div
        v-if="currentForm === 'forget-password'"
        class="block-title block-underline">Восстановление пароля</div>
    <div class="shadow-block__container block-underline">
      <form v-if="currentForm === 'sign-up'"
            class="authorization-form"
            @submit.prevent="submitSignUpForm">
        <div class="authorization-form__inputs">
          <AInput class="authorization-form__input-block"
                  v-model="signUpForm.firstName"
                  @input="signUpForm.firstNameErrors = null"
                  :invalid="signUpForm.firstNameErrors"
                  :errors-texts="signUpForm.firstNameErrors"
                  placeholder="Имя"/>
          <AInput class="authorization-form__input-block"
                  v-model="signUpForm.lastName"
                  @input="signUpForm.lastNameErrors = null"
                  :invalid="signUpForm.lastNameErrors"
                  :errors-texts="signUpForm.lastNameErrors"
                  placeholder="Фамилия"/>
          <AInput class="authorization-form__input-block"
                  v-model="signUpForm.email"
                  @input="signUpForm.emailErrors = null"
                  :invalid="signUpForm.emailErrors"
                  :errors-texts="signUpForm.emailErrors"
                  margin-top="md"
                  placeholder="Email"/>
          <AInput class="authorization-form__input-block"
                  v-model="signUpForm.phone"
                  @input="signUpForm.phoneErrors = null"
                  :invalid="signUpForm.phoneErrors"
                  :errors-texts="signUpForm.phoneErrors"
                  margin-top="md"
                  :mask="phoneMask"
                  :auto-unmask="false"
                  placeholder="(___) ___ __ __">
            <template #prepend>+7</template>
          </AInput>
          <AInput class="authorization-form__input-block"
                  type="password"
                  v-model="signUpForm.password"
                  @input="signUpForm.passwordErrors = null"
                  :invalid="signUpForm.passwordErrors"
                  :errors-texts="signUpForm.passwordErrors"
                  margin-top="md"
                  placeholder="Пароль"/>
          <AInput class="authorization-form__input-block"
                  type="password"
                  v-model="signUpForm.passwordConfirmation"
                  @input="signUpForm.passwordConfirmationErrors = null"
                  :invalid="signUpForm.passwordConfirmationErrors"
                  :errors-texts="signUpForm.passwordConfirmationErrors"
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
          <div v-if="signUpErrors && signUpErrors.length > 0"
               class="alert-box alert-box--danger alert-box--mt-sm">
            <ul>
              <li
                  v-for="signUpError in signUpErrors"
                  :key="signUpError"
              >{{ signUpError }}</li>
            </ul>
          </div>
          <AButtonLink
              class="authorization-form__change-from-btn"
              text="У меня есть аккаунт"
              :disabled="isLoading"
              @click="currentForm = 'sign-in'"
          />
        </div>
      </form>
      <form
          v-if="currentForm === 'sign-in'"
          class="authorization-form"
          @submit.prevent="submitSignInForm">
        <div class="authorization-form__inputs">
          <AInput class="authorization-form__input-block"
                  v-model="signInForm.email"
                  @input="signInForm.emailErrors = null"
                  :invalid="signInForm.emailErrors"
                  :errors-texts="signInForm.emailErrors"
                  margin-top="md"
                  placeholder="Email"/>
          <AInput class="authorization-form__input-block"
                  type="password"
                  v-model="signInForm.password"
                  @input="signInForm.passwordErrors = null"
                  :invalid="signInForm.passwordErrors"
                  :errors-texts="signInForm.passwordErrors"
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
          <div v-if="signInErrors && signInErrors.length > 0"
               class="alert-box alert-box--danger alert-box--mt-sm">
            <ul>
              <li
                  v-for="signInError in signInErrors"
                  :key="signInError"
              >{{ signInError }}</li>
            </ul>
          </div>
          <AButtonLink
              class="authorization-form__change-from-btn"
              text="Создать новый аккаунт"
              @click="currentForm = 'sign-up'"
              :disabled="isLoading"
          />
          <AButtonLink
              class="authorization-form__change-from-btn"
              text="Забыли пароль?"
              @click="currentForm = 'forget-password'"
              :disabled="isLoading"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AInput from '@/components/AInput.vue';
import {
  SignUpForm,
  SignInForm,
} from '@/types/api';
import { phoneMask } from '@/app.config';
import AButton from '@/components/AButton.vue';
import auth from '@/repositories/api/auth';
import AButtonLink from '@/components/AButtonLink.vue';
import { PropType } from 'vue';

export declare type AuthForms = 'sign-up' | 'sign-in' | 'forget-password';

@Options({
  emits: ['signUpDone', 'signInDone'],
  components: {
    AButtonLink,
    AButton,
    AInput,
  },
  props: {
    initialForm: {
      type: String as PropType<AuthForms>,
      required: false,
      default: 'sign-up',
      validator: (value: string) => ['sign-up', 'sign-in', 'forget-password'].includes(value),
    },
  },
})
export default class AuthorizationForm extends Vue {
  readonly initialForm!: AuthForms;
  readonly phoneMask = phoneMask;
  signUpForm: SignUpForm = this.emptySignUpForm();
  signInForm: SignInForm = this.emptySignInForm();
  isLoading = false;
  currentForm: AuthForms = this.initialForm;
  signUpErrors: null|string[] = null;
  signInErrors: null|string[] = null;

  // -----------
  // ----------- SignUp
  // -----------
  emptySignUpForm(): SignUpForm {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      password: null,
      passwordConfirmation: null,
      firstNameErrors: null,
      lastNameErrors: null,
      emailErrors: null,
      phoneErrors: null,
      passwordErrors: null,
      passwordConfirmationErrors: null,
    };
  }

  validSignUpForm(): boolean {
    let valid = true;

    if (this.signUpForm.firstName === null || this.signUpForm.firstName.trim().length < 1) {
      this.signUpForm.firstNameErrors = ['Введите имя'];
      valid = false;
    }
    if (this.signUpForm.lastName === null || this.signUpForm.lastName.trim().length < 1) {
      this.signUpForm.lastNameErrors = ['Введите фамилию'];
      valid = false;
    }
    if (this.signUpForm.email === null || !this.$helpers.validEmail(this.signUpForm.email)) {
      this.signUpForm.emailErrors = ['Введите корректный Емейл'];
      valid = false;
    }
    if (!this.$helpers.validPhone(this.signUpForm.phone)) {
      this.signUpForm.phoneErrors = ['Введите номер телефона'];
      valid = false;
    }
    if (this.signUpForm.password === null || this.signUpForm.password.length < 6) {
      this.signUpForm.passwordErrors = ['Пароль должен содержать не меньше 6 символов'];
      valid = false;
    }
    if (this.signUpForm.passwordConfirmation === null
        || this.signUpForm.password !== this.signUpForm.passwordConfirmation) {
      this.signUpForm.passwordConfirmationErrors = ['Пароли не совпадают'];
      valid = false;
    }

    return valid;
  }

  async submitSignUpForm(): Promise<void> {
    if (!this.validSignUpForm()) return;
    this.isLoading = true;
    this.signUpErrors = null;
    try {
      const response = await auth.signUp({
        first_name: `${this.signUpForm.firstName}`,
        last_name: `${this.signUpForm.lastName}`,
        email: `${this.signUpForm.email}`,
        phone: `${this.signUpForm.phone}`,
        password: `${this.signUpForm.password}`,
        password_confirmation: `${this.signUpForm.passwordConfirmation}`,
      });
      if (response.data?.token) {
        this.$store.dispatch('saveToken', response.data.token);
        this.$emit('signUpDone');
        this.signUpForm = this.emptySignUpForm();
      } else {
        this.$store.dispatch('showAlertError', 'При регистрации произошла ошибка');
      }
    } catch (e) {
      if (e?.response?.data?.error_type) {
        if (e.response.data.validation_errors) {
          const validationErrors = e.response.data.validation_errors;
          this.signUpForm.emailErrors = validationErrors.email;
          this.signUpForm.passwordErrors = validationErrors.password;
          this.signUpForm.phoneErrors = validationErrors.phone;
          return;
        }
      }
      this.$store.dispatch('showAlertError', 'При регистрации произошла ошибка');
    } finally {
      this.isLoading = false;
    }
  }

  // -----------
  // ----------- SignIn
  // -----------
  emptySignInForm(): SignInForm {
    return {
      email: null,
      password: null,
      emailErrors: null,
      passwordErrors: null,
    };
  }

  validSignInForm(): boolean {
    let valid = true;

    if (this.signInForm.email === null || !this.$helpers.validEmail(this.signInForm.email)) {
      this.signInForm.emailErrors = ['Введите корректный E-Mail'];
      valid = false;
    }
    if (this.signInForm.password === null) {
      this.signInForm.passwordErrors = ['Введите пароль'];
      valid = false;
    }

    return valid;
  }

  async submitSignInForm(): Promise<void> {
    if (!this.validSignInForm()) return;
    this.isLoading = true;
    this.signInErrors = null;
    try {
      const response = await auth.signIn({
        email: `${this.signInForm.email}`,
        password: `${this.signInForm.password}`,
      });
      if (response.data?.token) {
        this.$store.dispatch('saveToken', response.data.token);
        this.$emit('signInDone');
        this.signInForm = this.emptySignInForm();
      } else {
        this.$store.dispatch('showAlertError', 'При попытке входа произошла ошибка');
      }
    } catch (e) {
      if (e?.response?.data?.error_type) {
        if (e.response.data.error_type === 'credentials_invalid') {
          this.signInErrors = ['E-Mail или пароль введены неверно'];
          return;
        }
      }
      this.$store.dispatch('showAlertError', 'При попытке входа произошла ошибка');
    } finally {
      this.isLoading = false;
    }
  }
}
</script>
